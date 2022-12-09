---
title: "Css RoadMap"
date: "09/12/2022"
---

## CSS

> Acrônimo para **Cascading Style Sheet**;
>
> Código para criar estilos no HTML;
>
> HTML é a estrutura, CSS é a beleza;
>
> Não é uma linguagem de programação é uma linguagem style sheet;

### Origem do arquivo CSS

Tipos de implementação de CSS no HTML

**Arquivo interno - Inline:**

_HTML_

    <h1 style="color: blue;font-family: sans-serif;">Título do texto<h1>

**Arquivo interno tag** `<style>`:

_HTML_

    <style>
    	h1{
    	color: blue
    	font-family: sans-serif;
    	}
    </style>

**Arquivo externo style.css:** `tag <link>`_(Recomendado)_

_HTML_

    <link rel="stylesheet" href="style.css">

_CSS_

    h1{
    color: blue
    font-family: sans-serif;
    }

**Arquivo externo style.css:**

_(Não muito utilizado por perda de performance na pesquisa)_

Convenção sempre no início do arquivo CSS utilizar todos os @import

_CSS_

    //Utilizando @import para fontes disponíveis no google fonts API;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap')

    h1{
    	font-family: 'Inter', sans-serif;
    }

Nos exemplos acima, todos os códigos têm o mesmo intuito, trocar a fonte e cor do texto do elemento `h1`, se diferencia unicamente na maneira de implementação, sendo recomendada a terceira, de maneira a usar um arquivo externo para seleção do elemento e estilização através de declarações.

### Ordem de importância de estilo

Como o nome diz, _Cascading Style Sheet (CSS)_ a leitura do código pelo interpretador é feita de cima para baixo, em _'cascata'_, sendo assim, propriedades repetidas no elemento, escritas na parte inferior será a última interpretada e o que ficará disponível para visualização.

_ex:_

    h1{
    	color: red;
    	color: blue;
    }

O elemento `h1` selecionado para estilização se apresentará na cor azul, pois ela sobrepõe a cor vermelha interpretada anteriormente.

**Ordem de importância origem do estilo**

Existe também uma ordem de importância de sobreposição de propriedades repetidas em diferentes origens do arquivo CSS, sendo ela em ordem de importância:

**Arquivo interno - inline**

    <h1 style="color: red">Título</h1>

**Arquivo interno tag** `<style>`

    <style>
    	h1 {
    		color: blue;
    	}
     </style>

**Arquivo externo style.css:** `<link>`

    h1{
    	color: pink;
    }

Nesse caso mesmo utilizando as três maneiras de declarações no mesmo elemento, o texto se mantém vermelho **_(color: red)_**, pois a declaração com maior _prioridade/importância_ é _inline_, utilizando o atributo _style_ dentro da _tag_ desejada.

### Comentários em CSS

Comentários CSS começam com `/*` e terminam com `*/`, tudo entre esse bloco, será comentado e não será lido pelo interpretador do navegador. Isso faz do comentário uma ótima opção para desabilitar certas partes do código para teste.

Não irá afetar o seu código se implementado corretamente, não podemos esquecer de fechar o bloco de comentário;
Ajuda a lembrar blocos de códigos e suas devidas funções;
Deixa dicas de leitura do código para outros desenvolvedores;

### Anatomia CSS

**Selector**:

Seletores CSS especifica a qual elemento do HTML utilizaremos as propriedades de estilização.

No exemplo abaixo observamos que o _Selector_ é o **h1**, destacado entre asteriscos.

    **h1**{
    	color: blue;
    	font-size: 60px;
    	background: gray;
    }

**Properties**

Propriedades tem suas devidas características e funções no código CSS. Como alteração de cor, tamanho, cor do background entre diversas outras, quanto maior seu dicionário de propriedades CSS mais facilmente atinge o resultado de interface desejado.

_Properties_ estão destacadas entre asteriscos no exemplo abaixo.

    h1{
    	**color**: blue;
    	**font-size**: 60px;
    	**background**: gray;
    }

**Property Value**

Como o nome descreve, são os valores de propriedades, sendo assim, cada propriedade tem seu devido tipo de valor, por exemplo a propriedade **color**, não irá receber o valor de propriedade 60px, e sim o seu devido tipo de valor, como **white** ou **#ffffff** em hexadecimal.

_Property Value_ está destacado entre asteriscos no exemplo abaixo.

    h1{
    	color: **blue**;
    	font-size: **60px**;
    	background: **gray**;
    }

**Declaration**

Uma declaração são todas as propriedades e valores de propriedades que pertencem a um elemento selecionado, sendo assim, e todo o bloco de código especificado para um elemento.

_Declaration_ está destacado entre asteriscos no exemplo abaixo.

    **h1{
    	color: blue;
    	font-size: 60px;
    	background: gray;
    }**

Todo navegador tem seu CSS default/padrão para HTML, sendo de posicionamento, tamanho de fonte, intensidade de fonte, cor da fonte, tamanho e espaçamento de elementos genéricos etc...

![CSS padrão do navegador](https://i.pinimg.com/originals/e8/48/0d/e8480d2dddaba1990cd5eed7b015e5f7.png)

### Selectors

**Global selector** `*`

O seletor global tem como utilidade selecionar todos os elementos do HTML, normalmente utilizado para Reset CSS, assim alterando algumas propriedades default/padrão do CSS, visto na imagem acima.

**Element/Type selector** `h1,h2,p,div`

Seletores de elementos utilizam a tag do elemento HTML para fazer a seleção e estilização do mesmo. Não muito recomendado utilizá-lo, pois normalmente dentro do HTML teremos elementos repetidos, assim causando erro ou conflito entre os dois elementos.

**ID Selector** `#box, #container`

Seletores ID utiliza o atributo ID no elemento HTML desejado, é uma boa prática utilizar apenas um ID para cada elemento selecionado, sendo assim, não estilizando um elemento por declaração CSS.

**Class Selector** `.red, .inputName`

Seletores de classe utiliza o atributo `class` como parâmetro de seleção, nele podemos utilizar em diversos elementos ao mesmo tempo, com a mesma classe e declarações CSS. Assim, é possível reutilizar declarações CSS, diminuído linhas de código, melhorando legibilidade e performance.

### Especificidade

Cada tipo de seletor, possui um valor a ser considerado e calculado.

| Valor | Tipo de seletor       |
| ----- | --------------------- |
| 0     | Global selector \*    |
| 1     | Element type selector |
| 10    | Class Selector        |
| 100   | ID selector           |
| 1000  | Inline                |

O maior valor de seletor terá maior importância na interpretação da declaração.

_ex:_

_HTML_

    <h1 class="textTitle" id="idTextTitle">Título do texto</h1>

_CSS_

    *{
    	color: white;
    } //Até aqui o h1 se apresentará na cor branca (white),
    	mesmo seu valor sendo 0

    h1{
    	color: black;
    } //O valor de Element Type Selector é 1, sendo assim, irá sobrepor a cor branca(white)

    .textTitle{
    	color: blue;
    } //Class Selector tem o valor de 10, então também irá sobrepor a cor preta(black)
    anteriormente apresentada.

    #idTextTitle{
    	color: red
    } //ID Selector possui o valor de 100, sobrescrevendo as cores anteriores,
    apresentando o title na cor vermelha(red).

    <h1 class="textTitle" id="idTextTitle" style="color: orange">Título do texto</h1>
    //Como o valor de importância do CSS inline é 1000, irá sobrescrever todas as
    declarações feitas no CSS. Assim, apresentando a cor laranja(orange) no título,
    mesmo com alterações no arquivo externo .css.

**Somando especificidade**

Quando utilizamos mais de um seletor, os valores são somados, fazendo assim, algumas mudanças no valor de importância das declarações.

_ex:_

_HTML_

    <container id="idContainer">
    	<div class="textBlock">
    		<h1>Título do texto</h1>
    	</div>
    </container>

_CSS_
#idContainer .textBlock h1{
color: pink;
} //Somando o valor de especificidade dessa declaração temos o resultado de
100(id) + 10(class) + 1(element) = 111
h1{
color: green;
} Valor de especificidade = 1

Nesse caso, observamos que mesmo a leitura e interpretação em cascata (de cima para baixo), o valor de especificidade da primeira declaração se sobrepõe ao da segunda declaração, sendo assim, o texto terá a cor rosa.

**!important**

!important é uma regra que quebra o fluxo natural de cascata e de valores de especificidades, quando colocado em uma declaração, independentemente do valor de outras declarações ou seu tipo de seletor, ela irá sobrepor todas as outras.

> Evite seu uso desnecessariamente;
>
> Não é considerado uma boa prática;

_ex:_

_HTML_

    <h1 style="color: blue">Título do Texto</h1>

_CSS_

    h1 !important{
    	color: red;
    }

Observamos que a cor do `<h1>` permanecerá vermelha(red), mesmo com o valor de especificidade do seletor de elementos, menor, em comparação com o style inline.

**At Rules**

Regras relacionadas ao comportamento do CSS, como o nome diz _"At Rules"_ (Regras de @) sempre irá começar com o sinal de @ seguido do identificador e valor.

**@import**

_Irá incluir um CSS externo_

**@media**

_Regras condicionais para dispositivos diferentes_

**@font-face**

_Faz a inclusão de fontes externas_

**@keyframes**

_Implementação de animações no CSS_

### Shorthand

Usualmente shorthand é utilizado para junção de propriedades, assim resumindo e diminuindo linhas de código, facilitando também na legibilidade do mesmo.

ex:

_HTML_

<div class="textBlock"></div>

_CSS_
.textBlock{
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
}

    ou

    background: #000 url(images/bg.gif) no-repeat left top;

As duas maneiras de declaração de propriedades CSS estão com a mesma funcionalidade, mas a segunda maneira utiliza o método _Shorthand_, assim encurtando

### Box Model

CSS utiliza o **Modelo de Caixas** para sua formatação e estilização, sendo assim, todo elemento tem seu conteúdo, seus limites _(altura e largura)_, espaçamento externo _( margin )_ e espaçamento interno _( padding )._

### Funções

Funções em CSS recebem argumentos dando valores a cada tipo de função, sua formatação é nome seguido de parênteses e seus respectivos tipos de valores dentro. Com funções em CSS podemos incluir variáveis e operações lógicas, facilitando

1. `attr()` --> A função `attr()` do CSS é utilizada para se obter o valor de um determinado atributo do elemento selecionado e usá-lo na folha de estilo.

ex:

     a {
      content: " [" attr(href) "]";
       }

2. `calc()` --> A função `calc()` CSS permite você executar cálculos quando especificar os valores de propriedades no CSS.

_ex:_

     div {
    	 width: calc(100% - 20px);
       }

3. `hsl()` --> A função `hsl()` define cores usando o modelo Hue-saturation-lightness.

_ex:_

      div {
    	  background-color: hsl(120,60%,70%);
       }

4. `hsla()` --> A função `hsla()` define cores usando o modelo Hue-saturation-lightness-alpha (canal alpha define a opacidade com numero entre 0.0 (totalmente transparente) e 1.0 (totalmente visível).

_ex:_

      div {
    	  background-color: hsla(120,60%,70%,0.5);
       }

5. `linear-gradient()` --> linear-gradient() tem como função criar uma transição progressiva entre duas ou mais cores em formato linear.

_ex:_

      div {
        background-image: linear-gradient(to top right, red,orange,yellow,green,#000000);
       }

6. `radial-gradient()` --> Assim como o linear-gradient() o radial-gradient() cria uma transição progressiva entre duas ou mais cores, mas agora em formato radial.

_ex:_

      div {
        background-image: radial-gradient(to top right, red,orange,yellow,green,#000000);
       }

7. `rgb()` --> A função rgb() é utilizada para expressar cores a elementos através dos canais de cores RGB(Red, Green, Blue).

_ex:_

       div {
    	   background-color: rgb(128,128,128);
       }

8. `rgba()` --> Adiciona o canal alpha ao rgb(), conseguindo assim expressar também transparência RGBA(Red, Green, Blue, Alpha).

_ex:_

      div {
            background-color: rgba(10%,10%,20%,0.7);
       }

9. `url()` --> Estabelece um link com arquivos externos como fontes, imagens e outros tipos de arquivos necessários.

_ex:_

    div {
        background-image: url(https://www.ranoya.com/Assets/Logotipos/UFPESmall.png);
        width: 200px;
        height: 200px;
     }

10. `var()` --> Acessa uma variável contendo um valor, antes determinado.

_ex:_
:root {
--minhavar1: #000000;
}//declarando a variavel para uso posterior.

    .blocoA {
      background-color: var(--minhavar1);
      color: blue;
     }//utilizando a variavle no background.

    .blocoB {
      background-color: var(--mimnhavar2,white);
      color: blue;
     }//aqui observamos que podemos adicional valor da variável dentro da propriedade.

    .blocoB {
      background-color: var(--mimnhavar1,white);
      color: blue;
     }//caso tente dar valor a uma variavel com um valor ja existente,
      o novo valor não sera adicionado.

### Vendo Prefixes

Permite que browsers adicione `features` a fim de colocar em uso alguma novidade que temos no CSS. Os desenvolvedores devem esperar para incluir a propriedade Vendo Prefixes até que o comportamento do navegador seja padronizado.

_ex:_

    p {
    	-webkit-background-clip: text; 	//Chrome, Safari, iOS e Android
    	-moz-background-clip: text; 	//Mozilla (Firefox)
    	-ms-background-clip: text ; 	//Internet Explorer
    	-o-background-clip: text ; 		//Opera
    }

Este artigo foi escrito através do conteúdo da **Rocketseat** e a documentação CSS disponível na **MDN**.
