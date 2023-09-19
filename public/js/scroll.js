//La funcion se ejecuta cada vez que se hace un scroll de pantalla
function handleScroll() {
    //Selecciono los elementos del DOM
    const gridContainerOne = document.querySelector('.gridContainerOne');
    const gridContainerFour = document.querySelector('.gridContainerFour');
    const gridContainerFive = document.querySelector('.gridContainerFive');
    
    //Se obtiene el valor de la altura visible de la ventana
    //Se multiplica el valor de 0,6 para que la animación se realize cuando esta más cerca del div correspondiente
    const windowHeight = window.innerHeight*0.6;

  
    if (gridContainerOne) {
      const gridContainerOneTop = gridContainerOne.getBoundingClientRect().top; //Se obtiene la posición vertical del elemento con respecto a la parte superior de la ventana
      if (gridContainerOneTop <= windowHeight) { //Se compara la posición anterior con la de la altura visible de la ventana
        gridContainerOne.classList.add('show'); //Se añade la clase show al elemento
      }
    }
  
    if (gridContainerFour) {
      const gridContainerFourTop = gridContainerFour.getBoundingClientRect().top;
  
      if (gridContainerFourTop <= windowHeight) {
        gridContainerFour.classList.add('show'); //Se añade la clase show al elemento
      }
    }
  
    if (gridContainerFive) {
      const gridContainerFiveTop = gridContainerFive.getBoundingClientRect().top;
  
      if (gridContainerFiveTop <= windowHeight) {
        gridContainerFive.classList.add('show'); //Se añade la clase show al elemento
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll);