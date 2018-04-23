allTypes = document.getElementsByClassName('productType');

for (let i = 0; i < allTypes.length; i++) {
    allTypes[i].addEventListener('mousedown', (e) => {
        e.currentTarget.style.transform = "scale(1)";
    });
    allTypes[i].addEventListener('mouseup', (e) => {
        location.href = `${location.href}/${e.currentTarget.getAttribute('productid')}`;
    })
}