// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// incudes
console.log(url.includes("staging"));
console.log(url.includes("production"));

// startsWith / endsWith
console.log(url.startsWith("https")); // true
console.log(url.startsWith("http://"));  // false
console.log(url.endsWith("true"));  // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

//
console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 