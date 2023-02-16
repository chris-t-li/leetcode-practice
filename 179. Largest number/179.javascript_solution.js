const largestNumber = (nums) => {


};

largestNumber([10, 2]);
largestNumber([3, 30, 34, 5, 9]);

const partition = (array, low, high) => {
    const pivot = array[high];
    let pivotIndex = high;
    let i = low;

    while (i < pivotIndex) {
        if (array[i] <= pivot) {
            ++i;
            continue;
        }
        [array[i], array[pivotIndex - 1]] = [array[pivotIndex - 1], array[i]];
        [array[pivotIndex], array[pivotIndex - 1]] = [array[pivotIndex - 1], array[pivotIndex]];
        --pivotIndex;
    }
    return pivotIndex;
}

console.log(partition([5, 4, 3, 2, 1], 0, 4))