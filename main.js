const companyData = {
  name: "TITULO RARO",
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  primaryColor: "#2c5545",    //base.css line11
  backgroundColor: "#e3e3e3", //base.css line10
  imageUrl:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};
console.log(companyData);

//EPIC1:
//señalar elementos
const root = document.documentElement
const tituloDOM = document.getElementById("companyName")
const imagenDOM = document.getElementById("companyImage")
const claimDOM = document.getElementById("companyClaim")
const textDOM = document.getElementById("companyText")
const primaryColorDOM = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
const backgroundColorDOM = getComputedStyle(document.documentElement).getPropertyValue('--back-color');
const saveButtonDOM = document.getElementById("buttonSave")

function modifyDOM(){

//modificacion de atributos
tituloDOM.textContent = companyData.name     
document.title = companyData.name
claimDOM.textContent = companyData.claim
imagenDOM.setAttribute("src", companyData.imageUrl)
textDOM.textContent = companyData.text
//cambiar el valor de las variables CSS
root.style.setProperty('--primary-color', companyData.primaryColor);
root.style.setProperty('--back-color', companyData.backgroundColor);
}
modifyDOM()


 //EPIC:2
 const formulario = document.getElementById('sectionCompanyForm'); 
 const boton = document.getElementById('editCompanyBtn'); 
 const cerrarBoton = document.getElementById('closeCompanyFormBtn') 

//Funcion y Eventos para abrir y cerrar el formulario al hacer clic en el botón 'Edit Company' i 'cerrarBoton'
function toggleForm() {
  formulario.classList.toggle('hidden')
}
boton.addEventListener('click', toggleForm);
cerrarBoton.addEventListener('click', toggleForm);

//Cargar valores Input del Formulario en companyData
const nameInput = document.getElementById("companyNameInput")
const companyImageURLInput = document.getElementById("companyImageURLInput")
const claimInput = document.getElementById("companyClaimInput")
const textInput = document.getElementById("companyTextInput")
const primaryColorInput = document.getElementById("primaryColorInput")
const backgroundColorInput = document.getElementById("backgroundColorInput")

nameInput.value = companyData.name
companyImageURLInput.value = companyData.imageUrl
claimInput.value = companyData.claim
textInput.value = companyData.text
primaryColorInput.value = companyData.primaryColor
backgroundColorInput.value = companyData.backgroundColor

//Evento para que saveButton guarde el contenido en companyData
saveButtonDOM.addEventListener('click', function(event) {
  //Previene que la página se recargue si es un formulario
  event.preventDefault(); 
  //Actualizar companyData con los valores del formulario
  companyData.name = nameInput.value;
  companyData.claim = claimInput.value;
  companyData.text = textInput.value;
  companyData.primaryColor = primaryColorInput.value;
  companyData.backgroundColor = backgroundColorInput.value;
  companyData.imageUrl = companyImageURLInput.value;
  modifyDOM()
  toggleForm()
});


//EPIC:3 
//Definir const y Objetos companyProductData
const companyProduct1Data = {
  imageUrl1:
  "https://cdn.pixabay.com/photo/2023/07/31/16/37/sugar-apple-8161386_960_720.jpg",
  product1: "PRODUCTO 1",
  price1: "100",
};
const companyProduct2Data = {
  imageUrl2:
  "https://cdn.pixabay.com/photo/2022/07/10/20/15/raspberries-7313700_960_720.jpg",
  product2: "PRODUCTO 2",
  price2: "200",
};
const companyProduct3Data = {
  imageUrl3:
  "https://cdn.pixabay.com/photo/2018/07/03/10/47/blueberries-3513547_960_720.jpg",
  product3: "PRODUCTO 3",
  price3: "300",
};
console.log(companyProduct1Data);
console.log(companyProduct2Data);
console.log(companyProduct3Data);

const product1imageDOM = document.getElementById("imageProduct1")
const product1nameDOM = document.getElementById("tittleProduct1")
const product1priceDOM = document.getElementById("priceProduct1")
const product2imageDOM = document.getElementById("imageProduct2")
const product2nameDOM = document.getElementById("tittleProduct2")
const product2priceDOM = document.getElementById("priceProduct2")
const product3imageDOM = document.getElementById("imageProduct3")
const product3nameDOM = document.getElementById("tittleProduct3")
const product3priceDOM = document.getElementById("priceProduct3")
const botonNovedades = document.getElementById("editwhats-newBtn")

console.log(product1imageDOM)
console.log(product1nameDOM)
console.log(product1priceDOM)
console.log(product2imageDOM)
console.log(product2nameDOM)
console.log(product2priceDOM)
console.log(product3imageDOM)
console.log(product3nameDOM)
console.log(product3priceDOM)
console.log(botonNovedades)

//modificacion de atributos News & Offers
function modifyDOM2(){
  product1imageDOM.setAttribute("src", companyProduct1Data.imageUrl1)
  product1nameDOM.textContent = companyProduct1Data.product1  
  product1priceDOM.textContent = companyProduct1Data.price1
  product2imageDOM.setAttribute("src", companyProduct2Data.imageUrl2)
  product2nameDOM.textContent = companyProduct2Data.product2  
  product2priceDOM.textContent = companyProduct2Data.price2
  product3imageDOM.setAttribute("src", companyProduct3Data.imageUrl3)
  product3nameDOM.textContent = companyProduct3Data.product3 
  product3priceDOM.textContent = companyProduct3Data.price3
  }

//toggle sectionNovedadesForm
const novedadesFormulario = document.getElementById('sectionNovedadesForm'); 
const novedadesBoton = document.getElementById('editwhats-newBtn'); 
const novedadesCerrarBoton = document.getElementById('closeNovedadesFormBtn') 

function toggleForm2() {
  novedadesFormulario.classList.toggle('hidden');
}

//Eventos para abrir y cerrar el formulario al hacer clic en el botón 'NovedadesForm' & 'Cerrar boton' Novedades
novedadesBoton.addEventListener('click', toggleForm2);
novedadesCerrarBoton.addEventListener('click', toggleForm2);

//cargar imageProduct1Input en companyProduct1Data
const product1ImageInput = document.getElementById("imageProduct1Input")
const product1NameInput = document.getElementById("nameProduct1Input")
const product1PriceInput = document.getElementById("priceProduct1Input")
const product2ImageInput = document.getElementById("imageProduct2Input")
const product2NameInput = document.getElementById("nameProduct2Input")
const product2PriceInput = document.getElementById("priceProduct2Input")
const product3ImageInput = document.getElementById("imageProduct3Input")
const product3NameInput = document.getElementById("nameProduct3Input")
const product3PriceInput = document.getElementById("priceProduct3Input")

product1ImageInput.value = companyProduct1Data.imageUrl1
product1NameInput.value = companyProduct1Data.product1  
product1PriceInput.value = companyProduct1Data.price1 
product2ImageInput.value = companyProduct2Data.imageUrl2
product2NameInput.value = companyProduct2Data.product2
product2PriceInput.value = companyProduct2Data.price2
product3ImageInput.value = companyProduct3Data.imageUrl3
product3NameInput.value = companyProduct3Data.product3
product3PriceInput.value = companyProduct3Data.price3

//Evento save
//actualizar companyProductData con los valores del novedadesFormulario

modifyDOM2()



