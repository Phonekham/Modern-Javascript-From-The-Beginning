let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = / world$/i; // Must ends with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character 


// Brackets [] - Chartector Sets
re =  /gr[ae]y/i; //Must be an a or e
re = /[GF]ray/i; //Must be g or f
re = /[^GF]ray/i; //Must match anything except g or f
re = /[A-Z]ray/; //Match any uppercase letter
re = /[a-z]ray/; //Match any lowercase letter
re = /[A-Za-z]ray/; //Match any letter
re = /[0-9][0-9]ray/; //Match any degit

// Brackets [] - Quantifier
re = /Hel{2}o/i;  //Must occur exactly {m} amount of times
re = /Hel{2,5}o/i; //Must occur exactly {m} amount of times
re = /Hel{2,}o/i; //Must occur at leaset {m} times

// Parentheses() - Grouping
re = /^([0-9]x){3}$/;

// Shorthand charector classes
re = /\w/ //Word charector  - alphanumeric or _
re = /\w+/ // + = one or more
re = /\W/ //None Word charector  
re = /\d/ // Match any degit
re = /\d+/ // Match any degit 0 or more times
re = /\D/ //Match any none degit
re = /\s/ //Match white space char
re = /\S/ //Match none white space char
re = /\Hell\b/i //Word boundary

// Assertions
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if not followed by y

// String to match
// const str = 'Gray?';
// const str = 'Hellllllllo'
const str = 'xry';



// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);