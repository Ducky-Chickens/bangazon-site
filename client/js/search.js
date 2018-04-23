// 'use strict'; 

// Search bar listener
document.getElementById("searchBar").addEventListener('keypress', function(event) {
  if(event.key === 'Enter'){
    // set search input as query parameter
    location.href = `${location.origin}/search?keywords=${this.value}`;
  }
})
