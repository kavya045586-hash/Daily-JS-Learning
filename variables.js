let a="10"
console.table([a,a])
console.log(typeof(a))

const b=10;
console.log(typeof(b));

const c=Number(a)
console.log(typeof(c));  
console.log(c);

var d=Boolean(a)
console.log(typeof(d));  
console.log(d);

var d=String(a)
console.log(typeof(d));  
console.log(d);


if (false) {
  var e = 10;
  let f= 20;
}
console.log(e); // ✅ Works → undefined means variable is there but no value
console.log(f); // ❌ Error → b is not defined
