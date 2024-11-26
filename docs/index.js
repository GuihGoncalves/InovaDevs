const apiUrl = 'https://inovadevsapi.onrender.com/service/productService/readProduct.php';

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        const products = await response.json();

        const container = document.getElementById('products-container');
        container.innerHTML = '';

        products.forEach(product => {
            const productCard = `
                <div class="col">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-price">R$ ${parseFloat(product.price).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += productCard;
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }

    // Seleciona o botão
    const backToTopButton = document.getElementById('back-to-top');

    // Mostra o botão apenas após rolar para baixo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block'; // Exibe o botão
        } else {
            backToTopButton.style.display = 'none'; // Oculta o botão
        }
    });

    // Rola para o topo ao clicar no botão
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Animação suave ao rolar
    });

}

window.onload = fetchProducts;
