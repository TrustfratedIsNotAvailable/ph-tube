// authors: 
// {
//     profile_picture: 'https://i.ibb.co/D9wWRM6/olivia.jpg',
//     profile_name: 'Olivia Mitchell', 
//     verified: ''
// }
//length: 1

// category_id: "1001"
// description: "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// others: 
//     posted_date: "16278"
//     views: "100K"

// thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg"
// title: "Shape of You"
// video_id: "aaaa"
 
const loadVideos = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res)=>res.json())
        .then((data)=>displayVideos(data.videos));
}

// Fetch and load videos based on category_id
const loadCategoryVideos = (categoryId) =>{
    // console.log(categoryId);
    //use backtick (``)
    const url =`https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`;
    fetch(url).then((res)=>res.json())
             .then((data)=>displayVideos(data.category));
}

const displayVideos = (videos) =>{
    //console.log(videos);

    const videosContainer = document.getElementById("videos-container");
    videosContainer.innerHTML = ''; // Clear previous videos
    
    const nullVideoContainer =document.getElementById("null-video-container");
    nullVideoContainer.innerHTML=``;//clear null-container

    // If videos is null or empty, display a message
    if (!videos || videos.length === 0) {

        videosContainer.innerHTML = ``; //empty video-container

        nullVideoContainer.innerHTML=`
        <div class="mx-auto p-10">
            <div class="flex justify-center"><img class="w-[120px] h-[120px]" src="./images/Icon.png" alt=""></div>
            <p class="text-[30px] font-bold text-center">Oops!!Sorry,There is no content here</p>
        </div>
        `;
        return;
    }

    videos.forEach(video => {

        const div = document.createElement('div');
        //template card from daisyUI 
        div.innerHTML=`
        <div class="card bg-base-100 shadow-sm">
        <figure>
<!-- object-cover:image stretch stop -->
          <img class="w-[250px] h-[180px] object-cover"
            src=${video.thumbnail}
            alt=${video.video_id} />
        </figure>
        <div class="flex gap-3 items-center p-1">
            <img class="h-10 w-10 rounded-full" src=${video.authors[0].profile_picture}  alt="" />
            <div>
                <h2 class="font-bold text-sm">${video.title}</h2>
                <div class="flex gap-1 items-center">
                    <p class="text-[14px] text-[#17171770]">${video.authors[0].profile_name}</p>
<!-- if(verified) : verified.png -->
                    <p>${video.authors[0].verified ? '<img src="./images/verified.png" alt=""></img>' : "" }</p>
                </div>
                <p class="text-[14px] text-[#17171770]">${video.others.views} views</p>
            </div>
        </div>
      
      </div>
        `;
        //append child
        videosContainer.appendChild(div);
    });
} 

//loadVideos();