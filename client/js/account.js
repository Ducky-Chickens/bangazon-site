
document.getElementById("editAccount").addEventListener('click', () => {
  console.log('edit account');
  location.href = `${location.origin}/account/edit`;
});


document.getElementById("addPaymentType").addEventListener('click', () => {
  location.href = `${location.origin}/account/addPaymentType`;
});