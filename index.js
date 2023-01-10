const image = document.querySelector('img');
const button = document.querySelectorAll('button');
const div = document.querySelector('div');
const messiPic = [
    "m1.jpg",
    "m2.jpg",
    "m3.jpg",
    "m4.jpg",
    "m5.jpg",
    "m6.jpg",
    "m7.jpg",
    "m8.jpg"
]
const ronaldoPic =[
    "r1.jfif",
    "r2.jpg",
    "r3.jpg",
    "r4.jpg",
    "r5.jpg"
    
]

const neymarPic = [
    "n1.jpg",
    "n2.jpg",
    "n3.jpg",
    "n4.jpg",
    "n5.jpg",
    "n6.jpg",
    "n7.jpg",
    "n8.jpg",
]
const othersPic = [
    "hal02.jfif",
    "kimich.jfif",
    "ozi1.jpg",
    "vini03.jfif",
    "rafinha.jfif",
    "anto.jfif",
    "felix.jfif"
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
