

function mergeSort(arr) {
    return divideAndConquer(arr, 0, arr.length - 1);
}


function divideAndConquer(arr, st, end) {
    if (st === end) return [arr[st]];
    const mid = Math.floor((end - st) / 2);
    
    const arr1 = divideAndConquer(arr, st, mid);
    const arr2 = divideAndConquer(arr, mid + 1, end);
    return mergeArrays(arr1, arr2);
}

function mergeArrays(arr1, arr2) {
    let arr1Ptr = 0, arr2Ptr = 0;
    const output = new Array(arr1.length + arr2.length);

    for (let i = 0; i < output.length; i++) {
        if (arr1Ptr >= arr1.length) {
            output[i] = arr2[arr2Ptr];
            arr2Ptr++;
            continue;
        }

        if (arr2Ptr >= arr2.length) {
            output[i] = arr1[arr1Ptr];
            arr1Ptr++;
            continue;
        }

        if (arr1[arr1Ptr] >= arr2[arr2Ptr]) {
            output[i] = arr2[arr2Ptr];
            arr2Ptr++;
            continue;
        }
        
        output[i] = arr1[arr1Ptr];
        arr1Ptr++;
    }

    return output;
}