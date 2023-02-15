

var rotate = function (matrix) {
    let start = 0, end = matrix.length - 1, count = matrix.length - 1;

    while (start < end / 2) {
        for (let i = start; i < count; i++) {
            const temp = matrix[i][start];
            matrix[i][start] = matrix[end - start][i];
            matrix[end - start][i] = matrix[end - i][end - start];
            matrix[end - i][end - start] = matrix[start][end - i];
            matrix[start][end - i] = temp;
        }
        start++;
        count--;
    }

    return matrix;
};