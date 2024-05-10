let pageHeader = document.getElementById("pageHeader");
console.log(pageHeader);
pageHeader.innerHTML = "Fetch ARTIC API";

fetch('https://api.artic.edu/api/v1/artworks/search?q=cats', {
    method: 'GET'
})

    .then(response => {
    if (!response.ok) {
        throw new Error('Request failed');
    }
    return response.text(); 
    })

    .then(data => {
        const articAPI = JSON.parse(data);
        console.log(articAPI); 
    })

  .catch(error => {
    console.error('An error occurred:', error);
  });
