function showFaberInfo() {
    let soloInfo = document.querySelector("#solo-text");
    document.getElementById("solo-portret").src="media/faberyayo.png";
    soloInfo.innerHTML = ` <p>Pepijn Adriaan Lanen (Utrecht, August 4, 1982), stage name Faberyayo, is a Dutch rapper who is part of rap group De Jeugd van Tegenwoordig and pop group Le Le.</p>       
    He writes stories and columns for various magazines and made his debut as an author in 2013 with the short story collection “Sjeumig”. His debut novel, Naamloos (Unnamed), was published in January 2016. He is also the host of several different podcasts such as "Yous & Yay: New Emotions" and "Vad3r".</p>
    `
}

function showWillieInfo() {
    let soloInfo = document.querySelector("#solo-text");
    document.getElementById("solo-portret").src="media/willie.png";
    soloInfo.innerHTML = ` <p>Olivier Mitshell Locadia (Amsterdam, May 30, 1982), known as Willie Wartaal, is a Dutch rapper, actor and television presenter. Locadia became known as a member of the rap formation De Jeugd van Tegenwoordig.</p>
    <p>Locadia also presented programs for the music channel The Box. At the end of 2006 he presented a series of talk shows for BNN under the name Wartaal. Locadia can also be seen as a guest on various television programs, such as in 2007 as a participant in the BNN program "Get Smarter in a Week".</p>
    `
}

function showViezeInfo() {
    let soloInfo = document.querySelector("#solo-text");
    document.getElementById("solo-portret").src="media/vieze.png";
    soloInfo.innerHTML = ` <p>Alfred (Freddy) Tratlehner (Amsterdam, April 18, 1983), better known as Vieze Fur or Vjèze Fur, is a Dutch rapper and singer. He is known as a member of the Amsterdam rap formation De Jeugd van Tegenwoordig.</p>
    <p>He has posted countless videos on social media in which he cooks with another famous Dutch people. As a result, he published a cookbook: "Lekker Fred". That became a success and was followed a year later by "Lekker Fred in het land". He focuses on the culinary traditions and ingredients from the Netherlands.</p>
    `
}

function showBasInfo() {
    let soloInfo = document.querySelector("#solo-text");
    document.getElementById("solo-portret").src="media/bas.png";
    soloInfo.innerHTML = ` <p>Bastiaan (Bas) Bron (Amsterdam, July 17, 1974) is a Dutch producer and performer (of both music and vocals) of mainly electronic music. He is mostly known for being a member of the rap formation De Jeugd van Tegenwoordig.</p>
    <p>Bron is better known by his pseudonym Bastian. Under this name he scored a hit in 2001 with You've got my love. Bastian is also the name of the band with which Bas Bron performs live. Other pseudonyms used by Bas Bron are Seymour Bits, Gifted, Comtron and Fatima Yamaha.</p>
    `
}

let faberButton = document.querySelector("#faber");
faberButton.addEventListener("click", showFaberInfo);


let willieButton = document.querySelector("#willie");
willieButton.addEventListener("click", showWillieInfo);

let viezeButton = document.querySelector("#vieze");
viezeButton.addEventListener("click", showViezeInfo);

let basButton = document.querySelector("#bas");
basButton.addEventListener("click", showBasInfo);

