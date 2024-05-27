let pageHeader = document.getElementById("pageHeader");
console.log(pageHeader);
pageHeader.innerHTML = "Fetch ARTIC API";

fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=50', {
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

        const galerySection = document.getElementById("galery");
        const displayGalery = document.createElement("ul");
        galerySection.appendChild(displayGalery);

        for(let i = 0; i < articAPI.length; i++) {
            const artID = articAPI[i][id];
        }



    })





    // .catch(error => {
    //     console.error('An error occurred:', error);
    // });
