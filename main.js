
const peoples = document.getElementById("characters");
const images = ['./img/Luke.jpg', './img/C-3PO.png', './img/r2d2.jpg', './img/Darth_Vader.png', './img/Leia_Organa.png', './img/Owen.jpg', './img/Beru.jpg', './img/R5-D4.jpg', './img/Biggs.png', './img/obi.jpg'];

async function fetchData() {

    const response = await fetch('https://swapi.co/api/people/')
                    .then(res => res.json())
                    .catch(err => console.log(err));

        let peopleList = document.querySelector('ul');

        response.results.forEach((e, i) => {

        let people = document.createElement('li');
        let image = document.createElement('img');
        let item = document.createElement('div');


        people.innerHTML = `<h3>${response.results[i].name}</h3>`;
        image.src = `${images[i]}`;
        image.alt = "";
        item.className = "items";


        item.appendChild(image);
        item.appendChild(people);
        peopleList.appendChild(item);
        return response;
    })
}
fetchData();
