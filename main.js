const companyData = {
  name: "TITULO RARO",
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  primaryColor: "#2c5545",    //base.css line11
  backgroundColor: "#e3e3e3", //base.css line10
  imageUrl:
    "https://cdn.pixabay.com/photo/2018/06/14/13/38/bananas-3474872_960_720.jpg",
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


//  EPIC:2
//Funcion y Eventos para abrir y cerrar el formulario al hacer clic en el botón 'Edit Company' i 'cerrarBoton'
const formulario = document.getElementById('sectionCompanyForm'); 
const boton = document.getElementById('editCompanyBtn'); 
const cerrarBoton = document.getElementById('closeCompanyFormBtn') 

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


//  EPIC:3 
//Definir const y Objetos companyProductData
const companyProduct1Data = {
  imageUrl1:
  "https://cdn.pixabay.com/photo/2015/05/31/13/43/flour-791840_1280.jpg",
  product1: "PRODUCTO 1",
  price1: "100",
};
const companyProduct2Data = {
  imageUrl2:
  "https://media.istockphoto.com/id/1909401890/es/foto/woman-holding-jar-of-flour-in-hands.jpg?s=2048x2048&w=is&k=20&c=D9LAliXvIHB1Cvn_Caz42m-KHbdE1fFVDrQDWx5vVLI=",
  product2: "PRODUCTO 2",
  price2: "200",
};
const companyProduct3Data = {
  imageUrl3:
  "https://media.istockphoto.com/id/1299271939/es/foto/pouring-k%C3%A9fir-casero-en-un-vaso-de-una-jarra.jpg?s=2048x2048&w=is&k=20&c=HTyW-vHfyfKzdI3GhJNeAQdruQdmfyVhtsOS7j42fNA=",
  product3: "PRODUCTO 3",
  price3: "300",
};

const product1imageDOM = document.getElementById("imageProduct1")
const product1nameDOM = document.getElementById("tittleProduct1")
const product1priceDOM = document.getElementById("priceProduct1")
const product2imageDOM = document.getElementById("imageProduct2")
const product2nameDOM = document.getElementById("tittleProduct2")
const product2priceDOM = document.getElementById("priceProduct2")
const product3imageDOM = document.getElementById("imageProduct3")
const product3nameDOM = document.getElementById("tittleProduct3")
const product3priceDOM = document.getElementById("priceProduct3")
const botonNovedadesDOM = document.getElementById("editwhats-newBtn")
const saveButtonNovedadesDOM = document.getElementById("buttonSaveNovedades");

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

//Evento para que novedadesBoton guarde el contenido en companyProductData
saveButtonNovedadesDOM.addEventListener('click', function(event) {
  //Previene que la página se recargue si es un formulario
  event.preventDefault(); 
  //Actualizar companyProductData con los valores del Formulario Novedades
  companyProduct1Data.imageUrl1 = product1ImageInput.value
  companyProduct1Data.product1 = product1NameInput.value
  companyProduct1Data.price1 = product1PriceInput.value

  companyProduct2Data.imageUrl2 = product2ImageInput.value
  companyProduct2Data.product2 = product2NameInput.value
  companyProduct2Data.price2 = product2PriceInput.value

  companyProduct3Data.imageUrl3 = product3ImageInput.value
  companyProduct3Data.product3 = product3NameInput.value
  companyProduct3Data.price3 = product3PriceInput.value

  modifyDOM2()
  toggleForm()
});


  //Epic4: Guardar los datos en Local Storage
const companyDataToSave = () => {
  const dataToSave = {
    name: companyData.name,
    claim: companyData.claim,
    text: companyData.text,
    primaryColor: companyData.primaryColor,
    backgroundColor: companyData.backgroundColor,
    imageUrl: companyData.imageUrl
  };

  localStorage.setItem("companyData", JSON.stringify(dataToSave));
};

const companyProductsToSave = () => {
  const productsToSave = {
    product1: {
      imageUrl: companyProduct1Data.imageUrl1,
      name: companyProduct1Data.product1,
      price: companyProduct1Data.price1
    },
    product2: {
      imageUrl: companyProduct2Data.imageUrl2,
      name: companyProduct2Data.product2,
      price: companyProduct2Data.price2
    },
    product3: {
      imageUrl: companyProduct3Data.imageUrl3,
      name: companyProduct3Data.product3,
      price: companyProduct3Data.price3
    },
  };
  localStorage.setItem("companyProducts", JSON.stringify(productsToSave));
};

// funciones después de actualizar los datos en los formularios
saveButtonDOM.addEventListener('click', function(event) {
  event.preventDefault();
  modifyDOM();
  companyDataToSave(); 
  toggleForm();
});

saveButtonNovedadesDOM.addEventListener('click', function(event) {
  event.preventDefault();
  modifyDOM2();
  companyProductsToSave();
  toggleForm2();
});


//Cargar los datos desde LocalStorage
const loadCompanyData = () => {
  const storedData = localStorage.getItem("companyData");
  if (storedData) {
    const data = JSON.parse(storedData);
    companyData.name = data.name;
    companyData.claim = data.claim;
    companyData.text = data.text;
    companyData.primaryColor = data.primaryColor;
    companyData.backgroundColor = data.backgroundColor;
    companyData.imageUrl = data.imageUrl;

    modifyDOM(); 
  }
};

const loadCompanyProductsData = () => {
  const storedProducts = localStorage.getItem("companyProducts");
  if (storedProducts) {
    const products = JSON.parse(storedProducts);
    companyProduct1Data.imageUrl1 = products.product1.imageUrl;
    companyProduct1Data.product1 = products.product1.name;
    companyProduct1Data.price1 = products.product1.price;
    companyProduct2Data.imageUrl2 = products.product2.imageUrl;
    companyProduct2Data.product2 = products.product2.name;
    companyProduct2Data.price2 = products.product2.price;
    companyProduct3Data.imageUrl3 = products.product3.imageUrl;
    companyProduct3Data.product3 = products.product3.name;
    companyProduct3Data.price3 = products.product3.price;

    modifyDOM2(); 
  }
};

// Cargar los datos cuando la página se cargue
window.onload = () => {
  loadCompanyData();
  loadCompanyProductsData();
};
