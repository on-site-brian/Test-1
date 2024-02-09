const buttonEl = document.getElementById("buttonEl")
const headerTitle = document.getElementById("header-title")
const headerImage = document.getElementById("header-image")

let courseTitle = "Forex Factory"

let newImage = `<img id="header-image" src="https://play-lh.googleusercontent.com/aw-F9mcy_TywRskVTahXgMr75mlj9sgiV5SnNuZgEy9Yc8LQ65AylNbM64BqQrnCxKnL=w240-h480-rw" width="100%">`


function changeHeroSection(){
    headerTitle.innerText =  courseTitle
     headerImage.innerHTML =newImage
    
}
