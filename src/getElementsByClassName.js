// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//document.body - returns the <body> or <frameset> node of the current document, or null if no such element exists. 
//element.childNodes - returns a collection of a node's child nodes, as a NodeList object
//element.classList - returns the class name(s) of an element, as a DOMTokenList object
var getElementsByClassName = function(className) {
  // your code here
  var children = document.body.childNodes;
  var classArr = [];
 
  //console.log("children: " + children);
  //console.log("documentchild: " + document.body.childElementCount)

  //check body for className
  if(document.body.classList === className){
  	classArr.push(document.body);
  }
  //check children for className
  for (var i = 0; i < document.body.childElementCount; i++){
    //check if each node has the class
    for(var x = 0; x < children.classList.length; x++){
      if (children.classList[x] === className){
      	classArr.push(children[i]);
      }
    }  
  }
  
  function recursion(node, className){
    //base case 
    if(node.childNodes.length === 0){
      if(node.classList === className){
      	return [node];
      //if does not match
      } else {
      	return [];
      }
    }
    //if node has children 
    for (var i = 0; i < node.length; i++){
      var result = recursion(node.childNodes[i]);
    }
  }
};
