document.querySelector("#btn2").addEventListener("click", function(){
    console.log("adicionado")
    let nome_prod = document.querySelector("#produto #nome_prod").textContent
    let descricao = document.querySelector("#produto #descicao").textContent
    let imagem = document.querySelector("#produto #imagem").
    console.log(nome_prod, descricao, imagem)

    let listraProd = document.querySelector("#prod section")

    /* Criando Os Elementos para Adicionar a Página Inicial*/
    let produtoDivCol = document.createElement("div")
    produtoDivCol.classList.add("col")

    let produtoDivCard = document.createElement("div")
    produtoDivCard.classList.add("card")

    let produtoDivImg = document.createElement("div")
    produtoDivImg.classList.add("card-img-top")
    produtoDivImg.src = "./imagens/bolo1.jpeg"

    let produtoDivCardBody = document.createElement("div")
    produtoDivCardBody.classList.add("card-body")


    listraProd.appendChild(produtoDiv)

})
/*
<div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card">
                  <img src="./imagens/bolo1.jpeg" class="card-img-top" alt="001">
                  <div class="card-body">
                    <h5 class="card-title">Bolo Decorado</h5>
                    <p class="card-text">Fazemos bolos do sabor e decoração de sua preferência. Levamos elegância e suavidade para suas celebrações!</p>
                  </div>
*/