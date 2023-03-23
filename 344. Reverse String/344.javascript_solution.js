const reverseString = (s) => {
    helper(s, 0, s.length - 1)
};

function helper(array, l, r) {
    // base case. Not using return value
    if (l >= r) return;
    [array[l], array[r]] = [array[r], array[l]]
    // recursive call
    helper(array, l + 1, r - 1);
}