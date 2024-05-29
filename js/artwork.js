async function displayArtworkInfo() {

    // get artwork ID from url
    const artworkId = new URLSearchParams(window.location.search).get("id");
    // console.log("artwork ID: " + artworkId);

    // pass artwork ID to fetch request
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artworkId}`);
    const artwork = await response.json();
    // console.log(artwork, artworkId);

    // get necessary data
    const artworkData = artwork.data;
    console.log(artworkData);

    // page header
    const pageHeader = document.createElement("h1");
    pageHeader.innerHTML = `${artworkData.title} by ${artworkData.artist_title}`;

    const headerElement = document.querySelector("header");
    headerElement.appendChild(pageHeader);

    // image
    const artImage = document.createElement("img");
    artImage.id = "artImage";
    artImage.alt = `${artworkData.title} by ${artworkData.artist_title}`;
    artImage.src = `https://www.artic.edu/iiif/2/${artworkData.image_id}/full/1686,/0/default.jpg`;

    const imgContainer = document.createElement("div");
    imgContainer.id = "imgContainer";

    const mainElement = document.querySelector("main");
    mainElement.appendChild(imgContainer);
    imgContainer.appendChild(artImage);

    // artwork text info
    const textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    mainElement.appendChild(textContainer);

    const description = document.createElement("p");
    description.id = "desscription";
    description.innerHTML = `Description: <br>${artworkData.description}`;

    const artworkType = document.createElement("p");
    artworkType.id = "artworkType";
    artworkType.innerHTML = `Artwork Type: ${artworkData.artwork_type_title}`;

    const dateCreated = document.createElement("p");
    dateCreated.id = "dateCreated";
    dateCreated.innerHTML = `Date Created: ${artworkData.date_end}`;

    textContainer.appendChild(description);
    textContainer.appendChild(artworkType);
    textContainer.appendChild(dateCreated);

    // buttons
    const source = document.createElement("button");
    source.innerHTML = "Source";
    source.addEventListener("click", () => {
        window.open("https://www.artic.edu/", "_blank");
    })

    const backToGallery = document.createElement("button");
    backToGallery.innerHTML = "Back to Gallery";
    backToGallery.addEventListener("click", () => {
        window.location.replace("index.html");
    })

    textContainer.appendChild(source);
    textContainer.appendChild(backToGallery);
    

}




displayArtworkInfo();



            
