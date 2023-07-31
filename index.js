
// fs work
 const fs = require('fs');

// blocking way, synchronist 
const textin = fs.readFileSync('./fs/inner.txt', 'utf-8');
console.log(textin)
