

const prodFlex= document.getElementsByClassName("prod-flex")[0];

axios.get('http://localhost:8080/api/products').then(resp => {

    console.log(resp.data);

    for(let i=0; i<resp.data.length; i++){
        console.log(resp.data[i].name);
        let templateProduct='<li class="container">' +
        '<img class="produto" src=' +'http://localhost:8080' +resp.data[i].photo+'>'+
        '<h3 class="descricao"><a>'+resp.data[i].name+'</a></h3>'+
        '<p class="preco">'+'R$'+resp.data[i].price+ '</p>'+
        '</li>';
        prodFlex.innerHTML+=templateProduct;

    }
});
