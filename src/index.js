setTimeout(() => {
    console.log("TimeOut de 7 segundos")
},7000);

const aPagos = [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
   ]

console.log("Recorro")
aPagos.forEach( pago => {
    console.log("Cliente: "+ pago.cliente + " Importe: " + pago.importe)
} )

console.log("Ordeno")
aPagos.sort((pago1, pago2) => {
    if (pago1.cliente > pago2.cliente) {
      return 1;
    } if (pago1.cliente < pago2.cliente) {
      return -1;
    }
    return 0;
  })
console.table(aPagos)

console.log("Filtro")
const filtro = aPagos.filter(pago => pago.cliente.substring(0,1) == 'R')
console.table(filtro)

console.log("Map")
const nuevoArray = aPagos.map(pago => ({id: pago.id, numero: pago.numero, importe: pago.importe*1.30, cliente: pago.cliente}))
//console.log(nuevoArray)
console.table(nuevoArray)

console.log("Leo Archivo")
import fs from 'fs'
const sPagos = fs.readFileSync( './datos.txt', 'utf-8' )
console.log(sPagos)

fs.appendFile( './datos.txt', 'nuevo texto', (err) => {
  if (err) throw err;
  console.log('Se agrego nuevo texto al archivo');
});

console.log(sPagos)
