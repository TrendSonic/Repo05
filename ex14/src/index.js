function main() {
    // Only change code below this line
    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";
    var wordBlanks;

    var concatenate = myAdjective + " " + myNoun + " " + "can " + myVerb + " " + myAdverb + ".";

    wordBlanks = concatenate;
    // Only change code above this line

    return wordBlanks;
}

console.log(main());
module.exports = main;