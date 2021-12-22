# Controle de itens

- [Controle de itens](#controle-de-itens).
- [Sobre o projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura de pastas](#estrutura-de-pastas)
    - [Pastas](#pastas)
      - [components](#components)
      - [interfaces](#interfaces)
      - [modules](#modules)
      - [pages](#pages)
      - [pipes](#pipes)
      - [services](#services)
- [Rodando a aplicação](#rodando-a-aplicação)
- [Licença](#licença)
- [Contato](#contato)
### Sobre o projeto
Este projeto vista a criação, edição e manutenção de itens variádos sem necessidade de armazenagem em bancos de dados. Para isto, é utilizado o localStorage do próprio navegador realizando a persistência de dados.
### Tecnologias
Este projeto foi criado utilizando as seguintes tecnologias.

- Angular
- Typescript
- PrimeNg

### Estrutura de pastas
``` 
├───app
│   ├───components
│   │   ├───dialog
│   │   ├───side-menu
│   │   ├───table-itens
│   │   ├───toast
│   │   └───toolbar
│   ├───interfaces
│   ├───modules
│   │   └───prime-ng
│   ├───pages
│   │   ├───itens
│   │   └───register
│   ├───pipes
│   └───services
├───assets
└───environments
```

##### Pastas
###### components
A pasta componentes é responsável por armazenar todos os componentes visuais reaproitáveis. Assim, é possível usá-los em qualquer parte do código, bastando declará-los nos módulos dos componentes que o chamarem.

###### interfaces
A pasta interfaces é responsável por armazenar as interfaces e os types para serem utilizados no código. Por padrão, as interfaces iniciam com "I" seguido do nome da interface e os types começam com "T" seguido do nome do type.

###### modules
A pasta modules é responsável por armazenar os módulos de controle. Os quais podem exportar vários elementos para um mesmo componente, deste modo, não é necessário ficar importando a cada um individualmente em cada página em qual foi solicitado.

###### pages
A pasta pages é responsável por armazenas as telas que serão apresentadas no navegador e que serão informadas no routing da aplicação.

###### pipes
A pasta pipes segue para armazenar todos os pipes criados para centralizar a localização deles.

###### services
A pasta services armazena todos os services de uso global, aos quais poderão ser chamados em um ou mais componentes.

### Rodando a aplicação
Para rodar a aplicação, é necessário ter instalado no computador as seguintes tecnologias.
- Angular
- Node (Para instalação das dependências)
  
1. Na raíz da aplicação, rode o comando `$ npm run install`
2. Após as dependências serem instaladas, rode o comando `$ npm run start`
   
Você será direcionado para a tela principal da aplicação "itens". A partir daí, você consegue usar a aplicação em sua totalidade.

### Licença
Distribuído sob a licença MIT.

### Contato
[Linkedin](https://www.linkedin.com/in/jonas-magalh%C3%A3es-19b974134/)
[Github](https://github.com/JonasVMagalhaes)