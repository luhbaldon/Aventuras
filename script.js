const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
button.addEventListener('click', function(){
const atual = document.querySelector('.ativo');
const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

atual.classList.remove('ativo');
document.getElementById(proximoPasso).classList.add('ativo');
   })
})

// Reinicia o jogo ao clicar no botão de reinício
if (reiniciarBtn) {
    reiniciarBtn.addEventListener('click', () => {
    const atual = document.querySelector('.ativo');
    atual.classList.remove('ativo');
    document.getElementById('passo-0').classList.add('ativo');
    });
    }