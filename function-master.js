//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let output = []; //empty array to store values 

    for(let key in object){ //for loop that iterates over every object in key 
        output.push(object[key]) // pushing the output of each key in the objects to the output array

    }

    return output; //return the array of outputs


} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let output = ''; //empty string to store values 

    for(let key in object){ //for loop that iterates over each key in the object
        output += key + " " //concatenating the keys with an empty space 
    }

    return output.trim(); //returns the object with the keys and .trim() takes away the trailing space 

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: The input is an object 
//O: The string values of the object all with a space between them 
//C
//E
function valuesToString(object) {
    let output = '';

    for (let key in object){ //for loop that iterates over each key in the object 
    if (typeof object[key] === "string"){ //if the value in the object is a string add it to the output string 
        output += object[key] + ' ';  // and concatenate the string with a space 
       }

    

}
 return output.trim(); //return the output string with a spce 
    
}
    


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    if(Array.isArray(collection)){
        return "array";
    } else if( typeof collection === "object" && collection !== null){
        return "object";

    }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

    return string.charAt(0).toUpperCase() + string.slice(1)

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {

    var strOfWords = string.split(" "); //a variable that takes the string of words and splits them based on the spaces
    var capWords = []; //empty array to hold the new capitalized words 

    for(var i = 0; i < strOfWords.length; i++){ //for loop that iterates over the string of words  
        var word = strOfWords[i]; //variable that grabs each word at index i and 
        var capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        //takes each word at the first character, capitalizes it then concatenates the rest of the word to lower case 

        capWords.push(capWord); //push the capitalized word to the empty array 


    }
        return capWords.join(" "); //join the words together in the array to a single string with spaces in between
    
    

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: The input is an object 
//O: the output should be the name property of the object with welcome infront of it
//C
//E
function welcomeMessage(object) {

    var capName = object.name.charAt(0).toUpperCase() + object.name.slice(1)
    //declare a variable named cap name and access the object name using dot notation
    //and grab the first charachter and upper case it and concatenated the object name
    //using dot name and slice method to lower case the rest after the first character. 
    return `Welcome ${capName}!`;



}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: object 
//O: The output should be the name and species keys and return "name" is a "species"
//C:
//E:

function profileInfo(object) {

    var name  =  object.name.charAt(0).toUpperCase() + object.name.slice(1);
    var species  =  object.species.charAt(0).toUpperCase() + object.species.slice(1);
    
    return `${name} is a ${species}`

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Object
//O: the output should be 
//C:
//E:

function maybeNoises(object) {
    if(key in object.noises){

    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}