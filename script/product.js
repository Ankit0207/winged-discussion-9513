const url = 'https://639ed6dc5eb8889197ee01c6.mockapi.io/product';

let container = document.getElementById("container");
let dofilter = document.getElementById("filter");
let fetchedData = [];

dofilter.addEventListener("change", () => {
    let filteredData = fetchedData.filter((element) => {
        if (element.category == dofilter.value) {
            return true;
        } else {
            return false;
        }
    })
    displayProducts(filteredData);
})

fetch(url)
    .then((responseObject) => {
        return responseObject.json();
    })
    .then((actualData) => {
        fetchedData = actualData;
        displayProducts(actualData)
    })
    .catch((error) => {

    })

function displayProducts(data) {

    container.innerHTML = null;

    data.forEach((element) => {

        let card = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", element.avatar);

        let name = document.createElement("h3");
        name.innerText = element.name;

        let price = document.createElement("h3");
        price.innerText = element.price;

        let category = document.createElement("p");
        category.innerText = element.category;

        let bag = document.createElement("button");
        bag.innerText = "ADD TO BAG";
        bag.addEventListener("click", () => {
            let favData = JSON.parse(localStorage.getItem("favourites")) || [];

            let alreadyadded = false;
            for (let i = 0; i < favData.length; i++) {
                if (favData[i].id == element.id) {
                    alreadyadded = true;
                    break;
                }
            }
            if (alreadyadded == true) {
                alert("Already in Cart");
            } else {
                favData.push(element);
                localStorage.setItem("favourites", JSON.stringify(favData));
                alert("Added to Cart");
            }
        })

        card.append(image, name, price, category, bag);
        container.append(card);
    })
}