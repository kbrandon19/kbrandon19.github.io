//photography genre type display when hover

// various background colors
let defaultColor = document.querySelector(body.backgroundColor);
let portraitColor = "rgb(166,203,226)";
let autoColor = "rgb(76,0,13)";
let productColor = "rgb(119,56,24)";
let fashionColor = "rgb(69,64,67)";
let interiorColor = "rgb(88,94,61)";

//grid items
const portraitGrid = document.getElementsByClassName("portrait");
const automotiveGrid = document.getElementsByClassName("automotive");
const productGrid = document.getElementsByClassName("product");
const fashionGrid = document.getElementsByClassName("fashion");
const interiorGrid = document.getElementsByClassName("interior");

//genre text
const portraitText = document.getElementById("portrait-text");
const autoText = document.getElementById("auto-text");
const productText = document.getElementById("product-text");
const fashionText = document.getElementById("fashion-text");
const interiorText = document.getElementById("interior-text");


//grid wrapper
const portfolioWrapper = document.getElementById("portfolio");


        // color change for Portait
        portraitGrid[0].addEventListener("mouseenter", () => {

          if(window.innerWidth > 1024){
            portfolioWrapper.style.backgroundColor = portraitColor;
            portraitText.classList.remove("hide");
            portraitText.classList.add("show");
          }else{
            portfolioWrapper.style.backgroundColor = defaultColor;
          }
            
          });
          portraitGrid[0].addEventListener("mouseleave", () => {
            portfolioWrapper.style.backgroundColor = defaultColor;
            portraitText.classList.remove("show");
            portraitText.classList.add("hide");
          });
          
          // color change for Auto
          automotiveGrid[0].addEventListener("mouseenter", () => {
            if(window.innerWidth > 1024){
            portfolioWrapper.style.backgroundColor = autoColor;
            autoText.classList.remove("hide");
            autoText.classList.add("show");
            }else{
            portfolioWrapper.style.backgroundColor = defaultColor;
          }
          });
          
          automotiveGrid[0].addEventListener("mouseleave", () => {
            portfolioWrapper.style.backgroundColor = defaultColor;
            autoText.classList.remove("show");
            autoText.classList.add("hide");
          });
          
          //color change for Product
          productGrid[0].addEventListener("mouseenter", () => {
            if(window.innerWidth > 1024){
            portfolioWrapper.style.backgroundColor = productColor;
            productText.classList.remove("hide");
            productText.classList.add("show");
            }else{
            portfolioWrapper.style.backgroundColor = defaultColor;
          }
          });
          productGrid[0].addEventListener("mouseleave", () => {
            portfolioWrapper.style.backgroundColor = defaultColor;
            productText.classList.remove("show");
            productText.classList.add("hide");
          });
          //color change for Fashion
          fashionGrid[0].addEventListener("mouseenter", () => {
            if(window.innerWidth > 1024){
            portfolioWrapper.style.backgroundColor = fashionColor;
            fashionText.classList.remove("hide");
            fashionText.classList.add("show");
            }else{
            portfolioWrapper.style.backgroundColor = defaultColor;
          }
          });
          fashionGrid[0].addEventListener("mouseleave", () => {
            portfolioWrapper.style.backgroundColor = defaultColor;
            fashionText.classList.remove("show");
            fashionText.classList.add("hide");
          });
          
          //color change for Interior
          interiorGrid[0].addEventListener("mouseenter", () => {
            if(window.innerWidth > 1024){
            portfolioWrapper.style.backgroundColor = interiorColor;
            interiorText.classList.remove("hide");
            interiorText.classList.add("show");
            }else{
            portfolioWrapper.style.backgroundColor = defaultColor;
          }
          });
          interiorGrid[0].addEventListener("mouseleave", () => {
            portfolioWrapper.style.backgroundColor = defaultColor;
            interiorText.classList.remove("show");
            interiorText.classList.add("hide");
          });
          




