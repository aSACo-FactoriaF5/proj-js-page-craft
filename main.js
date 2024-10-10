const companyData = {
  name: "TITULO RARO",
  primaryColor: "pink",    //base.css line11
  backgroundColor: "blue", //base.css line10
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  imageUrl:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};

console.log(companyData);

//señalar elementos

//const newPrimaryColor = '#pink'
const root = document.documentElement
const tituloDOM = document.getElementById("companyName")
const imagenDOM = document.getElementById("companyImage")
const claimDOM = document.getElementById("companyClaim")
const textDOM = document.getElementById("companyText")
const primaryColorDOM = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
const backgroundColorDOM = getComputedStyle(document.documentElement).getPropertyValue('--back-color');
//const backcolorDOM = document.getElementById("--back-color")
//const primarycolorDOM = document.getElementById("-primary-color")


//modificacion de atributos
tituloDOM.textContent = companyData.name      //tmb funciona con innerHTML
document.title = companyData.name
console.log(tituloDOM)

claimDOM.textContent = companyData.claim
console.log(claimDOM)

imagenDOM.setAttribute("src", companyData.imageUrl)
console.log(imagenDOM)

textDOM.textContent = companyData.text
console.log(textDOM)

console.log(primaryColorDOM)
console.log(backgroundColorDOM)

// Cambiar el valor de las variables CSS
root.style.setProperty('--primary-color', companyData.primaryColor);
root.style.setProperty('--back-color', companyData.backgroundColor);

console.log('Nuevo primary-color:', getComputedStyle(root).getPropertyValue('--primary-color'));
console.log('Nuevo back-color:', getComputedStyle(root).getPropertyValue('--back-color'));



//intento de cambiar color primaryDOM.colorContent = companyData.primaryColor

//try:0 // document.documentElement.style.setProperty('--primary-color', companyData.primaryColor);
/*try1
function changePrimaryColor(primaryColor) {
  document.documentElement.style.setProperty('--primary-color', primaryColor);
}*/

/*try2
function changeBackgroundColor()   
 {
      const root = document.documentElement;
      root.style.setProperty('--back-color', companyData.backgroundColor);
 }*/

 //try3: root.style.setProperty('--back-color', companyData.backgroundColor);



 //EPIC:2