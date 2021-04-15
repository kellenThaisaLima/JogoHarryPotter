function inicioHogwarts() 
{
        var abrirCarta = prompt("Chegou a hora do chapéu seletor? 1: Sonserina Não 2: Ficar tranquilo");

        if (abrirCarta == 1)
        {
            document.write (`
            <h1> Melhor que seja ${abrirCarta.replace(2, "GRIFINÓRIA")}.
            </h1>
        `);
        }

        else if (abrirCarta == 2){
        
            document.write (`
            <h1> ${abrirCarta}. Não há um bruxo que não tenha ficado mal e ue foi da Soserina.</h1>
            `);
        }
        else {
            alert('Escolha errada. Tente novamente!');
            inicioHogwarts();
        }          
}   
    inicioHogwarts()
