<!--
*** Obrigado por estar vendo o nosso README. Se você tiver alguma sugestão
*** que possa melhorá-lo ainda mais dê um fork no repositório e crie uma Pull
*** Request ou abra uma Issue com a tag "sugestão".
*** Obrigado novamente! Agora vamos rodar esse projeto incrível :D
-->

## Interface Aplicativo Nubank
<p align="center"> 
  <img src="https://user-images.githubusercontent.com/28576055/75551540-32b7b480-5a13-11ea-8b41-5179a8128d33.gif" width="300" alt="nubank app interation" />
</p>

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
rocketseat-basic
├── src/
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── images/
│   │   ├── rocketseat_logo_roxa.png
│   │   └── rocketseat_logo.png
│   ├── pages/
│   │   └── Main/
│   │       └── index.js
│   ├── services/
│   │   └── api.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── LICENSE
├── package.json
└── README.md
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
react-native init AwesomeExample --template rocketseat-basic
```

2. Depois do projeto criado você pode deletar o arquivo `App.js` da raiz, pois o arquivo `index.js` agora aponta para a pasta **src**.

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---

#### Passo Adicional no Android

Para que os gestos sejam habilitados no Android é necessário um passo a mais, que é bem simples, abra o arquivo `android/app/src/main/java/<pacote_do_projeto>/MainActivity.java`, e começe importando os pacotes como abaixo:

```java
// ...
import com.facebook.react.ReactActivity;
// Importações adicionadas
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Feito a importação vamos criar um método novo, logo abaixo do `getMainComponentName()`, ficando:

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
  // Método adicionado
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

---

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizadas e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron para ser usado na aplicação;

  - **images** - Diretório para armazenar imagens em geral que possam ser utilizadas na aplicação, esse diretório pode ser renomeado para `assets` e dentro de `assets` criar um novo diretório para guardar somente as imagens, assim é possível ter um diretório para guardar todo tipo de arquivo, e não apenas imagens;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Main** - Diretório exemplo de uma página cujo nome é **Main**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.js** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado por padrão é para a API do Github;

  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

  - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigator disponibilizados na biblitoeca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do Plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **devDependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências de desenvolvimento que devem ser instaladas na aplicação, vale lembrar que as dependências de desenvolvimento que já vem por padrão no projeto como `@babel/core`, `eslint`, entre outras, não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do Javascript no Editor, ele é o responsável por ativar o Auto Complete de códigos Javascript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
