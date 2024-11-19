const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})body {
    background-color: rgb(90,30,110);
    color: white;
    font-family: "Bai Jamjuree", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
    margin: 0;
}

button {
    background-color: rgb(120,10,50);
    color: white;
    font-family: "Bai Jamjuree", sans-serif;
}

.passo {
    display: none;
}

.passo.ativo {
    display:block;
}

main {
    text-align: center;
    max-width: 90%;
}

img {
    max-width: 90%;
}
