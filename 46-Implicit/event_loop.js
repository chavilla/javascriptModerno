console.log("Primero");

setTimeout(() => {
  console.log("Desde el setTimeOut");
}, 0);

new Promise((resolve, reject) => {
  resolve("Desde el promise...");
}).then((res) => console.log(res));

console.log("Ultimo");

/* Se ejecutan */

/* 

1) los console.log
2) El promise
3) el setTimeOut

*/
