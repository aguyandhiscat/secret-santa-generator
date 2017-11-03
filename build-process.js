const fs = require("fs"),
    { exec } = require("child_process"),
    util = require("util"),
    srcDirectory = "src",
    builtDirectory = "built",
    directoryFiles = {},
    tscBin = '"/media/app/node_modules/.bin/tsc"',
    tsConfigPath = '"/media/app/tsconfig.json"';
let tscWatchChild;
watchSrcForRemoves();
runTsc();

function watchSrcForRemoves() {
    const onWatchCallback = (directory) => {
        return (event, fileName) => {
            if (isTsFileAdded(directory, fileName)) {
                refreshDirectoryFiles(directory);
                restartTsc();
            }

            if (isFileRemoved(directory, fileName)) {
                refreshDirectoryFiles(directory);
                removeRespectiveJsFiles(directory, fileName);
            }
        };
    };
    watchDirectoryRecursive(srcDirectory, onWatchCallback);
}

function watchDirectoryRecursive(directory, onWatchCallback) {
    fs.watch(directory, onWatchCallback(directory));

    const fileNames = fs.readdirSync(directory);
    directoryFiles[directory] = fileNames;
    for (const fileName of fileNames) {
        const filePath = util.format("%s/%s", directory, fileName);
        if (fs.statSync(filePath).isDirectory()) {
            watchDirectoryRecursive(filePath, onWatchCallback);
        }
    }
}

function isFileRemoved(directory, fileName) {
    const filePath = util.format("%s/%s", directory, fileName);
    if (fs.existsSync(filePath) === false) {
        return true;
    }
    return false;
}

function removeRespectiveJsFiles(directory, fileName) {
    const baseFileName = fileName.replace(/\.[^.]*?$/, ""),
        srcRemoveRegexp = new RegExp(util.format("^%s/", srcDirectory)),
        directorySansSrc = directory.replace(srcRemoveRegexp, ""),
        jsFileName = baseFileName + ".js",
        jsMapFileName = baseFileName + ".js.map",
        builtFileDirectory = util.format("%s/%s", builtDirectory, directorySansSrc),
        jsFilePath = util.format("%s/%s", builtFileDirectory, jsFileName),
        jsMapFilePath = util.format("%s/%s", builtFileDirectory, jsMapFileName);

    try {
        fs.unlinkSync(jsFilePath);
        fs.unlinkSync(jsMapFilePath);
    } catch (e) { }
}

function isTsFileAdded(directory, fileName) {
    const fileNames = directoryFiles[directory];
    if (fileNames.indexOf(fileName) < 0) {
        return true;
    }
    return false;
}

function refreshDirectoryFiles(directory) {
    directoryFiles[directory] = fs.readdirSync(directory);
}

function restartTsc() {
    tscWatchChild.kill();
    runTsc();
}

function runTsc() {
    tscWatchChild = exec(tscBin + " -p " + tsConfigPath, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}
