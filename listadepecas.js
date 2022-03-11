const listadepecas = [' pecas de teste' , ' AB ' , 'peca B']
console.log('quantidade de caracteres')

if (listadepecas.length <= 10) {

console.log('as pecas pode ser cadastradas');
}
for (let index = 0; index < listadepecas.length; index++ ) {
    const pecaatual = listadepecas[index];

if (pecaatual.length < 3) {
        console.log(pecaatual + ':a peca possui nome inferior a 3 caracteres e não pode ser cadastradas')
 } else
      console.log(pecaatual + ' : a peca pode ser cadastrada')
}
{
console.log('peso da peça')

const pesodapecaemgramas = 50;
if (pesodapecaemgramas >= 100) {
    console.log('peso sufuciente');
} else 
    console.log('valor insufuciente')
}    
