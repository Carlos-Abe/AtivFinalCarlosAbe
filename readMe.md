<!-- Estudante: Carlos Eduardo Moura Abe
Matrícula: 2324291011 -->

# Aplicativo Automotivo

Este projeto é um aplicativo móvel desenvolvido com **React Native** (utilizando Expo). A aplicação simula um sistema automotivo completo, permitindo que o usuário se cadastre, faça login, visualize uma lista de carros e acesse detalhes de cada veículo. Além disso, o usuário pode conferir seu perfil e realizar o logout. A navegação é gerenciada por **React Navigation** (usando Stack e Drawer Navigator), enquanto a autenticação e outras conexões com o backend são feitas via **Firebase**.

## Funcionalidades

- **Autenticação de Usuário**
  - Login e Cadastro utilizando Firebase Authentication.
  - Mensagens de alerta para feedback (sucesso e erro).
  - Após o login, o usuário é redirecionado para o Dashboard.

- **Dashboard de Carros**
  - Exibição de uma lista de carros simulados com imagem, nome, ano e preço.
  - Cada item da lista é interativo e, ao ser selecionado, direciona para a tela de detalhes do carro.

- **Detalhes do Carro**
  - Mostra informações completas do veículo: imagens, descrição, especificações técnicas (marca, modelo, ano, motor, potência, transmissão, combustível, quilometragem) e preço.

- **Perfil do Usuário**
  - Exibe informações do perfil, como nome e email.
  - Botões para editar o perfil e acessar outras ações como Configurações, Histórico e Favoritos.
  - Funcionalidade de logout com confirmação.

## Tecnologias e Ferramentas Utilizadas

- **React Native / Expo**
  - Framework para desenvolvimento móvel utilizando JavaScript.
  - Expo facilita a configuração e o deployment do aplicativo.

- **Firebase**
  - **Authentication:** Gerencia as operações de login e cadastro.
  - **Firestore:** Configurado para armazenamento e consulta dos dados (caso deseje expandir o aplicativo).
  - **Analytics:** (Opcional) para monitorar o comportamento dos usuários, dependendo da compatibilidade do ambiente.

- **React Navigation**
  - Gerencia a navegação da aplicação utilizando Stack Navigator e Drawer Navigator.

- **React Context**
  - Utilizado para centralizar a lógica de autenticação diretamente no `App.js`, dispensando a criação de um arquivo `useAuth.js` separado.

## Estrutura do Projeto

A organização dos arquivos está dividida da seguinte forma:

