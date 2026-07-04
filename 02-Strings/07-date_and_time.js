const a=new Date()
console.log(a)
console.log(a.toString())
console.log(a.toLocaleString()) //used to display date and time in local format
console.log(a.toDateString()) //used to display date in local format
console.log(a.getMonth()) //used to display month in local format
console.log(a.getDay())
const b=new Date(2023,0,21)   // year, month (0-indexed     0=january), day
console.log(b.toString())
