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
//O: the output should be a value based off if the object has a noises array. 
//If it does return the noises array as a string seperated with a space and if not it should return
//there are no noises
//C:
//E:

function maybeNoises(object) {
    if(Array.isArray(object.noises) && object.noises.length > 0){
        return object.noises.join(' ');
    } else {
        return 'there are no noises'
    }

};

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: a string of words and a word
//O: the output should return the boolean value true if the word is in the string of words
// and false other wise. 
//C:
//E:

function hasWord(string, word) {
    return string.split(" ").includes(word) 
    //split the string into an array of words using the method .split and 
    //search for the word in the now array of words using method .includes 

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: the inputs are a name and an object
//O: the output should be the object with the name added to it. 
//C:
//E:

function addFriend (name, object) {
    objName = []; //empty array to push values to 
    object.friends.push(name); //push the name parameter to the objects friends array 

    return object; //return the object 

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: a name and a object 
//O: return true if the name is a friend of the object and false otherwise
//C:
//E:
//we need to check if the friends array is in the object then if it includes the name 
function isFriend(name, object) {
    
    if(object.friends && object.friends.includes(name)){
        return true;

    } else{

        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//should return an array so we need a container
//should push all non friends names to the array 
function nonFriends(name, array) {
    const nonFriend = [];

    for(var i = 0; i < array.length; i++){
        let people = array[i]
    
    if(people.name !== name && !people.friends.includes(name)){
        nonFriend.push(people.name)

    }

} 
return nonFriend; 

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: and object a key and a value
//O: should be a string value that represents an updated property of the key with a new value 
//C: 
//E:
function updateObject(object, key, value) {
    object[key] = value; //updated the key value pair with bracket notation and made it equal to our new value
    return object; //return the new object 



}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an array and object 
//O: should be an updated object with any properties that were already listed in the array removed from the object 
//C:
//E:
//: Im needing to access the object, delete properties
function removeProperties(object, array) {

    for(var key in object){ //for in loop iterates over the objects 

        if(array.includes(key)){//conditinal statement says if the array includes the keys from the object 
            delete object[key]; //delets the key from object

        }
    }

    return object; //returns modified object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an array
//O: the output should be a new array with all duplicates removed
//so we need to access the values in the array and 

function dedup(array) {
    
    let s = new Set(array); //set the variable s and mut it equal to the Set() method which 
    //is a collection of values in the object where the value in the set may only occur once.
    //So this creates a set from the array and automatically removes duplicates.
    let a1 = [...s] //declaring the variable a1 and letting it be equal to an array 
    //[...s] means copy to an array 

    return a1;//returning the new array 
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