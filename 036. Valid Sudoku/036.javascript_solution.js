var isValidSudoku = function (board) {
    const squares = {};
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === ".") continue;
            const r1 = Math.floor(r / 3), c1 = Math.floor(c / 3);
            if (!squares[`${r1},${c1}`]) {
                squares[`${r1},${c1}`] = new Set(board[r][c]);
            } else if (squares[`${r1},${c1}`].has(board[r][c])) {
                return false;
            } else {
                squares[`${r1},${c1}`].add(board[r][c]);
            }
        }
    }

    for (let row of board) {
        const nums = new Set();
        for (const num of row) {
            if (num === ".") {
                continue
            } else if (nums.has(num)) {
                return false;
            } else {
                nums.add(num);
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        const nums = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[j][i] === ".") {
                continue;
            } else if (nums.has(board[j][i])) {
                return false;
            } else {
                nums.add(board[j][i])
            }
        }
    }
    return true;
};