// Seleciona todos os elementos <article> dentro da <section>
const articles = document.querySelectorAll('section article');

// Array com o caminho das imagens correspondentes a cada <article>
const images = ['images/logo.png', 'images/terra.jpg', 'images/faq.jpg'];

// Itera sobre cada <article> e adiciona a imagem correspondente
articles.forEach((article, index) => {
    // Cria um elemento <img>
    const img = document.createElement('img');
    // Define o atributo src da imagem com o caminho da imagem correspondente
    img.src = images[index];
    // Adiciona a classe para estilização
    img.classList.add('article-image');
    // Insere a imagem como o primeiro filho do <article>
    article.insertBefore(img, article.firstChild);
});
