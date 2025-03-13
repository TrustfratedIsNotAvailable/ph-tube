function loadCategories(){
    //1. fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
       //2. convert promise to json
    .then((res)=>res.json())
    //3.send data to display
        .then((data)=>display(data.categories));   
}

function display(categories){
//console.log(categories);

//1. Get the container
const categoryContainer = document.getElementById("category-container");

// 2. Loop operation
// Create and append buttons for each category
categories.forEach(element => {
    const button = document.createElement('button');
    button.classList.add("btn" ,"btn-sm");
    button.innerText=element.category;
    categoryContainer.appendChild(button);
});

}
loadCategories();