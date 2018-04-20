// Search bar listener
document.getElementById("searchBar").addEventListener('keypress', function(event) {
  if(event.key === 'Enter'){
   console.log(this.value); 
    // location.href = `${location.origin}/search`;
  }
})
