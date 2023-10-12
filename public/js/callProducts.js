let listaProduct = document.querySelector('#listaProduct');


async function callfetch(ruta){
    console.log(ruta);
    if (!ruta) link = "http://localhost:3001/api/products/listar";
    else 
    console.log(link);
    
    try{
        const result = await fetch("http://localhost:3001/api/products/listar");
        const data = await result.json();
        data.forEach(product => {
            listaProduct.innerHTML += 
            `<div class="col-sm-12 col-md-6 col-lg-4">   
                <div class="productItem">
                    <img class="productImage" src="http://localhost:3001/img/${product.image}" alt="imagen del producto">
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


callfetch();