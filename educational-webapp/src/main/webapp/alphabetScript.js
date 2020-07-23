function renderCards() {

    //I have to make it so that it serves a randomly generated audio file.

    const letters =
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Pick a random letter
    const firstLetter = letters[Math.floor(Math.random() * letters.length)];
    // Add it to the page.
    const letterContainer = document.getElementById('first-letter-Container');
    //letterContainer.innerText = firstLetter;


    // Pick a random letter
    const secondLetter = letters[Math.floor(Math.random() * letters.length)];
    // Add it to the page.
    const secondletterContainer = document.getElementById('second-letter-Container');
    //secondletterContainer.innerText = secondLetter;

    const thirdLetter = letters[Math.floor(Math.random() * letters.length)];
    // Add it to the page.
    const thirdletterContainer = document.getElementById('third-letter-Container');
    //thirdletterContainer.innerText = thirdLetter;

    const fourthLetter = letters[Math.floor(Math.random() * letters.length)];
    // Add it to the page.
    const fourthletterContainer = document.getElementById('fourth-letter-Container');
    //fourthletterContainer.innerText = fourthLetter;

    var card = document.createElement("BUTTON");
    var t = document.createTextNode(firstLetter);
    card.appendChild(t);
    card.style.width = "200px";
    card.style.height = "200px";
    card.style.backgroundColor = "rgb(175, 240, 172)";
    card.style.fontSize = "50px";
    card.style.position = "relative";
    card.style.position = "relative";
    card.style.fontFamily = "Bungee Shade";
    card.addEventListener("click", evaluateResponse);
    document.body.appendChild(card);


    var card = document.createElement("BUTTON");
    var t = document.createTextNode(secondLetter);
    card.appendChild(t);
    card.style.width = "200px";
    card.style.height = "200px";
    card.style.backgroundColor = "rgb(235, 187, 224)";
    card.style.fontSize = "50px";
    card.style.fontFamily = "Bungee Shade";
    card.addEventListener("click", evaluateResponse);
    document.body.appendChild(card);

    var card = document.createElement("BUTTON");
    var t = document.createTextNode(thirdLetter);
    card.appendChild(t);
    card.style.width = "200px";
    card.style.height = "200px";
    card.style.backgroundColor = "rgb(196, 170, 232)";
    card.style.fontSize = "50px";
    card.style.fontFamily = "Bungee Shade";
    card.addEventListener("click", evaluateResponse);
    document.body.appendChild(card);

    var card = document.createElement("BUTTON");
    var t = document.createTextNode(fourthLetter);
    card.appendChild(t);
    card.style.width = "200px";
    card.style.height = "200px";
    card.style.backgroundColor = "rgb(151, 227, 224)";
    card.style.fontSize = "50px";
    card.style.fontFamily = "Bungee Shade";
    card.addEventListener("click", evaluateResponse);
    document.body.appendChild(card);
    //there need to be other checks in place to make sure these randomly selected
    //do not end up being the same
}

function evaluateResponse() {
    //I have to get the value that they have clicked on and then check that against
    //the audio content that was shown.
    al
    console.log("Gets here");
}