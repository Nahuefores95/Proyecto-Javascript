let listaProductCat = document.querySelector('#listaProductCat');
let gridProduct = document.querySelectorAll('.gridH4');
let palabraCompleta = "";

/*
gridProduct.forEach((product) => product.addEventListener("click", () => callProducts(product)));

function callProducts(product){
    console.log("holaaaa");
    const gridProductLink = product.id;
    match = gridProductLink.match(/grid(.+)/);
    palabraCompleta = match[1];
    console.log(palabraCompleta);   
}
*/

gridProduct.forEach(() => addEventListener("click", function () {
    // Realiza una solicitud Fetch a la URL deseada
    fetch("http://localhost:3000/api/products/listar")
      .then(function (response) {
        // Verifica si la solicitud Fetch fue exitosa (código de respuesta 200)
        if (response.status === 200) {
          // Redirige a la nueva página cuando la solicitud sea exitosa
          window.location.href = "productsCat.html";
          console.log("entre");
          data.forEach(product => {
            listaProductCat.innerHTML += 
            `<h2>HOLAAAAA</h2>
            <div class="col-sm-12 col-md-6 col-lg-4">   
                <div class="productItem">
                    <img class="productImage" src="http://localhost:3001/img/${product.image}" alt="imagen del producto">
                    <h2>${product.name}</h2>
                    <h4>$${product.price}</h4>
                    <h3>${product.category}</h3>
                    
                </div>  
            </div>`  
            });
        } else {
          console.error("Error en la solicitud Fetch:", response.status);
        }
      })
      .catch(function (error) {
        console.error("Error en la solicitud Fetch:", error);
      });
  }));


/*
async function callfetch(){
    const gridProductLink = gridProduct.id;
    match = gridProductLink.match(/grid(.+)/);
    palabraCompleta = match[1];
    link =  `http://localhost:3000/api/products/listar/category/${palabraCompleta}`;
    console.log(link);
    try{
        const result = await fetch(link);
        const data = await result.json();
        window.location.href = "productsCat.html";
        console.log(data);
        data.forEach(product => {
            listaProductCat.innerHTML += 
            `<div class="col-sm-12 col-md-6 col-lg-4">   
                <div class="productItem">
                    <img class="productImage" src="http://localhost:3000/img/${product.image}" alt="imagen del producto">
                    <h2>${product.name}</h2>
                    <h4>$${product.price}</h4>
                    <h3>${product.category}</h3>
                    
                </div>  
            </div>`  
            });

    }catch(e){
        console.log(e);
    }
}


callfetch();*/