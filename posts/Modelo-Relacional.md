---
title: "Modelo Relacional"
date: "25/11/2022"
---

Modelo relacional permite a representação de uma estrutura lógica do projeto com uma visão genérica, estruturada de forma clara e simples, possibilita representar dados do mundo real como objetos denominados entidades ou conjunto de entidade. Se baseia no princípio de que todos os dados estão armazenados em tabelas/entidades, utilizando como definição a teoria dos conjuntos.
Um dos métodos comuns de diagramação, que ajuda na representação visual do modelo relacional, é o Diagrama de entidade-relacionamento **(DER)**.

---

#### MER _(Modelo Entidade Relacionamento)_

Um modelo entidade relacionamento é uma maneira sistemática de descrever e definir um processo de negócio. O processo é modelado como entidades, que são ligadas umas às outras por relacionamentos que indicam as dependências entre elas.

As entidades podem ter vários atributos que as caracterizam.
Diagramas são criados para representar graficamente entidades, atributos e relacionamentos, denominados Diagrama Entidade-Relacionamento **(DER)**.

#### MODELAGEM

**Modelo Conceitual**

Modelo de dados abstrato que descreve a estrutura de um banco de dados através de um diagrama em blocos que demonstra todas as relações entre as entidades, suas especializações, seus atributos e auto-relações.

Independente de um SGBD

**_(levantamento de entidades)_**

**Modelo Lógico**

Modelo de dados que representa a estrutura dos dados de um banco de dados, as ligações entre as tabelas, as chaves primárias, os componentes de cada uma, etc.

_Depende do SGBD_

**Modelo Físico**

_Nível de implementação;_

_Ênfase na eficiência de acesso;_

Inclui a análise das características e recursos necessários para armazenamento e manipulação das estruturas de dados, sendo uma sequência de comandos SQL para criação de tabelas, atributos e relacionamentos.

_Depende do SGBD;_

---

#### DER

_DIAGRAMA DE ENTIDADE E RELACIONAMENTO - (Petter Chen)_

**Entidades**

**ENTIDADE**: Representada por um **RETANGULO**;

Entidades são a representação gráfica de um conjunto como, **PRODUTO**, **LIVROS**,
**ALUGUEL**, algo de importante para um usuário ou organização que precisa ser representado em um banco de dados.

Entidades podem ser dividias entre Concretas e Abstratas;

**_Concretas_**

São entidades do mundo real, distinguível de outro objeto;

**CARRO**;

**FUNCIONÁRIO**

**_Abstratas ou lógica_**

São entidades intangíveis;

**COMPRA**;

**VIAGEM**;

#### **Nomeando entidades:**

1. Nomeamos as entidades usando substantivos que representam de forma clara e objetiva sua função.

2. Devem começar com uma letra;

3. Usar palavra no singular;

4. Não deve ter espaço ou caracteres especiais;

5. Alguns caracteres como "$","#"e"\_" são permitidos em alguns bancos de dados;

6. Os nomes de colunas devem ser únicos dentro de uma tabela.

7. Os nomes de entidades/tabelas devem ser únicos dentro do _schema_.

#### Instância de Entidade

Cada objeto de uma entidade é denominado de Instancia de Entidade, uma entidade em si é uma descrição de estrutura e formato das ocorrências de entidade, uma instancia de entidade é uma ocorrência específica de uma entidade.

Entidade:

    |     Carro    |
    |   --------   |
    |  Fabricante  |
    |    Modelo    |
    |      Cor     |
    |     Placa    |

Instância de Entidade:

    |   Carro    |
    |  --------  |
    |    Ford    |
    |   Fiesta   |
    |    Azul    |
    |  LVS-4444  |

---

**Atributos**

**ATRIBUTO**: Representado por uma **ELIPSE**;

Atributos são características contidas nas entidades, por exemplo, uma Entidade **PRODUTO** podemos relacionar atributos como, **_codigo_**, **_descricao_**, **_fabricante_**, **_preco de custo_**
**_venda_**.

Atributos possuem nome, valor específico e tipo de dados (**Domínio**)

**_Tipos de Domínio_**

**Numéricos:** Inteiros e Reais;
**Caracteres**;
**Booleanos:** True ou False;
**Cadeias de caracteres de tamanho fixo e tamanho variável**;
**Data**;
**Hora**.

Atributos podem ser divididos em _5_ tipos:

**Atributo simples**

Contém um valor único para cada elemento da entidade. Nesse caso, pode ocorrer uma informação repetida, como entidade **CLIENTE**, ter um atributo **_nome_**, onde dois clientes podem ter o mesmo nome.

**Atributo Multivalorado**

Permite conter informações com diversos valores. Uma solução para quando precisamos atribuir vários números de telefone, ao atributo **_telefone_**, de uma única entidade **CLIENTE**.

**Atributo Composto**

Permite indicar um atributo que pode ser divido em outros. Como o atributo **ENDERECO** que podemos dividir em **_rua_**, **_cidade_**, **_estado_** e **_cep_**

**Atributo Determinante**

Define de forma única as instâncias de uma entidade. Não podem existir duas instancias com o mesmo valor nesse atributo. Garante que um dado de uma entidade não vai ser idêntica a outra. Um exemplo é **_CNPJ_** da empresa, ou **_código_de_produto_**, dentro desses atributos, não pode ocorrer dados duplicados.

Dentro do diagrama **DER** o _Atributo Determinante_ se representa com um sublinhado no nome.

**Atributo-Chave/Identificador**

Uma chave identifica uma instancia específica na classe de entidade, não contendo valores vazios (null/nulo).

As chaves podem ser **únicas** ou **não-únicas**:

**Únicas**: O valor dos dados da chave é único na entidade (**PrimaryKey**)

**Não-Unica**: Usada para agrupar instancias de classe em categorias. (**ForeignKey**)

As chaves podem ser compostas, consistindo em dois ou mais atributos combinados.

---

**Relacionamentos**

**RELACINAMENTO**: Representado por um **LOSANGO**;

As entidades podem ser conectadas entre si por meio de Relacionamentos. Trata-se de uma estrutura que indica a associação de elementos de uma ou mais entidades.

_Por que o uso do relacionamento?_

Como os dados de diferentes entidades são armazenadas em tabelas distintas, geralmente precisamos combinar duas ou mais tabelas para responder as perguntas especificas dos usuários.

#### Grau de um relacionamento

O grau de um relacionamento define o número de entidades que participam do relacionamento. Assim, um relacionamento pode ser:

**Unário**:

Relacionamento de uma entidade com ela mesmo.

Uma **PESSOA** --_se casa_-- com outra **PESSOA**

**Binário**:

Relacionamento entre duas entidades

**FUNCIONÁRIO** --_trabalha_-- em um **SETOR**

**Ternário**:

Relacionamento entre três entidades

Um **MÉDICO** --_prescreve_-- para o **PACIENTE** um **MEDICAMENTO**;

#### Relacionamento entre Entidades/Tabelas

Cada linha de dados em uma tabela deve ser identificada de forma única, usando uma _Chave Primária_ (**PRIMARY KEY**).
Usamos uma _Chave Estrangeira_ (**FOREIGN KEY**) para relacionar os dados entre diversas Entidades
Usamos para isso o relacionamento entre Chave Primária de uma Entidade com a chave estrangeira em outra Entidade.
