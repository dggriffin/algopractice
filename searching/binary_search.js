
function binarySearch(arr, target) {
    return divideAndConquer(arr, 0, arr.length - 1, target);
}

function divideAndConquer(arr, st, end, target) {
    if (st == end) return arr[st] === target ? st : -1;
    const mid = Math.floor((end - st) / 2) + st;
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return divideAndConquer(arr, st, mid, target);
    if (arr[mid] < target) return divideAndConquer(arr, mid + 1, end, target);
}

