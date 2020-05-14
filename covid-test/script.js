/*function condicoes() {
    var cond = document.body.querySelector('input#condSaude')
    var inputBox = document.querySelector('section#input-box')
    
    cond.checked = inputBox.createElement('adicao')
    cond.setAttribute('id', 'adicao')
    cond.appendChild(adicao) 
}*/

function carregar() {
    var data = new Date()
    var hora = data.getHours()
    
    var img = document.querySelector('body')
    var content = img.querySelector('div#content')

    document.body.style.transition = '7000ms'
    
    if (hora >= 6 && hora <= 12) {
         //MANHÃ
         img.style.background = 'url(morning-sky.jpg)'
         img.style.backgroundSize = 'cover'

         transition = '7000ms'
         content.style.background = 'black'
         content.style.color = 'white'
         content.style.opacity = '.8'


    }
    else if(hora > 12 && hora <= 18) {
        //TARDE
        img.style.background = 'url(afternoon-sky.jpg)'
        img.style.backgroundSize = 'cover'

        transition = '7000ms'
        content.style.background = ''
        content.style.color = ''
        content.style.opacity = '.8'


    }
    else if(hora > 18 && hora < 6) {
        //NOITE
        img.style.background = 'url(night-sky.jpg)'
        img.style.backgroundSize = 'cover'
    }
    
}


var res = document.querySelector('div#res')

function verify() {

    var condSaude = document.querySelector('input#condSaude')
    var fgen = document.getElementsByName('gen')
    var nome = document.querySelector('input#nome').value
    var idade = document.querySelector('input#idade').value

    if(nome == '0' || idade == 0 ){
        alert('[ERRO] Preencha todos os campos corretamente!')
    }
    
    else{
        var genero = ''
        var risco = ''
        var percent;

        //MASCULINO
        if(fgen[0].checked){
            genero = 'masculino'


            //CHECAR AS INFORMAÇÕES
            if (Number(idade) >= 0 && Number(idade) < 25) {

                //Idade entre 0 e 25
                if (condSaude.checked) {
                    risco = 'Baixo'
                    percent = 10;
                    
                }else{
                    risco = 'Baixo'
                    percent = 5;
                }
               
                
            }
            else if(Number(idade) < 35) {

                //Idade entre 25 e 35
                if(condSaude.checked) {

                    risco = 'Mediano'
                    percent = 30;
                }else {
                    risco = 'Mediano'
                    percent = 15;
                }

            }
            else if(Number(idade) < 50) {

                //Idade entre 35 e 50
                if (condSaude.checked) {
                    risco = 'Alto'
                    percent = 45;
                }else {
                    risco = 'Alto'
                    percent = 30;
                }
                    

            }
            else{

                //Idade maior que 50
                if (condSaude.checked) {
                    risco = 'Muito Alto'
                    percent = 75;
                }else {
                    risco = 'Muito Alto'
                    percent = 45;
                }
                

            }
            
        }
        
        //FEMININO
        if (fgen[1].checked) {
            genero = 'feminino'

            
            //CHECAR AS INFORMAÇÕES
            if (Number(idade) >= 0 && Number(idade) < 25){

                //Idade entre 0 e 25
                if (condSaude.checked) {
                    risco = 'Muito Baixo'
                    percent = 5
                }
                    risco = 'Muito Baixo'
                    percent = 5


            }
            else if (Number(idade) < 35) {

                //Idade entre 25 e 35
                if (condSaude.checked) {
                    risco = 'Baixo' 
                    percent = 10
                }else {
                    risco = 'Baixo' 
                    percent = 5
                }
            }
            else if (Number(idade) < 50) {

                //Idade entre 35 e 50
                if (condSaude.checked) {
                    risco = 'Mediano'
                    percent = 15
                }else {
                    risco = 'Mediano'
                    percent = 10
                }
            }
            else if(Number(idade) < 70) {

                //Idade entre 50 e 70
                if (condSaude.checked) {
                    risco = 'Alto'
                    percent = 25
                }else {
                    risco = 'Alto'
                    percent = 20
                }
            }
            else{

                //Idade maior que 70
                if (condSaude.checked) {
                    risco = 'Muito alto'
                    percent = 40
                }else{
                    risco = 'Muito alto'
                    percent = 35
                }
            }
            
            
        }

        



        res.innerHTML = `<strong>${nome}</strong>, você tem <strong>${idade}</strong> anos e é do gênero <strong>${genero}</strong>.<br>`
        res.innerHTML += `O seu risco é <strong>${risco}</strong> e a porcentagem de fatalidade é de <strong>${percent}%</strong>.<br>`
        
        //res.innerHTML += `Obs: fatalidade <strong>não</strong> significa morte.`
    }
        

    
}