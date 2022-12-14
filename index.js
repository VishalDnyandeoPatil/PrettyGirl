let previous= document.querySelector("#previous");
let next = document.querySelector("#next");

let arr=["https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527_1.png",
         "https://files.myglamm.com/site-images/original/Carousel-Desktop---1920-527.jpg",
         "https://files.myglamm.com/site-images/original/Manish-Malhotra-1920.gif",
         "https://files.myglamm.com/site-images/original/Pose-HD-1920.jpeg"];

let i=0;

next.addEventListener("click", function(){
    i++;
    if (i>arr.length-1){
        i=0
    }
    document.querySelector("#slideimg").src=arr[i];
})

previous.addEventListener("click", function(){
    i--;
    if (i<0){
        i=arr.length-1
    }
    document.querySelector("#slideimg").src=arr[i];
})

function autoslide(){
    document.querySelector("#slideimg").src= arr[i];
    if (i<arr.length-1){
        i++;
    }
    else{
        i=0;
    }
}
setInterval(autoslide, 4000);