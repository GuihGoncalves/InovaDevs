async function enviarDados() {
    const form = document.getElementById('produtoForm');
    const nomeProd = form.nome_prod.value;
    const descricao = form.descricao.value;
    const preco = form.preco.value;
    const imagem = form.imagem.value;

    const dados = {
        name: nomeProd,
        description: descricao,
        price: preco,
        image: imagem
    };

    try {
        const response = await fetch('https://inovadevsapi.onrender.com/service/productService/createProduct.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        const resultado = await response.json();
        alert(resultado.message || 'Erro desconhecido.');
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        alert('Erro ao enviar dados para o servidor.');
    }
}
