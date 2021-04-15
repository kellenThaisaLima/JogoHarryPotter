function harryFase2() 
{
        var atravessaParede = prompt("Você confia na familia Weasley e atravessa a parede? 1:Sim 2: Não");

        if (atravessaParede == 1)
        {
            document.write (`
            <h1> Bem vindo a plataforma 9 3/4 Harry.
            Aproveite o Expresso Hogwarts e tenha ótima viagem. 
            </h1>
        `);
        }

        else if (atravessaParede == 2){
        
            document.write (`
            <h1> Ahh${atravessaParede}. Você perdeu a viagem.</h1>
            `);
        }
        else {
            alert('Escolha errada. Tente novamente!');
            harryFase2();
        }          
}   
    harryFase2()
