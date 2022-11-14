---
title: "HTML5 - Conceitos"
date: "09/11/2022"
---

## **HyperText Markup Language**

> _Tem semântica, sintaxe, mas não é linguagem de programação e sim de marcação_

**_hypertexto_** --> textos com direcionamento para outros conteúdos.

#### **Comentários em HTML**

`<!--Todo conteúdo aqui escrito, não sera lido pelo navegador-->`

---

#### **Anatomia das Tags**

**_Elemento_**

> `<h1> --> abertura da tag`
>
> `Texto Exemplo --> Conteúdo`
>
> `</h1> --> fechamento da tag`

**_Elementos Vazios_** --> Elementos que não tem tag de fechamento

`<img src="" alt="">`

`<input type="">`

---

#### **Atributos**

`src=""`

`alt=""`

`type=""`

**_Atributos booleanos:_**

`disabled` --> tem valor por si só, sem necessidade atribuição de conteúdo

---

#### **Aspas**

1.  **_Omissão_**

`<a href=http://google.com target=_blank></a>`

> _Pode ocorrer erros na leitura dos atributos, pela falta de marcação do início e fechamento do atributo href._

2.  **_Simples_**

`<a href='http://google.com' title='it's not good'></a>`

> _Haverá um erro de sintaxe referente a abertura e fechamento do atributo title, comprometido pelo uso de aspas simples no texto._

3.  **_Duplas_**

`<a href="http://google.com" title="it's good"></a>`

> _É uma boa prática o uso das aspas duplas para evitar erros semelhantes aos anteriores._

---

#### **Atributos Globais**

1.  **_class_**

    `<div class="carrinho">Conteúdo</div>`

    _Normalmente utilizada para classificar conteúdos específicos, facilitando sua busca em arquivos externos como CSS ou JS._

2.  **contenteditable**

    `<div contenteditable>Conteúdo</div>`

    _Um atributo booleano que fornece a capacidade de alteração do conteúdo._

3.  **data-\***

    `<div data-exemplo-qualquer="">Conteúdo</div>`

    _O atributo data- pode conter qualquer nome e também é utilizado para facilitar sua busca em arquivos externos CSS ou JS._

4.  **hidden**

    `<div hidden>Conteúdo</div>`

    _Tem como função esconder conteúdo da página, um arquivo com atributo hidden, não será apresentado em tela._

5.  **id**

    `<div id="id-unic">Conteúdo</div>`

    _Este atributo é o mais utilizado para distinguir conteúdo da página, facilitando também sua busca em arquivos externos, diferente do class que pode se repetir em conteúdos similares, cada conteúdo deve ter um id único._

6.  **style**

    `<div style="color:red">Conteúdo</div>`

    _Não muito utilizado por não ser recomendado a estilização do conteúdo no HTML, e sim em arquivos externos CSS_

7.  **tabaindex**

    `<div tabindex="1">Conteúdo</div>`

    `<div tabindex="2">Conteúdo</div>`

    _Facilita a navegação do site pelo uso da tecla TAB, assim guiando a navegação para pessoas com dificuldades especiais._ **MUITO IMPORTANTE PARA ACESSIBILIDADE**

8.  **title**

    `<div title="Text title">Conteúdo</div>`

    _Não existe alteração visual do conteúdo, mas quando descansar o mouse em cima do elemento, será visualizado "Text title"._

---

**Aninhamento de tag's /Hierarquia**

> No exemplo a tag `<p>` é pai da tag `<em>`, então o `<em>` deve ser fechado antes da tag `<p>`.

    <p>Lorem <em> qualquer Ipsum</em></p>

---

**Fluxo de leitura do HTML**

> Cada tag é lida com a ordem de invocação no código, um abaixo do outro.

---

#### **Posicionamento default do HTML**

Alguns exemplos como:

algumas tag's tem seu posicionamento default, sempre que invocadas se comportam de maneira diferentes de outros elementos.

    <p> Sempre que invocada não haverá quebra de linha</p>
    <br> --> break row, elemento para quebra de linhas no HTML.

_Boa prática em relação a acessibilidade na web o uso moderado desse elemento._

---

#### **Elementos Genéricos**

`<div>` Esse elemento traz uma formatação por default ao HTML. Sua utilização tem como objetivo de criar um bloco de elementos que devem ser mantidos juntos.

`<span>` Também é um tipo de elemento genérico, mas tem como utilidade, separar linhas diferentes de texto, facilitando muito na estilização com CSS.

---

#### **Hyperlinks - Elementos âncora**

**Atributos:**

1. **globais** (`id, class, target`);

2. **href**

- **_url_**;

  `<a href="www.google.com"></a>`

  _Esse tipo de referência nos direciona ao link url descrito_

- **_fragmento_**;

  `<a href="#sobremim"></a>`

  _Esse tipo de referência nos leva a outra parte do site acessado no momento_

  www.meusite.com/#sobremim

- **_email_**;

  `<a href="mailto:exemplo@exemplo.com"></a>`

  _Ira nos direcionar ao e-mail descrito no código utilizando o e-mail padrão do sistema operacional_

- **_telefone_**;

  `<a href="tel:+551699993333"></a>`

  _Ira nos direcionar a uma chamada ao número descrito no código utilizando o navegador_

3. **download**;

4. **target**

- **_\_self_** (padrão/default);

  `<a href="www.google.com"></a>`

  _ou_

  `<a href="www.google.com" target="_self"></a>`

  _Esta propriedade é utilizada como default do navegador, irá abrir o link url na tab atual utilizada pelo usuário._

- **_\_blank_**;

  `<a href="www.google.com" target="_blank"></a>`

  _Utilizando essa propriedade do atributo target irá abrir o link url descrito em uma nova tab, mantendo a página atual aberta._

---

#### **Aninhando hyperlinks**

    <a href="https://google.com" title="Ir para o Google">
    	 <h1>Qualquer conteúdo</h1>
    	 <p>É possível ser um hyperlink</p>
    	 <img>
    </a>

---

#### **Navegação entre diretórios**

    index.html
    main.html
    nova pasta
    	conteudo.html

    apontando para o mesmo diretório:
    main.html --> <a href="index.html"></a>

    apontado para um diretório filho:
    index.html --> <a href="nova-pasta/conteudo.html"></a>

    apotando/voltando para o diretório pai:
    conteudo.html --> <a href="../index.html"></a>

---

#### **URLs absolutas e relativas**

1. Absoluto

- Inclui o protocolo _http_ e o nome do domínio;

`<a href="https://google.com">Estamos dizendo para direcionar ao site referenciado</a>`

- Sempre apontará para o mesmo local, pois é absoluto.

2. Relativos

- Relativo à página aberta no momento;

  `<a href="google.com">Aqui estamos dizemos para procurar na página atual um diretório chamado "google.com"</a>`

- Apontará para diretórios em lugares diferentes.
