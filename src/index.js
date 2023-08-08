
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    const flattened = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            // Even rows: left to right
            for (let j = 0; j < matrix[i].length; j++) {
                flattened.push(matrix[i][j]);
            }
        } else {
            // Odd rows: right to left
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                flattened.push(matrix[i][j]);
            }
        }
    }

    return flattened;
}
