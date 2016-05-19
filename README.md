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
    * [Minify HTML]
* [Less CSS pre-processor]

### Instalação das depêndencias

Instalação [Npm]

```shell
$ npm install
```

### Execução para desenvolvimento

Instalação [Grunt CLI]

``` shell
$ grunt
```

### Estrutura do projeto

```
├── css
│   └── main.min.css
├── desenvolvimento
│   ├── index.html
│   ├── css
│   │   ├── colors.less
│   │   ├── default-size-items.less
│   │   ├── grid.less
│   │   ├── html.less
│   │   ├── main.less
│   │   ├── reset.less
│   │   └── struct-class.less
│   └── js
│       ├── functions.js
│       ├── header.js
│       ├── controller.js
│       └── model
│           ├── entity
│           │   ├── Cliente.js
│           │   ├── Pessoa.js
│           │   ├── PessoaJuridica.js
│           │   └── Telefone.js
│           └── factory
│               └── LocalStorageFactory.js
├── Gruntfile.js
├── index.html
├── js
│   └── main.min.js
├── package.json
└── README.md
```

### Para testes de cadastro

```javascript
/*
 * Cadastrar uma grande quantidade de registro 
 */
var elements = document.getElementsByTagName("input");
for(var t = 0; t < 100; t++){
  for (var i=0; i < elements.length; i++) {
    if (elements[i].type == "text") {
      elements[i].value = "v"+Math.random();
    }
  }
  Obj.Controlador.salvar();
}
/*
 * Limpar todos os dados do storage
 */
localStorage.clear();
```

[Less CSS pre-processor]: <http://lesscss.org/>
[Grunt]: <http://gruntjs.com/>
[Grunt-contrib-less]: <https://www.npmjs.com/package/grunt-contrib-less>
[Uglify]: <https://www.npmjs.com/package/grunt-contrib-uglify>
[Watch]: <https://www.npmjs.com/package/watch>
[Minify HTML]: <https://www.npmjs.com/package/grunt-contrib-htmlmin>
[Npm]: <https://www.npmjs.com/package/npm>
[Grunt CLI]: <http://gruntjs.com/getting-started>
