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
