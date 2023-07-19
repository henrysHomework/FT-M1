'use strict';

function BinarioADecimal(num) {
//let numeroArr = num.split();
let suma = 0;
let potencia = 0;


   for (let i = num.length - 1; i >= 0; i--){
      suma += parseInt(num.charAt(i)) * 2 ** potencia;
      potencia++;
   }
return suma;
}

console.log (BinarioADecimal("111"));

function DecimalABinario(num) {
   let numBinario = "";

   while (num > 0) {
      let resto = num % 2;
      numBinario = resto + numBinario;

      num = Math.floor(num / 2);
   }

   return numBinario;

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
