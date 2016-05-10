# Exercício avaliativo A1

Desenvolvimento para cliente web. Prof.: Bruno Urbano Rodrigues

### Regras do trabalho

1. Criar uma lista de Pessoas e armazenar seus dados em um localStorage.
2. Buscar as informações contidas na storage e apresentar ao usuário
3. Criar um formulário e listar as informações para o usuário
4. Utilizar HTML5. (Sem bootstrap)

## Ambiente de desenvolvimento

### O que foi utilizado no trabalho
* Html5
    * LocalStorage
* CSS3
* JavaScript OO
* [Grunt]
    * [Grunt-contrib-less]
    * [Uglify]
    * [Watch]
* [Less CSS pre-processor]

### Instalação

```shell
$ npm install
```

### Execução

``` shell
$ node
```

### Estrutura do projeto

```
├── css
│   └── main.min.css
├── desenvolvimento
│   ├── css
│   │   ├── colors.less
│   │   ├── default-size-items.less
│   │   ├── grid.less
│   │   ├── html.less
│   │   ├── main.less
│   │   ├── reset.less
│   │   └── struct-class.less
│   └── js
│       ├── controller.js
│       └── model
│           ├── entity
│           │   ├── Cliente.js
│           │   ├── Pessoa.js
│           │   ├── PessoaJuridica.js
│           │   └── Telefone.js
│           └── factory
│               ├── clienteBusiness.js
│               └── pessoaJuridica.js
├── Gruntfile.js
├── index.html
├── js
│   └── main.min.js
├── package.json
└── README.md
```

[Less CSS pre-processor]: <http://lesscss.org/>
[Grunt]: <http://gruntjs.com/>
[Grunt-contrib-less]: <https://www.npmjs.com/package/grunt-contrib-less>
[Uglify]: <https://www.npmjs.com/package/uglify>
[Watch]: <https://www.npmjs.com/package/watch>
