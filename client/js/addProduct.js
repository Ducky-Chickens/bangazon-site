
let errAst = Array.from(document.querySelectorAll('.errAsterisk'));

const formComplete = (cv) => cv.value;

const postForm = (allInputs) => {
    let newProduct = {};
    allInputs.forEach(line=> newProduct[line.getAttribute('prop')] = line.value);
    fetch(`${location.href}`, {
        method: 'POST',
        body: JSON.stringify(newProduct)
    })
};

const throwErrs = (allInputs) => allInputs.forEach(line=>{
    if (!line.value) line.nextSibling.innerText = "*";
});

document.getElementById('addProductButton').addEventListener('mouseup', ()=>{
    let allInputs = Array.from(document.querySelectorAll('#productForm input, #typeSelect'));
    errAst.forEach(ast=>ast.innerText = '');
    allInputs.every(formComplete) ? postForm(allInputs) : throwErrs(allInputs); 
});