
document.getElementById('addProductButton').addEventListener('mouseup', ()=>{
    let allInputs = document.querySelectorAll('#productForm input');
    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value){
            console.log(allInputs[i].prop, allInputs[i].value);
        }
    }
});