---
title: "Sass"
date: "29/10/2022"
---

> _Sass é uma linguagem de script que é interpretada ou compilada em Cascading Style Sheets (CSS). SassScript é a linguagem em si. Sass consiste em duas sintaxes._

### **As Sintaxes SCSS ou SASS**

SCSS é uma sintaxe bem próxima do CSS, mas com recursos do SASS, como aninhamento ou especificidade (nesting).

SASS traz mais produtividade, omitindo algumas partes do código, como {} ;

> _a diferença entre SASS e SCSS é puramente sintática, ambas possuem a mesma estrutura interna. SASS possui uma sintaxe mais parecida com Python e HAML, SCSS é mais parecida com Ruby e CSS._

---

### **Instalando dependências**

`npm install -g sass`

VSCode Extation: Sass

> _Selecionando o arquivo para pré-processar e compilar_
>
> `sass --watch root/styles.css:css/styles.css`

---

### **Criando Variáveis com SASS**

`$primary-color: #FFF`

`$secundary-color: #242424`

`$container-width: 1170px`

---

### **Instruções/Métodos para importar arquivos SASS**

**@import** or **@use** => (@use é nova e mais performática)

**@mixins** => cria blocos de código reaproveitáveis. Para seu uso, devemos usar o **@include**.

**@inlcude** => faz a adição das propriedades salvas em algum mixin.

### **Ex: Adicionando 'container' mixin**

> _Criar um novo arquivo .sass utilizando as normas e boas práticas de nomenclatura de arquivos (/mixins.sass)_

**@use** atributes

**@mixin** container

`max-width: variables.$container-width`

`padding: 1.5rem 0`

`margin: 0 auto`

> _Agora esse bloco de propriedades pode ser utilizado em qualquer parte do meu código, facilitando também na manutenção, apenas fazendo a alteração do mixin 'container'_

### **Aplicando o uso do @mixin com @include**

`.header`

`display: flex`

`@include mixins.container`

> _`//@include [archive-name].[mixin-name]`_

---

### **Criando propriedades dinâmicas**

Para cria-la, utilizamos o $var;

`@mixin bg-img ($img)`

`background-image : url(/img/#{$img})`

> _`//($img) criou uma propriedade variável, que foi chamada em #{$img}`_

> Para utilizar basta fazer o **@include** na classe que deseja

`#card-1`

`@include mixins.bg-img('carros.jpg')`

`#card-2`

`@include mixins.bg-img('arquitetura.jpg')`
