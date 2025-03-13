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

    // category: "Music"
    // category_id: "1001"
   
    //1. Get the container
    const categoryContainer = document.getElementById("category-container");

    // 2. Loop operation
    // Create and append buttons for each category
    categories.forEach(cat => {

        //(More Optimized):
        const button = document.createElement('button');
        button.classList.add("btn","btn-sm","hover:bg-[#FF1F3D]","hover:text-white");
        button.innerText=cat.category;
        
        //function : loadCategoryVideos()
        button.addEventListener("click",() => loadCategoryVideos(cat.category_id));

        categoryContainer.appendChild(button);


        
        // const div = document.createElement('div');
        // div.innerHTML=`
        // <button onclick=categoricalVideos() class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        // `;
        // categoryContainer.appendChild(div);
        

    });
}

loadCategories();