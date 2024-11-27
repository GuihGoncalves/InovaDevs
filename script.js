//Adicionar 1 Em Quantidade no Bolo Decorado
document.querySelector("#quantidade-mais1").addEventListener("click", function() {
 let $quantidade = document.querySelector("#quantidade1")
 $quantidade.textContent = Number($quantidade.textContent) + 1
})
//Diminuir 1 Em Quantidade no Bolo Decorado
document.querySelector("#quantidade-menos1").addEventListener("click", function() {
    let $quantidade = document.querySelector("#quantidade1")
    if (Number($quantidade.textContent) > 0) {
        $quantidade.textContent = Number($quantidade.textContent) - 1
    }
   })


//Adicionar 1 Em Quantidade no Bolo Vulcão
document.querySelector("#quantidade-mais2").addEventListener("click", function() {
    let $quantidade = document.querySelector("#quantidade2")
    $quantidade.textContent = Number($quantidade.textContent) + 1
   })
   //Diminuir 1 Em Quantidade no Bolo Vulcão
   document.querySelector("#quantidade-menos2").addEventListener("click", function() {
    let $quantidade = document.querySelector("#quantidade2")
    if (Number($quantidade.textContent) > 0) {
        $quantidade.textContent = Number($quantidade.textContent) - 1
    }
   })

    //Adicionar 1 Em Quantidade no Bolo de Ganache
   document.querySelector("#quantidade-mais3").addEventListener("click", function() {
    let $quantidade = document.querySelector("#quantidade3")
    $quantidade.textContent = Number($quantidade.textContent) + 1
   })
   //Diminuir 1 Em Quantidade no Bolo de Ganache
   document.querySelector("#quantidade-menos3").addEventListener("click", function() {
    let $quantidade = document.querySelector("#quantidade3")
    if (Number($quantidade.textContent) > 0) {
        $quantidade.textContent = Number($quantidade.textContent) - 1
    }
   })

   //Adicionar 1 Em Quantidade no Bolo de Frutas
   document.querySelector("#quantidade-mais4").addEventListener("click", function() {
    let $quantidade = document.querySelector("#quantidade4")
    $quantidade.textContent = Number($quantidade.textContent) + 1
   })
   //Diminuir 1 Em Quantidade no Bolo de Frutas
   document.querySelector("#quantidade-menos4").addEventListener("click", function() {
    let $quantidade = document.querySelector("#quantidade4")
    if (Number($quantidade.textContent) > 0) {
        $quantidade.textContent = Number($quantidade.textContent) - 1
    }
   })

//Abrir Carrinho de Compras
document.querySelector("#img-carrinho").addEventListener("click", function() {
document.querySelector("#carrinho").classList.toggle("aberto")

})

//Adicionar o Bolo Decorado
document.querySelector("#adicionar-carrinho1").addEventListener("click", function() {
    console.log("adicionar...")
    let titulo01 = document.querySelector("#produto1 #titulo1").textContent
    let preco01 = document.querySelector("#produto1 #preco1").textContent
    let quantidade01 = document.querySelector("#produto1 #quantidade1").textContent
    let total01 = Number(preco01.replace("R$", "")) * Number(quantidade01)
    console.log(titulo01, preco01, quantidade01, total01)


    let listaProdutos = document.querySelector("#carrinho ul")

    let produtoLi1 = document.createElement("li")

    let produtoDiv1 = document.createElement("div")
    produtoDiv1.classList.add("produto")

    let produtoImg1 = document.createElement("img")
    produtoImg1.classList.add("img-bolo")
    produtoImg1.src= "./imagens/bolo1.jpeg"

    let produtoDescricao1 = document.createElement("div")
    produtoDiv1.classList.add("produto-descricao")

    let produtoH21 = document.createElement("h2")
    produtoH21.textContent = titulo01

    let produtoPreco1 = document.createElement("span")
    produtoPreco1.classList.add("produto-preco")
    produtoPreco1.textContent = preco01 + " x " + quantidade01

    let produtoPrecoTotal1 = document.createElement("span")
    produtoPrecoTotal1.classList.add("produto-preco-total")
    produtoPrecoTotal1.textContent = "R$" + total01.toFixed(2)

    let produtoImgDeletar1 = document.createElement("img")
    produtoImgDeletar1.src = "./imagens/apagar.png"

    produtoLi1.appendChild(produtoImg1)
    produtoDescricao1.appendChild(produtoH21)
    produtoDescricao1.appendChild(produtoPreco1)
    produtoDescricao1.appendChild(produtoPrecoTotal1)

    produtoLi1.appendChild(produtoDescricao1)
    produtoLi1.appendChild(produtoImgDeletar1)

    produtoDiv1.appendChild(produtoImg1)
    produtoDiv1.appendChild(produtoDescricao1)
    produtoDiv1.appendChild(produtoImgDeletar1)

    produtoLi1.appendChild(produtoDiv1)

    listaProdutos.appendChild(produtoLi1)

   

})
//Adicionar o Bolo Vulcão
document.querySelector("#adicionar-carrinho2").addEventListener("click", function() {
    console.log("adicionar2...")
    let titulo02 = document.querySelector("#produto2 #titulo2").textContent
    let preco02 = document.querySelector("#produto2 #preco2").textContent
    let quantidade02 = document.querySelector("#produto2 #quantidade2").textContent
    let total02 = Number(preco02.replace("R$", "")) * Number(quantidade02)
    console.log(titulo02, preco02, quantidade02, total02)


    let listaProdutos2 = document.querySelector("#carrinho ul")

    let produtoLi2 = document.createElement("li")

    let produtoDiv2 = document.createElement("div")
    produtoDiv2.classList.add("produto")

    let produtoImg2 = document.createElement("img")
    produtoImg2.classList.add("img-bolo")
    produtoImg2.src= "./imagens/bolo2.jpeg"

    let produtoDescricao2 = document.createElement("div")
    produtoDiv2.classList.add("produto-descricao")

    let produtoH22 = document.createElement("h2")
    produtoH22.textContent = titulo02

    let produtoPreco2 = document.createElement("span")
    produtoPreco2.classList.add("produto-preco")
    produtoPreco2.textContent = preco02 + " x " + quantidade02

    let produtoPrecoTotal2 = document.createElement("span")
    produtoPrecoTotal2.classList.add("produto-preco-total")
    produtoPrecoTotal2.textContent = "R$" + total02.toFixed(2)

    let produtoImgDeletar2 = document.createElement("img")
    produtoImgDeletar2.src = "./imagens/apagar.png"

    produtoLi2.appendChild(produtoImg2)
    produtoDescricao2.appendChild(produtoH22)
    produtoDescricao2.appendChild(produtoPreco2)
    produtoDescricao2.appendChild(produtoPrecoTotal2)

    produtoLi2.appendChild(produtoDescricao2)
    produtoLi2.appendChild(produtoImgDeletar2)

    produtoDiv2.appendChild(produtoImg2)
    produtoDiv2.appendChild(produtoDescricao2)
    produtoDiv2.appendChild(produtoImgDeletar2)

    produtoLi2.appendChild(produtoDiv2)

    listaProdutos2.appendChild(produtoLi2)

})
//Adicionar o Bolo de ganache
document.querySelector("#adicionar-carrinho3").addEventListener("click", function() {
    console.log("adicionar3...")
    let titulo03 = document.querySelector("#produto3 #titulo3").textContent
    let preco03 = document.querySelector("#produto3 #preco3").textContent
    let quantidade03 = document.querySelector("#produto3 #quantidade3").textContent
    let total03 = Number(preco03.replace("R$", "")) * Number(quantidade03)
    console.log(titulo03, preco03, quantidade03, total03)


    let listaProdutos3 = document.querySelector("#carrinho ul")

    let produtoLi3 = document.createElement("li")

    let produtoDiv3 = document.createElement("div")
    produtoDiv3.classList.add("produto")

    let produtoImg3 = document.createElement("img")
    produtoImg3.classList.add("img-bolo")
    produtoImg3.src= "./imagens/bolo3.jpeg"

    let produtoDescricao3 = document.createElement("div")
    produtoDiv3.classList.add("produto-descricao")

    let produtoH23 = document.createElement("h2")
    produtoH23.textContent = titulo03

    let produtoPreco3 = document.createElement("span")
    produtoPreco3.classList.add("produto-preco")
    produtoPreco3.textContent = preco03 + " x " + quantidade03

    let produtoPrecoTotal3 = document.createElement("span")
    produtoPrecoTotal3.classList.add("produto-preco-total")
    produtoPrecoTotal3.textContent = "R$" + total03.toFixed(2)

    let produtoImgDeletar3 = document.createElement("img")
    produtoImgDeletar3.src = "./imagens/apagar.png"

    produtoLi3.appendChild(produtoImg3)
    produtoDescricao3.appendChild(produtoH23)
    produtoDescricao3.appendChild(produtoPreco3)
    produtoDescricao3.appendChild(produtoPrecoTotal3)

    produtoLi3.appendChild(produtoDescricao3)
    produtoLi3.appendChild(produtoImgDeletar3)

    produtoDiv3.appendChild(produtoImg3)
    produtoDiv3.appendChild(produtoDescricao3)
    produtoDiv3.appendChild(produtoImgDeletar3)

    produtoLi3.appendChild(produtoDiv3)

    listaProdutos3.appendChild(produtoLi3)


})
//Adicionar o Bolo de Frutas
document.querySelector("#adicionar-carrinho4").addEventListener("click", function() {
    console.log("adicionar4...")
    let titulo04 = document.querySelector("#produto4 #titulo4").textContent
    let preco04 = document.querySelector("#produto4 #preco4").textContent
    let quantidade04 = document.querySelector("#produto4 #quantidade4").textContent
    let total04 = Number(preco04.replace("R$", "")) * Number(quantidade04)
    console.log(titulo04, preco04, quantidade04, total04)


    let listaProdutos4 = document.querySelector("#carrinho ul")

    let produtoLi4 = document.createElement("li")

    let produtoDiv4 = document.createElement("div")
    produtoDiv4.classList.add("produto")

    let produtoImg4 = document.createElement("img")
    produtoImg4.classList.add("img-bolo")
    produtoImg4.src= "./imagens/bolo4.jpeg"

    let produtoDescricao4 = document.createElement("div")
    produtoDiv4.classList.add("produto-descricao")

    let produtoH24 = document.createElement("h2")
    produtoH24.textContent = titulo04

    let produtoPreco4 = document.createElement("span")
    produtoPreco4.classList.add("produto-preco")
    produtoPreco4.textContent = preco04 + " x " + quantidade04

    let produtoPrecoTotal4 = document.createElement("span")
    produtoPrecoTotal4.classList.add("produto-preco-total")
    produtoPrecoTotal4.textContent = "R$" + total04.toFixed(2)

    let produtoImgDeletar4 = document.createElement("img")
    produtoImgDeletar4.src = "./imagens/apagar.png"

    produtoLi4.appendChild(produtoImg4)
    produtoDescricao4.appendChild(produtoH24)
    produtoDescricao4.appendChild(produtoPreco4)
    produtoDescricao4.appendChild(produtoPrecoTotal4)

    produtoLi4.appendChild(produtoDescricao4)
    produtoLi4.appendChild(produtoImgDeletar4)

    produtoDiv4.appendChild(produtoImg4)
    produtoDiv4.appendChild(produtoDescricao4)
    produtoDiv4.appendChild(produtoImgDeletar4)

    produtoLi4.appendChild(produtoDiv4)

    listaProdutos4.appendChild(produtoLi4)


})




