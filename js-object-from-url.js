const urlDecode = function(text) {
  let temp = text.split('&');
  let output = {};

  for (let curr of temp) {
    output[curr.split('=')[0]] = curr.split('=')[1].split('%20').join(' ');
  }
  
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
