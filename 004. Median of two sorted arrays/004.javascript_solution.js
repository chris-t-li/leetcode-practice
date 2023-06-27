/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const merged = [];
    let i = 0; j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i += 1;
        } else {
            merged.push(nums2[j]);
            j += 1;
        }
    }
    while (i < nums1.length) {
        merged.push(nums1[i]);
        i += 1;
    }
    while (j < nums2.length) {
        merged.push(nums2[j]);
        j += 1;
    }
    console.log(merged)

    if (merged.length % 2 === 0) {
        const idx = (merged.length / 2)
        return (merged[idx] + merged[idx - 1]) / 2;

    } else {
        const idx = (merged.length - 1) / 2;
        return merged[idx];
    }
};