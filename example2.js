const str = 'hola lola';
// use this in all str const cleanStr = str.replace(/\s/g,'');
const letters = {};

for(let i = 0; i <= str.length - 1; i++) {
  letters[str[i]] = str.split(str[i]).length - 1;
}

console.log(letters);
