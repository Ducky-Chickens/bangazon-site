
// let typeSelect = document.getElementById('typeSelect');
let errAst = document.querySelectorAll('.errAstrik');

document.getElementById('addProductButton').addEventListener('mouseup', ()=>{
    for (let i = 0; i < errAst.length; i++) {
        errAst[i].innerText = '';
    }
    let allInputs = document.querySelectorAll('#productForm input, #typeSelect');
    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value){
            console.log('yep', allInputs[i].getAttribute('prop'), allInputs[i].value);
        } else {
            allInputs[i].nextSibling.innerText = "*";
        }
    }
});