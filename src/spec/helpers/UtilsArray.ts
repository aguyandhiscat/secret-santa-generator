export function has(arr: Array<any>, item: any) {
    const index: number = arr.indexOf(item);
    if (index < 0) {
        return false;
    }
    return true;
}

export function removeItem(arr: Array<any>, item: any) {
    const index: number = arr.indexOf(item);
    arr.splice(index, 1);
}
