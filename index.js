// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"

function truncate(str, maxlength){
  if (strLength > maxlength){
    return str.length > maxLength ? str.slice(0, maxLength -1)  + '...' : str
  }
}


// Write a function checkImposterSyndrome(str) that returns true if str contains 'not ready' or "can't interview yet", otherwise false

function checkImposterSyndrome(str){
  return str.includes("not ready"|| "can't interview yet") ? true : false
}

checkImposterSyndrome("I am not ready to go")

// Create a CamelCase Method where all words must have their first letter capitalized without spaces.

// For instance:

// "hello case" => "HelloCase"
// "camel case word" => "CamelCaseWord"

function camelCase(str){
  let newStr = str.toLowerCase()
  return newStr.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join("")  
}


console.log(camelCase("hello world"))
console.log(camelCase("camel case word"))
console.log(camelCase("caMel casE wOrd"))