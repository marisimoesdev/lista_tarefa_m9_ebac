$(document).ready(function(){/*selecionando o documento todo. O “.ready” quer dizer que quando o o elemento selecionado estiver PRONTO (já carregou o meu javascript e já
    carregou o jQuery, ele deve executar as o que está dentro das {}, ENTÃO TUDO O QUE DEPENDE DO JQUERY VOCÊ COLOCA DENTRO DESSAS
    CHAVES*/

    $('form').on('submit', function(e){/*selecionando o formulário. O “on” é um função de evento, que permite colocar mais de 1 evento,
    nesse caso o evento é submit*/
        e.preventDefault();/*quando o formulário for submetido a pág não será recarregada*/

        const inputTarefa = $('#nome-tarefa').val() /*alocando o valor do input que recebe o nome da tarefa em uma constante*/
        /*“val()” é uma função que pega o valor, nesse caso ele irá pegar o valor do input que recebe o nome da tarefa*/

        const adicaoTarefa = $('<ul></ul>'); /*constante que irá alocar a tag ul, a criação dessa constante é necessária para a adição
        das novas linhas*/

        $(
            `<div class="itens"> 
                <div class="itens-feito">
                    <li>${inputTarefa}</li>
                    <img class="primeira-img" src="./imagens_m9_tarefa/check.png" alt="sinal check" />
                </div>
                <div class="imagens">
                    <img class="segunda-img" src="./imagens_m9_tarefa/lixeira.png" alt="uma lixeira"/>
                </div>
            </div>`).appendTo(adicaoTarefa); /*nessa parte de cima você está aditando tudo o que será colocando dentro da tag ul*/
            /*através da função “appendTo(parâmetro)” você coloca tudo o que você criou dentro da tag que está dentro do parâmetro
            dessa função*/
        $(adicaoTarefa).appendTo('.lista'); /*nessa parte você está mostrando em qual parte a const “adicaoTarefa” irá entrar no
        layout do html, nesse caso “.lista” é o elemento pai da tag ul, ou seja, esse elemento irá receber a tag ul, mas também
        tudo o que foi criado*/

        // }
        $('#nome-tarefa').val('');
    })

    $('.lista').on('click', 'li', function(){/*aqui o que está sendo selecionado é o elemento “.lista”, pois o mesmo é o elemento pai
    das tags que são modifcadas/criadas no evento acima*/
    
    /*o “on” é uma função de evento, nesse caso o evento é o “click” na tag “li”*/
        
        $(this).toggleClass('feito'); /*o “$(this)” é um tipo de seletor que faz referência ao objeto que está chamando a função no 
        momento, nesse caso o objeto é o “li”. O fato de eu ter usado o “this” ao invés da tag “li”, foi pelo fato que se eu colocasse
        a tag “li” todos os elemetos “li” irião mudar, ou seja, se tivesse mais de uma tarefa na lista de tarefas, e o usuário clicasse 
        somente em um “li” todas irião mudar ao mesmo tempo, ao invés de mudar somente a tarefa que o usuário clicou, agora colocando o 
        “this” isso não acontece, já que ele se refere a apenas um objeto*/
        
        /*“toggleClass(parâmetro)” é uma função do jquery que coloca e tira a classe criada no css, ou seja, se o usuário clicar na 
        tarefa a classe criada no css será colocada, se usuário clicar de novo em cima da tarefa, a clsse do css, será tirada. Nesse 
        caso a classe é o “feito”*/
        
        /*o que está acontecendo nesse cenário é que quando o usuário clicar no objeto “li” será inserida ou tirada a classe do css*/
        
        $(this).parents('.itens').toggleClass('fundo');/*usei o “this” pelo mesmo motivo do de cima, todos os “li” da lista de tarefas
        irião sofre a mudança, com o “this” somente a tarefa que o usuário clicou irá mudar*/
        
        /*“parents(parâmetro)” é uma função que verifica todos os níveis acima da árvore do objeto. Nesse caso ele está verificando todos
        os níveis acima da árvore do objeto “li”, já que o mesmo é o objeto que está chamando a função. A função “parents(parâmetro)”
        recebe um parâmetro, que nesse caso é a div “.itens” que está a dois níveis acima do li*/
        
        /*Também existe a função “parent(parâmetro)” em o “s” ele busca o pai direto do objeto, ou seja, ele busca somente um nível acima
        do objeto*/
        
        /*o que está acontecendo nesse cenário é que quando o usuário clicar no objeto “li” será feita uma busca em todos os níveis 
        acima da árvore do “li”, para achar o elemento “.itens”, e será inserida ou tirada a classe css */
        
        $(this).next(/*.primeira-img*/).toggleClass('imgFeito');/*usei o “this” pelo mesmo motivo do de cima, todos os “li” da lista 
        de tarefas irião sofre a mudança, com o “this” somente a tarefa que o usuário clicou irá mudar*/
        
        /*a função “next()” é usada para retornar o próximo irmão do elemento selecionado. Irmãos são aqueles que têm o mesmo elemento 
        pai na árvore, nesse caso ele irá chamar a tag “img” da classe “.primeira-img” que a imagem do check, pois ela é o irmão 
        mais próximo*/
        
        /*também existe a função “nextAll()” que é usado para retornar todos os próximos elementos irmãos do elemento selecionado.*/
        
        /*o que está acontecendo nesse cenário é que quando o usuário clicar no objeto “li” será inserida ou tirada a classe do css no
        elemento irmão mais próximo da tag “tag” que nesse caso é a tag “img” da classe “.primeira-img” que a imagem do check*/
    })

    $('.lista').on('click', '.segunda-img', function(){/*aqui o que está sendo selecionado é o elemento “.lista”, pois o mesmo é o 
    elemento pai das tags que são modifcadas/criadas no evento acima*/
    
    /*o “on” é uma função de evento, nesse caso o evento é o “click” na classe “.segunda-img” que a imagem da lixeira*/
        
        $(this).parents('.itens').remove();/*o “$(this)” é um tipo de seletor que faz referência ao objeto que está chamando a função no 
        momento, nesse caso o objeto é  a classe “.segunda-img”. O fato de eu ter usado o “this” ao invés da classe “.segunda-img”, 
        foi pelo fato que se eu colocasse a classe “.segunda-img” todos os elemetos da classe “.segunda-img” irião apagar, ou seja, 
        se tivesse mais de uma tarefa na lista de tarefas, e o usuário clicasse somente em uma lixeira todas irião apagar ao mesmo 
        tempo, ao invés de apagar somente a tarefa que o usuário clicou, agora colocando o “this” isso não acontece, já que ele se 
        refere a apenas um objeto*/

        /*“parents(parâmetro)” é uma função que verifica todos os níveis acima da árvore do objeto. Nesse caso ele está verificando 
        todos os níveis acima da árvore do objeto “.segunda-img”, já que o mesmo é o objeto que está chamando a função. A função 
        “parents(parâmetro)” recebe um parâmetro, que nesse caso é a div “.itens” que está a mais de 1 nível acima da classe 
        “.segunda-img”*/

        /*Também existe a função “parent(parâmetro)” em o “s” ele busca o pai direto do objeto, ou seja, ele busca somente um nível acima
        do objeto*/

        /*a função “remove()” irá remover/deletar o elemento alvo de sua chamada, que nesse caso é a div “.itens”*/

        /*o que está acontecendo nese cenário é que quando o elemento “.segunda-img” (img da lixeira) for clicado, será realizado uma
        busca em todos os níveis acima da árvore da “.segunda-img”, para achar o elemento “.itens”, e quando esse elemento for encontrado
        o mesmo será removido/deletado e tudo que estiver dentro dele também*/
    })
})
//onclick='style="text-decoration: line-through"
// style="display: block"