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
  
  return  recursion(document.body, className);

  function recursion(node, className){
    var matchingNodes = [];
    //base case 
    //if node has className add to matchingnodes[]
    if (node.classList){
    for(var i = 0; i < node.classList.length; i++){
        if(node.classList[i] === className){
          matchingNodes.push(node);
        }
      }
    }
    //Recursive
    //if node has children 
    for (var i = 0; i < node.childNodes.length; i++){
      matchingNodes = matchingNodes.concat(recursion(node.childNodes[i], className));
    }
    return matchingNodes;
  }
  return classArr;
};
