
let errAst = Array.from(document.querySelectorAll('.errAsterisk'));

const formComplete = (cv) => cv.value;

const postForm = (allInputs) => {
    let newProduct = {};
    allInputs.forEach(line=> newProduct[line.getAttribute('prop')] = isNaN(+line.value) ? line.value : +line.value);
    console.log(newProduct);
    fetch(`${location.origin}/inventory/add`, {
        method: 'POST',
        body: JSON.stringify(newProduct),
        credentials: 'include', 
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res=>console.log('yep',res))
    .catch(err=>console.log('nope',err));
};

const throwErrs = (allInputs) => allInputs.forEach(line=>{
    if (!line.value) line.nextSibling.innerText = "*";
});

document.getElementById('addProductButton').addEventListener('mouseup', ()=>{
    let allInputs = Array.from(document.querySelectorAll('#productForm input, #productForm textarea, #typeSelect'));
    errAst.forEach(ast=>ast.innerText = '');
    allInputs.every(formComplete) ? postForm(allInputs) : throwErrs(allInputs); 
});