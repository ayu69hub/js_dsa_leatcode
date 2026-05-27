var rotate = function(matrix){
    for(i=0;i<matrix.length;i++){
        for(j=0;j<matrix[i].length;j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    for(i=0;i<matrix.length;i++){
        let k=0 , j = matrix[i].length-1;
        while(k<j){
            let temp = matrix[i][k]
            matrix[i][k] = matrix[i][j]
            matrix[i][j] = temp
            k++
            j--
        }
    }
}