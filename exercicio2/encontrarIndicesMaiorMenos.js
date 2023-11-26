function encontrarIndicesMaiorEMenor(arr) {
    if (arr.length === 0) {
        return "O array está vazio";
    }

    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[indiceMaior]) {
            indiceMaior = i;
        }
        if (arr[i] < arr[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}

module.exports = encontrarIndicesMaiorEMenor;
