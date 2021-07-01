let nome;
nome = propt ('Olá qual o seu nome?')
alet('Bem-vindo ao Mundo de Safira '+nome ) 


function trocar(){
    
    var obj=document.getElementById('body');


    if(obj.className=='fundo1')
    {
        obj.className='fundo';
    }


    else
    {
            obj.className='fundo1';
    }
}