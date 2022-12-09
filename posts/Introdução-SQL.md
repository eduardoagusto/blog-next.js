---
title: "Introdução SQL"
date: "19/11/2022"
---

### Oque é um dado?

_Um dado é um conhecimento que temos sobre alguma coisa.
Com esse conhecimento, chegamos a uma conclusão. E com essa conclusão, tomamos alguma ação._

Dados estão em todos os lugares,quando curtimos uma foto no Instagram, essa curtida se transforma em um dado.
Com esse dado, o Instagram tem uma informação valiosa sobre você, podendo chegar à algumas conclusões sobre suas preferências e gostos. Essa conclusão, gera a ação do Instagram de mostrar mais conteúdos semelhantes, para que assim, passe mais tempo na rede social.

Todos esses dados armazenados Perfil, Fotos, Mensagens, Vídeos, etc... Ajuda ao Instagram entender quais são suas preferencias, o que deve ou não te mostrar, para assim otimizando ao máximo o engajamento.

No geral, todas as empresas possuem um grande número de dados, que precisam além de serem armazenados, precisam ser organizados da melhor maneira para consumi-los ou pesquisá-los posteriormente.

Durante o processo de armazenamento e organização dos danos, utilizamos um **SGBD** _(Sistema Gerenciador de Banco de Dados)_, onde conseguimos utilizar a linguagem **SQL** _(Structured Query Language)_ para manipular, organizar e pesquisar dados. O papel do SGBD é fornecer uma interface entre o administrador do banco de dados e o banco de dados, utilizando a linguagem SQL para fazer as alterações solicitadas.

1. A linguagem **SQL** significa _STRUCTURED QUERY LANGUAGE_ - **Linguagem de Consulta Estruturada**;
2. Algumas características do **SQL** são baseadas em álgebra relacional;
3. Desenvolvido pela **IBM** no início dos anos **70**;
4. Permite ao administrador do sistema/Banco de dados uma facilitação/agilidade no momento em que é feita a manipulação/mineração de dados inseridos em um **Banco de Dados Relacionais**.

### **Subconjuntos SQL**

**_DDL_** --> Data Definition Language

**_DQL_**---> Data Query Language

**_DML_** --> Data Manipulation Language

---

### **Tipos de Dados**

#### **Tipos Numéricos**

**_int/integer_** e **_smallint_** - tipos que suportam dados numéricos inteiros;

    | Nome        | Tamanho Armazenamento| Faixa                     |
    | ----------- | -------------------- | --------------------------|
    | smallint    | 2 bytes              | -32768 to 32767           |
    | int/integer | 4 bytes              | -2147483648 to +2147483647|

**_float/real_** e **_double_** - tipos que suportam dados numéricos reais;

    | Nome       | Tamanho Armazenamento | Faixa             |
    | ---------- | --------------------- | ----------------- |
    | float/real | 4 bytes               | 6 casas decimais  |
    | double     | 8 bytes               | 15 casas decimais |

**_decimal_** ou **_numeric_** - são tipos de pontos flutuantes com precisão exata;

    | Nome    | Tamanho Armazenamento | Faixa                        |
    | ------- | --------------------- | ---------------------------- |
    | decimal | variavel              | sem limite de casas decimais |
    | numeric | variavel              | sem limite de casas decimais |

---

#### **Tipos de Caracteres**

**_CHAR(n)_** - tipo de Caractere Fixo onde ficará armazenado na memória o tamanho exato declarado.

**_VARCHAR(n)_** - é usado para guardar strings de tamanho variável e usa alocação dinámica de memória.

---

#### **Tipos Booleanos**

Tipo de dados primitivo que podem assumir dois valores:

**TRUE** (_Verdadeiro_) e **FALSE** (_Falso_)

---

#### **Tipos Temporais**

Os tipos Temporais são relativos, a Data (dia, mês e Ano) e Tempo (Hora, Minuto e Segundo).

**DATE**: Formato _AAAA-MM-DD_
**TIME**: Formato _HH:MM:SS_

---

### Comandos **DDL** - _Definição de dados_

#### Comando **CREATE TABLE**

Permite a criação de tabelas no Bando de dados. O primeiro parâmetro do comando é o nome da tabela seguido dos respectivos atributos e seus tipos, também eventuais restrições do atributo.

**ex**:

    CREATE TABLE CIDADES (Cod_Cidade VARCHAR(7) PRIMARY KEY.
     Descricao VARCHAR(40))

Foi criado uma tabela **CIDADES**, com campos de **_Cod_Cidade_** (Código da cidade) e **_Descricao_**.

---

#### Comando **DROP TABLE**

Permite a exclusão de tabelas no Bando de dados.

**ex**:

    DROP TABLE CIDADES

Apagando a tabela **CIDADES**

---

#### Comando **ALTER TABLE**

Permite a modificação de atributos das tabelas

**ex**:

    ALTER TABLE CIDADES ADD Cod_UF CHAR(2);

Adicionando o campo **_Cod_UF_** na tabela **CIDADES**

    ALTER TABLE CIDADES DROP Cod UF;

Apagando o campo/atributo **_Cod_UF_** da tabela **CIDADES**

---

### **Comandos DQL** _(Data query language)_

#### Comando **SELECT**:

O uso do comando Select permite a seleção de registros de uma ou mais tabelas.

**ex**:

    SELECT *
    FROM <tebela/elemento>

Selecionando todos os atributos/colunas de um elemento/tabela selecionada.

#### Filtro WHERE

**Filtrando números:**

Podemos aplicar qualquer filtro logico como: **=, <, >, <=, >=, <>**

    SELECT *
    FROM PRODUTOS
    WHERE preco_unit >= 1399;

Aplicamos um filtro numérico na coluna **_preco_unit_** retornando uma nova tabela, apenas com valores maior ou igual a 1399;

**Filtrando textos:**

    SELECT *
    FROM PRODUTOS
    WHERE marca_produto = 'DELL'

**Filtrando datas:**

    SELECT *
    FROM PEDIDOS
    WHERE data_venda = '2022-11-22'

Para filtragem de datas, deve se atentar ao fato de serem strings, assim tendo que usar **'aspas simples'** para a busca. Lembre-se também a formatação da data **_'YYYY-MM-DD'_**.

#### Múltiplos filtros numéricos:

Operadores **AND** e **OR**;

    SELECT *
    FROM CLIENTES
    WHERE estado_civil = 'S' AND sexo = 'F'

Retornara na tabela **CLIENTES**, apenas clientes solteiras e de sexo feminino. Atente-se ao fato de retornar apenas dados que **satisfazem as duas condições**;

    SELECT *
    FROM PRODUTOS
    WHERE marca_produto = 'DELL' OR marca_produto = 'APPLE'

Nesse caso, retorna na tabela PRODUTOS, apenas produtos DELL ou APPLE. Qualquer dado que satisfaça uma ou a outra condição, entrara nessa nova query;

---

Operadores **BETWEEN** e **NOT BETWEEN**

Estes operadores propiciam a pesquisa por uma determinada coluna e que esteja dentro de uma faixa de valores, sem a necessidade dos operadores >=, <= e AND.

    WHERE <nome da coluna> BETWEEN <valor1> AND <valor2>
    WHERE data_nascimento BETWEEN 01/01/1990 AND 31/12/2005

Retorna todos os dados entre os dos valores que foi determinado, no caso acima, todas as pessoas cadastradas que nasceram depois de 1990 e antes de 2005.

---

Operadores **LIKE** e **NOT LIKE**

    WHERE <nome da coluna> LIKE <valor>
    WHERE <nome da coluna> NOT LIKE <valor>

Retorna todos os valores que _contenha_ **(LIKE)** ou _não contenha_ **(NOT LIKE)** o valor determinado

---

### **Comandos DML** _(Data Manipulation language)_

#### Comando **INSERT**

O uso do comando **INSERT** permite a inclusão de registos em uma tabela;
Faz a inclusão de registros na tabela.

    INSERT INTO CIDADES VALUES (1200, 'Maringá', 'PR');

Quando tem certeza de que será inserido um dado a todos os atributos da tabela.

ou

    INSERT INTO CIDADES (Cod_Cidade, Descricao, Cod_uf)
    VALUES (1200, "Maringá", "PR")

Desse modo, garantimos a quais atributos iremos associar cada dado.

---

#### Comando **UPDATE**

O uso do comando **UPDATE** permite a alteração de registros em uma tabela.

**ex**:

    UPDATE CIDADES
    SET Cod_uf = "SP"
    WHERE Cod_Cidade = 1200

---

#### Comando **DELETE**

O comando **DELETE** permite a exclusão de linhas de registros em uma tabela.

**ex**:

    DELETE FROM CIDADES
    WHERE Cod_Cidade = 1200
