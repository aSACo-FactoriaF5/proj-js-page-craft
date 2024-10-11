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

//EPIC1:
//señalar elementos
const root = document.documentElement
const tituloDOM = document.getElementById("companyName")
const imagenDOM = document.getElementById("companyImage")
const claimDOM = document.getElementById("companyClaim")
const textDOM = document.getElementById("companyText")
const primaryColorDOM = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
const backgroundColorDOM = getComputedStyle(document.documentElement).getPropertyValue('--back-color');


//modificacion de atributos
tituloDOM.textContent = companyData.name     
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


//cambiar el valor de las variables CSS
root.style.setProperty('--primary-color', companyData.primaryColor);
root.style.setProperty('--back-color', companyData.backgroundColor);

console.log('Nuevo primary-color:', getComputedStyle(root).getPropertyValue('--primary-color'));
console.log('Nuevo back-color:', getComputedStyle(root).getPropertyValue('--back-color'));



 //EPIC:2
 //id="editCompanyBtn"   onClick="desplegableFormulario"
 const formulario = document.getElementById('sectionCompanyForm'); 
 const boton = document.getElementById('editCompanyBtn'); //editButton
 const cerrarBoton = document.getElementById('closeCompanyFormBtn') 

 console.log(boton)
 console.log(formulario)
 console.log(cerrarBoton)

// Función para alternar la visibilidad del formulario:
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

const nameInput = document.getElementById("companyNameInput")
nameInput.value = companyData.name
console.log(nameInput)













