const companyData = {
  name: "TITULO RARO",
  primaryColor: "#2c5545",    //base.css line11
  backgroundColor: "#e3e3e3", //base.css line10
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  imageUrl:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};

console.log(companyData);

//señalar elementos
const tituloDOM = document.getElementById("companyName")
const imagenDOM = document.getElementById("companyImage")
const claimDOM = document.getElementById("companyClaim")
const textDOM = document.getElementById("companyText")
//const backcolorDOM = document.getElementById("--back-color")
//const primarycolorDOM = document.getElementById("-primary-color")



console.log(tituloDOM)

//modificacion de atributos
document.title = companyData.name
tituloDOM.textContent = companyData.name      //tmb funciona amb innerHTML


console.log(imagenDOM)
imagenDOM.setAttribute("src", companyData.imageUrl)


console.log(claimDOM)
claimDOM.textContent = companyData.claim


console.log(textDOM)
textDOM.textContent = companyData.text

document.documentElement.style.setProperty('--primary-color', companyData.primaryColor);