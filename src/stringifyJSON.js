// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
console.log(obj);
  //STRING
  if (typeof obj === "string"){
  	var str = '"';
  	str += obj;
  	str += '"';
  	return str;
  }
  //NUMBER
  if (typeof obj === "number"){
  	return obj.toString();
  }
  //BOOLEAN
  if (typeof obj === "boolean"){
  	return obj.toString();
  }
  //NULL
  if (obj === null){
    return "null";
  }
  //NaN 
  if (obj === NaN){
  	return "NaN";
  }
  //UNDEFINED
  if (obj === undefined){
  	return "undefined";
  }

  //ARRAY
  if (Array.isArray(obj)){
    var str = '[';
    for (var i = 0; i < obj.length; i++){
      str += stringifyJSON(obj[i]);
      //add commas if not on the last index
      if (i !== obj.length - 1){
    		str += ',';
      }
    }
    str += ']';
    return str;
  }

  //OBJECT
  if (typeof obj === "object"){
  	var str = '{';
  	var count = 0;
  	var countWritten = 0;
  	//count the properties in obj
  	for (var key in obj){
  		count++;
  	}
  	//write the string from the keys, exclude the last property
  	for (var key in obj){
  	  if(typeof obj[key] === "undefined") continue; 
  	  if(typeof obj[key] === "function") continue;
  	  if(countWritten < count - 1){
  	  	str += stringifyJSON(key); 
  	  	str += ':';
  	  	str += stringifyJSON(obj[key]);
  	  	str += ",";
  	  	countWritten++;
  	  //write the last line without the comma at the end
  	  } else if (countWritten === count - 1){ 
  	    str += stringifyJSON(key); 
  	    str += ':';
  	    str += stringifyJSON(obj[key]); 
  	    countWritten++;
  	  }
  	}//end for
  	str += '}'
  	return str;
  }
};





