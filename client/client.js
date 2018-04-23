console.log('Is this thing on?');

document.getElementById("showLogin").addEventListener('click', () => {
  console.log('Wow, that worked!', location.origin);
  location.href = `${location.origin}/login`;
});

document.getElementById("showRegister").addEventListener('click', () => {
  location.href = `${location.origin}/register`;
});

let allTypes = document.getElementsByClassName('productType');

console.log('hello!');

// .forEach(prod=>{
//   console.log(prod);
//   // prod.addEventListener('mousedown', (e)=>{
//   //   console.log(e.target);
//   // })
//   // prod.addEventListener('mouseup')
// });