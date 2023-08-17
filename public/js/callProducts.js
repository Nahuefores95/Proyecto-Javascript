let listaproduct = document.querySelector('.listaproduct');


async function callfetch(){
    try{
        const result = await fetch('http://localhost:3000/api/products/listar');
        const data = await result.json();
        data.forEach(product => {
            listaproduct.innerHTML += 
            `<div class="product-box">   
                <div class="product-box1">
                    <img src="http://localhost:3000/img/${product.image}" alt="imagen del producto">
                </div>
                <article>
                    <h2>${product.name}</h2>
                    <h3>${product.category}</h3>
                    <h4>$${product.price}</h4>
                </article>
            </div>` 
            console.log(product.image);
            });

    }catch(e){
        console.log(e);
    }
}

let data = callfetch();