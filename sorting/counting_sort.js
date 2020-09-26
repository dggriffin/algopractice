
function countingSort(arr, maxNum) {
    const registry = new Array(maxNum).fill(0);
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        registry[arr[i]]++;
    }

    for (let i = 0; i < registry.length; i++) {
        while (registry[i]) {
            output.push(i)
            registry[i]--;
        }
    }

    return output;
}