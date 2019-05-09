/* QUESTION

Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns 
an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the 
collection if it is to be included in the returned array.

 */ 
// this was hard - need to study more on keys and values 

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

/* WHAT I LEARNED





*/ 
