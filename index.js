const image = document.querySelector('img');
const button = document.querySelectorAll('button');
const div = document.querySelector('div');
const messiPic = [
    "messi1.jfif",
    "messi2.jfif",
    "messi3.jfif",
    "messi4.jpg"
    
]
const ronaldoPic =[
    "ro1.jfif",
    "ro2.jfif",
    "ro3.jfif",
    "ro3.jfif"
]

const neymarPic = [
    "ney1.jfif",
    "ney2.jpg",
    "ney3.jfif",
    "ney4.jfif",
    "ney5.jpg"
]
const othersPic = [
    "hal02.jfif",
    "kimich.jfif",
    "ozi1.jpg",
    "vini03.jfif",
    "rafinha.jfif"
]

function getMessi(){
    var a = Math.floor(Math.random() * messiPic.length);
     var img = messiPic[a];
    // // console.log(messiPic[a]);
    // image.src= messiPic[a];
    // div.append(image);
    
    image.src= img;
    console.log(img);
    


}

function getRonaldo(){
    var a = Math.floor(Math.random() * ronaldoPic.length);
     var img = ronaldoPic[a];
    // // console.log(messiPic[a]);
    // image.src= messiPic[a];
    // div.append(image);
    
    image.src= img;
    console.log(img);


}
function getNeymar(){
    var a = Math.floor(Math.random() * neymarPic.length);
    var img = neymarPic[a];
   // // console.log(messiPic[a]);
   // image.src= messiPic[a];
   // div.append(image);
   
   image.src= img;
   console.log(img);
     


}
function getOthers(){
    var a = Math.floor(Math.random() * othersPic.length);
    var img = othersPic[a];
   // // console.log(messiPic[a]);
   // image.src= messiPic[a];
   // div.append(image);
   
   image.src= img;
   console.log(img);
}



button[0].addEventListener('click', getMessi);
button[1].addEventListener('click', getRonaldo);
button[2].addEventListener('click', getNeymar);
button[3].addEventListener('click', getOthers);
