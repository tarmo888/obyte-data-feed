/*jslint node: true */
"use strict";

const price = require('../modules/price');
let p;

console.log(p = '333333333333333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33333333333333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3333333333333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '333333333333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33333333333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3333333333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '333333333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33333333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3333333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '333333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '333333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '333.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3.000000000000000000', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.333333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.033333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.003333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000333333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000033333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000003333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000333333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000033333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000003333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000333333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000033333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000003333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000000333333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000000033333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000000003333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000000000333', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000000000033', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000000000003', '=', price.formatPriceToPrecision(Number(p)));

console.log(p = '333333333333333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33333333333333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3333333333333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '333333333333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33333333333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3333333333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '333333333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33333333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3333333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '333333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '333333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '333.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '33.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '3.0', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.3', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.03', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.0003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.00003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.0000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.00000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.0000000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.00000000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.0000000000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.00000000000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.0000000000000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.00000000000000003', '=', price.formatPriceToPrecision(Number(p)));
console.log(p = '0.000000000000000003', '=', price.formatPriceToPrecision(Number(p)));