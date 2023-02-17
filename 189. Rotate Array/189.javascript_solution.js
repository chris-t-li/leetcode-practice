const rotate = (nums, k) => {
    const temp = [...nums];
    for (let i = 0; i < nums.length; i++) {
        nums[(i + k) % nums.length] = temp[i];
    }
};