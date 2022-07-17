var originalWords = process.argv.slice(2);
var pigLatinWords = [];
//console.log("originalWords is", originalWords); // diagnostic use
//console.log("pigLatinWords is", pigLatinWords); // diagnostic use

for (var i = 0; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
  //pigLatinWords.push(translateToPigLatin(originalWords[i])); // disgnostic use

}
console.log(pigLatinWords.join(''));

function translateToPigLatin(word) {
  //console.log("Word", word); // diagnostic use
  //console.log("First letter", word[0]); // diagnostic use
  //console.log("Rest of word", word.slice(2, word.length)); // diagnostic use
  return word.slice(2, word.length) + word[0] + "ay";
}

console.log(translateToPigLatin('pig latin is silly'));