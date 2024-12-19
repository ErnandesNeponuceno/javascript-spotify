
# 🎵 Spotify

Uma aplicação web que simula a página inicial do Spotify, desenvolvida com **HTML**, **CSS**, e **JavaScript**. Esta página apresenta uma interface visualmente atraente inspirada no Spotify original.

---

## 🎯 Estrutura do Projeto

### **Estrutura de Diretórios**
```plaintext
javascript-spotify/
├── artists-api/                    # Mock da API para busca de artistas
│   └── artists.json
├── assets/
│   ├── css/                        # Arquivos de estilo
│   │   ├── footer.css
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── main.css
│   │   ├── sidebar.css
│   │   └── styles.css
│   ├── img/                        # Imagens (ícones, playlists, etc.)
│   ├── js/
│   │   └── script.js               # Lógica principal da aplicação
├── index.html                      # Página inicial
```

---

## 💻 Tecnologias Utilizadas

<div style="display: inline_block">
  <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
</div>

---

## 🚀 Como Rodar o Projeto?

### **Pré-requisitos**
- Navegador web atualizado.
- **JSON Server** instalado para a simulação de API:
  ```bash
  npm install -g json-server
  ```

### **Passos**
1. Clone o repositório:
   ```bash
   git clone https://github.com/ErnandesNeponuceno/javascript-spotify.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd javascript-spotify
   ```
3. Inicie o servidor JSON:
   ```bash
   json-server --watch artists-api/artists.json --port 3000
   ```
4. Abra o arquivo **`index.html`** no navegador.

---

## 🔍 Interatividade com JavaScript

### **Busca Dinâmica**
- **Entrada de pesquisa**:
  - O usuário insere o nome de um artista no campo de pesquisa.
  - A aplicação faz uma requisição à API simulada (`JSON Server`).
- **Exibição dos resultados**:
  - Resultados são renderizados dinamicamente, exibindo nome e imagem do artista.

### **Playlists Dinâmicas**
- As playlists são renderizadas com base em um array de objetos definido no JavaScript.
- **Efeitos Visuais**:
  - Hover: Ao passar o mouse, os cards aumentam de tamanho e exibem uma transição visual.

---

## 🖥️ Layout

- **Desktop**: Design otimizado para grandes telas.

---

## ✨ Créditos

- Interface baseada no Spotify, desenvolvida para fins educacionais - Alura.
- Todas as imagens e ícones são utilizados apenas como referência visual.

---
