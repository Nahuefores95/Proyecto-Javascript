const gridImages = document.querySelectorAll('.gridImage');


gridImages.forEach((imagen) => {
  const anchoImagen = imagen.width; // Obtén el ancho de la imagen
  const altoImagen = imagen.height; // Obtén el alto de la imagen
  console.log(altoImagen,anchoImagen);

  if (anchoImagen > 400) imagen.style.maxWidth = "400px";
  if (altoImagen > 480) imagen.style.maxHeight = "480px";

});


async function callfetch(){
    try{
        await fetch('http://localhost:3001/api/products/listar');
        const productImages = document.querySelectorAll('.productImage');
        productImages.forEach((imagen) => {
            console.log(imagen);
            const anchoImagen = imagen.width; // Obtén el ancho de la imagen
            const altoImagen = imagen.height; // Obtén el alto de la imagen
            console.log(anchoImagen,altoImagen);
            // Define tus condiciones para aplicar una de las clases
            if (anchoImagen > 400 || altoImagen > 480) {
              imagen.classList.add('productImage1');
            } else {
              imagen.classList.add('productImage');
            }
          });
    }catch(e){
        console.log(e);
    }
}

async function fetchDataAndApplyStyles() {
    try {
      await callfetch(); // Espera a que se complete la función callfetch
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchDataAndApplyStyles(); // Llama a la función principal para aplicar los estilos