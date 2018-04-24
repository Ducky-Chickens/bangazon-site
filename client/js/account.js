
document.getElementById("editAccount").addEventListener('click', () => {
  location.href = `${location.origin}/account/edit`;
});


document.getElementById("addPaymentType").addEventListener('click', () => {
  location.href = `${location.origin}/account/addPaymentType`;
});

document.querySelectorAll(".deletePaymentType").forEach((button) => {
  button.addEventListener('click', (event) => {
    deletePaymentType(event.target.id);
  });
});

const deletePaymentType = (id) => {
  fetch(`${location.origin}/account/deletePaymentType`, {
    method: 'DELETE',
    body: JSON.stringify({
      paymentTypeId: id,
    }),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
  })
    .then(() => {
      console.log('redirect');
    window.location.href = `${location.origin}/account`;
  })
    .catch((error) => {
      console.log(error);
    });
};