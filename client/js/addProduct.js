
let errAst = Array.from(document.querySelectorAll('.errAstrik'));

const formComplete = (cv) => cv.value;

const postForm = () => console.log('hell yea!');

const throwErrs = (allInputs) => allInputs.forEach(line=>{
    if (!line.value) line.nextSibling.innerText = "*";
});

document.getElementById('addProductButton').addEventListener('mouseup', ()=>{
    let allInputs = Array.from(document.querySelectorAll('#productForm input, #typeSelect'));
    errAst.forEach(ast=>ast.innerText = '');
    allInputs.every(formComplete) ? postForm() : throwErrs(allInputs); 
});