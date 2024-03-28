function transporMatriz(matriz) {
    console.log("Matriz original:");
    for (let e of matriz) {
        console.log(e);
    }

    let matrizT = [];
    
    for (let i = 0; i < matriz[0].length; i++) {
        matrizT.push([]);
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matrizT[j][i] = matriz[i][j];
        }
    }

    console.log("\nTransposta:");
    for (let e of matrizT) {
        console.log(e);
    }
}

let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);
