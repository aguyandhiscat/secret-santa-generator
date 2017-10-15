export function has(arr: any[], item: any) {
    const index: number = arr.indexOf(item);
    if (index < 0) {
        return false;
    }
    return true;
}

export function removeItem(arr: any[], item: any) {
    const index: number = arr.indexOf(item);
    arr.splice(index, 1);
}
