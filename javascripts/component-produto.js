class componentProduto extends HTMLElement{
    constructor(){
        super()
        this.build()
        
    }

    build() {
        const shadow=this.attachShadow({mode: 'open'})
        shadow.appendChild(this.styles())
        shadow.appendChild(this.createProduto())
        this.bind()

    }

    createProduto(){
        const li = document.createElement('li')
        li.classList.add("container")

        const img = document.createElement('img')
        img.classList.add("produto")
        li.appendChild(img)

        const h3 = document.createElement('h3')
        h3.classList.add("descricao")
        li.appendChild(h3)
        
        const p = document.createElement('p')
        p.classList.add("preco")
        li.appendChild(p)

        return li
    }

    bind(){
        const imagem = this.getAttribute('imagemProduto')
        this.shadowRoot.querySelector('.produto').setAttribute('src', imagem)

        const descricao = this.getAttribute('nomeProduto')
        this.shadowRoot.querySelector('.descricao').innerText= descricao

        const preco = this.getAttribute('precoProduto')
        this.shadowRoot.querySelector('.preco').innerText= preco
    
    }

    connectedCallback(){
        this.bind();
      }

   styles() {
        const style = document.createElement('style')
        style.textContent = `
            @import "styles/component-produto.css"
        `
        return style
    } 
}

customElements.define('component-produto', componentProduto)