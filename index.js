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

