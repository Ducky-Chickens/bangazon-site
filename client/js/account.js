
document.getElementById("editAccount").addEventListener('click', () => {
  console.log('edit account');
  location.href = `${location.origin}/account/edit`;
});


document.getElementById("addPaymentType").addEventListener('click', () => {
  location.href = `${location.origin}/account/addPaymentType`;
});

document.querySelectorAll(".deletePaymentType").forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log('event.target.ids', event.target.id);
    deletePaymentType(event.target.id);
  });
});

const deletePaymentType = (id) => {
  fetch(`${location.origin}/account/deletePaymentType`, {
    method: 'POST',
    body: JSON.stringify({
      paymentTypeId: id,
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
};