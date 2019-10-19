// Given a string and I need to find the index of "Waldo" - long string of 

// l;kasdjf;lakjsdf;laskdjfaw;lfdkjwaldoas;dlkfjasdfl;kjasdf;alkjsjfkdjfkdjfdkfjdkjfdf

// either a string OR an array, but if an array, also get index at which Waldo appears. 



// Define function here
function findWaldo(input) { }


// TESTS
console.log("Strings")
var str = "asl;dkfjasl;kdfjas;dlfjkasdf;ljkwaldoasdfkljasd;klasdfj";
console.log(findWaldo(str))

var str2 = "waldostufrandomstufffff";
console.log(findWaldo(str2))

var str3 = "waldo";
console.log(findWaldo(str3))

var str4 = "randomstuffwithouthim";
console.log(findWaldo(str4))

console.log('\n------------\n');
console.log("Arrays")
var arr = ["waldo","gibberish"];
console.log(findWaldo(arr))

var arr2 = ["gibberish","waldo2"];
console.log(findWaldo(arr2))

var arr3 = ["waldo1","waldo","gibberish","hellowaldohowareyou"];
console.log(findWaldo(arr3))

var arr4 = [];
console.log(findWaldo(arr4))
