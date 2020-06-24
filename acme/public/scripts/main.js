const button = document.querySelector('button')
const modal = document.querySelector('.modal')
const input = document.querySelector('.newsletter input')

// console.log(button);

button.onclick = () => {
    if(input.value.length > 5 && input.value.indexOf('@') >= 0) {
        modal.classList.remove('hide')

        setTimeout(() => {
            modal.classList.add('hide')
        }, 2000);
        input.value = ''
    } else {
        alert('[ERRO] Informações Faltando!')
    }


}

