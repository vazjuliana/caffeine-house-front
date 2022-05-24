

const prodFlex= document.getElementsByClassName("prod-flex")[0];

axios.get('http://localhost:8080/api/products').then(resp => {

    console.log(resp.data);

    for(let i=0; i<resp.data.length; i++){
        const componentProduto = document.createElement('component-produto')
        componentProduto.setAttribute('imagemProduto', 'http://localhost:8080'+ resp.data[i].photo)
        componentProduto.setAttribute('nomeProduto', resp.data[i].name)
        componentProduto.setAttribute('procoProduto', resp.data[i].price)
        
        prodFlex.appendChild(componentProduto);
    }
});
