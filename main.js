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
 //id="editCompanyBtn"   onClick="desplegableFormulario"
 const formulario = document.getElementById('sectionCompanyForm'); 
 const boton = document.getElementById('editCompanyBtn'); //editButton
 const cerrarBoton = document.getElementById('closeCompanyFormBtn') 

// la siguiente función toggleForm() podría ser sustituida por "formulario.classList.toggle('hidden')"
function toggleForm() {
  if (formulario.classList.contains('hidden')) {
    formulario.classList.remove('hidden'); // Mostrar el formulario
  } else {
    formulario.classList.add('hidden'); // Ocultar el formulario
  }
}

function toggleForm() {
  console.log('Formulario antes de cambiar:', formulario.classList);
  formulario.classList.toggle('hidden');
  console.log('Formulario después de cambiar:', formulario.classList);
}

// Eventos para abrir y cerrar el formulario al hacer clic en el botón 'Edit Company' & 'Cerrar boton'
boton.addEventListener('click', toggleForm);
cerrarBoton.addEventListener('click', toggleForm);

// Cargar nameInput en companyData.name
const nameInput = document.getElementById("companyNameInput")
nameInput.value = companyData.name

// Cargar claimInput en companyData.claim
const claimInput = document.getElementById("companyClaimInput")
claimInput.value = companyData.claim

// Cargar textInput en companyData.claim
const textInput = document.getElementById("companyTextInput")
textInput.value = companyData.text

// Cargar primaryColor en companyDta.primaryColor
const primaryColorInput = document.getElementById("primaryColorInput")
primaryColorInput.value = companyData.primaryColor

// Cargar backgroundColor en companyDta.backgroundColor 
const backgroundColorInput = document.getElementById("backgroundColorInput")
backgroundColorInput.value = companyData.backgroundColor

// Cargar companyImageURLInput en companyDta.imageUrl 
const companyImageURLInput = document.getElementById("companyImageURLInput")
companyImageURLInput.value = companyData.imageUrl

// Evento para que saveButton guarde el contenido en companyData
saveButtonDOM.addEventListener('click', function(event) {
  event.preventDefault(); // Previene que la página se recargue si es un formulario

// Actualizar companyData con los valores del formulario
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
const companyProduct1Data = {
  imageUrl:
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  product: "TITULO RARO",
  price: "We make the best widgets",
};

const companyProduct2Data = {
  imageUrl:
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  product: "TITULO RARO",
  price: "We make the best widgets",
};

const companyProduct3Data = {
  imageUrl:
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  product: "TITULO RARO",
  price: "We make the best widgets",
};

console.log(companyData);

const botonNovedades = document.getElementById("editwhats-newBtn")
console.log(botonNovedades)

function toggleFormNews() {
  if (formulario.classList.contains('hidden')) {
    formulario.classList.remove('hidden'); // Mostrar el formulario
  } else {
    formulario.classList.add('hidden'); // Ocultar el formulario
  }
}

function toggleFormNews() {
  console.log('Formulario antes de cambiar:', formulario.classList);
  formulario.classList.toggle('hidden');
  console.log('Formulario después de cambiar:', formulario.classList);
}



