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

        // get data about artworks
        const artData = articAPI.data;
        console.log(artData); 

        const artDataFiltered = artData.filter(artData => artData.image_id != null);
        console.log(artDataFiltered);

        const galerySection = document.getElementById("galery");
        const displayGalery = document.createElement("ul");
        galerySection.appendChild(displayGalery);

        for(let i = 0; i < artDataFiltered.length; i++) {
            
            // get necessary data
            const artID = artDataFiltered[i]["id"];
            // console.log("art ID: " + artID);

            const artImgID = artDataFiltered[i]["image_id"];
            // console.log("image ID: " + artImgID);

            const artTitle = artDataFiltered[i]["title"];
            // console.log("art title: " + artTitle);

            const artistName = artDataFiltered[i]["artist_title"];
            // console.log("artist name: " + artistName);

            const link = document.createElement('a');
            link.textContent = artTitle; 
            link.href = `artwork.html?id=${artID}`; // Passing the ID as a URL parameter
           


            // create artwork card

            // show artwork title
            const showArtTitle = document.createElement("p");
            showArtTitle.id = "artTitle";
            showArtTitle.innerHTML = `Artwork Title: <br>${artTitle}`;

            // show artist name
            const showArtistName = document.createElement("p");
            showArtistName.id = "artistName";
            showArtistName.innerHTML = `Artist Name: <br>${artistName}`;

            // show artwork image
            const showArtImage = document.createElement("img");
            showArtImage.id = "artImage";
            showArtImage.alt = `${artTitle} by ${artistName}`;
            showArtImage.src = `https://www.artic.edu/iiif/2/${artImgID}/full/1686,/0/default.jpg`;
            showArtImage.style.maxWidth = "250px";

            // add artwork card to the gallery
            const artworkCard = document.createElement("li");

            // show artwork page button
            const showArtworkPage = document.createElement("button");
            showArtworkPage.innerHTML = "Artwork Page";

            // add all the elemennts to a webpage
            artworkCard.appendChild(showArtTitle);
            artworkCard.appendChild(showArtistName);
            artworkCard.appendChild(showArtImage);
            artworkCard.appendChild(showArtworkPage);
            // artworkCard.appendChild(link);

            displayGalery.appendChild(artworkCard);

            showArtworkPage.addEventListener("click", () => {
                window.location.replace(`${link.href}`);
            })
        }        
    })

    .catch(error => {
        console.error('An error occurred:', error);
    });
