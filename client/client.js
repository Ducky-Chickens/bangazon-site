// document.getElementById("showLogin").addEventListener('click', () => {
//   console.log('Wow, that worked!', location.origin);
//   location.href = `${location.origin}/login`;
// });

// document.getElementById("showRegister").addEventListener('click', () => {
//   location.href = `${location.origin}/register`;
// });

let allTypes = document.getElementsByClassName('productType');

for (let i = 0; i < allTypes.length; i++) {
  allTypes[i].addEventListener('mousedown', (e)=>{
    console.log(e.currentTarget);
  });
  // prod.addEventListener('mouseup')
}