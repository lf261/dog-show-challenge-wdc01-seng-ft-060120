//creating base urls below to refer to later

const BASE_URL = "http://localhost:3000/"
const DOG_URL = `${BASE_URL}/dogs`


document.addEventListener('DOMContentLoaded', () => {
 
 //FOLLOW READ ME!!

//first fetch 
 
function getDogs() {
 fetch("http://localhost:3000/dogs")
    .then(res => res.json())
    .then(dogs => {
        console.log(dogs) //20 dogs populated in console
    })
}

//document.addEventListener('click', submitButtonClicked)

getDogs()

});

const renderDogs = (dog) =>
{
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    td1.textContent = `${dog.name}`
    td2.textContent = `${dog.breed}`
    td2.textContent = `${dog.sex}`

}

const submitButtonClicked = (e) => { 
    const target = e.target

}
