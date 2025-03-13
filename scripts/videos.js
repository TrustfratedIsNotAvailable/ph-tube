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

const displayVideos = (videos) =>{
     console.log(videos);

    const videosContainer = document.getElementById("videos-container");
    videos.forEach(element => {
        const div = document.createElement('div');
        //template card from daisyUI 
        div.innerHTML=`
        <div class="card bg-base-100 shadow-sm">
        <figure>
          <img class="w-[250px] h-[180px]"
            src=${element.thumbnail}
            alt=${element.video_id} />
        </figure>
        <div class="flex gap-3 items-center p-1">
            <img class="h-10 w-10 rounded-full" src=${element.authors[0].profile_picture}  alt="" />
            <div>
                <h2 class="font-bold text-sm">${element.title}</h2>
                <p class="text-[14px] text-[#17171770]">${element.authors[0].profile_name}</p>
                <!-- <p>${element.authors[0].verified}</p> -->
                <p class="text-[14px] text-[#17171770]">${element.others.views} views</p>
            </div>
        </div>
      
      </div>
        `;
        //append child
        videosContainer.appendChild(div);
    });
}
loadVideos();
//<p>${element.authors[0].verified}</p>