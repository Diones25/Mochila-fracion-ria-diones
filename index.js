function ordena(a, b) {
    return (b.valor / b.peso) - (a.valor /a.peso)
}

function mochilaFracionária(mochila = [], pMax) {
    let pesoMax = pMax;
    let valorMax = 0.0;
    mochila.sort(ordena);
    let items = []

    for(let i = 0; i < mochila.length && pMax > 0; i++) {
        let peso = mochila[i].peso;
        let valor = mochila[i].valor;

        if(peso <= pMax) {
            items.push(mochila[i].indice);
            pMax -= peso;
            valorMax +=  valor;
        }
        else {
            let pesoFracional = (peso /pMax);
            let valorFracional = (valor / pesoFracional);
            items.push(`${mochila[i].indice} (${((valorFracional / valor) * 100).toFixed(2) }) %`);
            pMax = 0;
            valorMax += valorFracional;            
        }
    }

    return {"Items": items, "Peso": pesoMax - pMax,"Valor": valorMax.toFixed(2)} 

}

let mochila = mochilaFracionária([{indice: 0, peso: 10, valor: 15}, {indice: 1, peso: 40, valor: 90}, {indice: 2, peso: 26, valor:50}, {indice: 3, peso: 32, valor: 60}, {indice: 4, peso: 8, valor: 12}], 80);

console.log(`Solução: ${mochila.Items.join(", ")}`)
console.log(`Peso: ${mochila.Peso}`)
console.log(`Valor: ${mochila.Valor}`)

/*
    peso = 10, 40, 26, 32, 8 
    valores =  15, 90, 50, 60, 12 
    capacidade = 80
    res = 166.25

*/