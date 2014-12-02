var errmsg = "mstring: required format is function (){/*** ... ***/}, this is invalid: ";

module.exports = function(f){
  var fs = f.toString()
  var m  = fs.split(" ");
  var result = '';

  if( m ) {
    for (i = 0; i < m.length; i++) {
    	var firstLetter = m[i].split("")[0];
    	var restOfWord = m[i].substring(1); 
    	result += restOfWord + firstLetter + "ay";
	}
    return result;
  }
  else throw new Error(errmsg+f)
}

var _ = {};

_.isString = function(obj) {
  return !!(obj === '' || (obj && obj.charCodeAt && obj.substr))
}
