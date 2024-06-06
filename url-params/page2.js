let param= window.location.search;
let  paramString = new URLSearchParams(params);
const fullName  = paramString.get('fullname ');
const age  = paramString.get('age');
console.log(fullName );
