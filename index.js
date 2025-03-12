// navber
const category = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => {
      viewpoot(data.categories);
    });
};
category();

const viewpoot = (button) => {
  const categoryContainer = document.getElementById("category-container");

  for (let btn of button) {
    const div = document.createElement("div");
    div.innerHTML = `
        <button class="btn btn-sm hover:bg-red-500 hover:text-white text-lg">${btn.category}</button>
       
    `;
    categoryContainer.append(div);
  }
};
// video

const load = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((video) => {
      loadvideo(video.videos);
    });
};
load();
const loadvideo = (videos) => {
  console.log(videos);
  const videocontainer = document.getElementById("video-section");
  videos.forEach((element) => {
    console.log(element);
    const videocard = document.createElement("div");
    videocard.innerHTML = `
<div class="card bg-base-100  h-full">
            <figure class="relative">
              <img class="w-full h-36 object-cover"
                src="${element.thumbnail}" />
                <span class="absolute bottom-2 right-1 text-white bg-black text-xs font-normal rounded-md">3hrs 56 min ago</span>
            </figure>
            <div class="justify-start items-start py-5 flex px-0 gap-3 ">
              <div class="">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
                      <img src="${element.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>
              <div class="">
                <h2 class="text-xl font-bold">${element.title}</h2>
                <p class="text-base flex items-center gap-2 text-gray-600">${element.authors[0].profile_name}<img class="w-4 h-4" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                <p class="text-base text-gray-600">${element.others.views}</p>
              </div>
            </div>
          </div>
    
    
    `;
    videocontainer.append(videocard);
  });
};
