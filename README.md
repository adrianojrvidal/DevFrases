# Dev Frases

Projeto prático aplicando **React** e **Typescript**, utilizando principalmente os conceitos de **useState** e **renderização condicional**.

---

## 📌 Funcionalidades

- Exibição de frases aleatórias
- Controle de estado com `useState`
- Renderização condicional de componentes

---

## 🌐 Demonstração online

Link para a demonstração: [Acesse aqui]('https://adrianojrvidal.github.io/DevFrases/')

---

## 🚀 Tecnologias utilizadas

- React
- Typescript
- Vite (caso esteja usando o Vite como bundler)

---

## 💻 Instalação e execução local

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

*(Se o projeto for Create React App, use `npm start` em vez de `npm run dev`)*

---

## 🚀 Deploy no GitHub Pages

Este projeto pode ser hospedado no **GitHub Pages**, tanto se você usou **Create React App (CRA)** quanto **Vite**.

---

### ✅ Deploy usando Create React App (CRA)

#### Passo 1: Instalar o `gh-pages`

```bash
npm install gh-pages --save-dev
```

#### Passo 2: Configurar o `package.json`

##### Adicione o campo `homepage`:

```json
"homepage": "https://<seu-usuario-github>.github.io/<nome-do-repositorio>"
```

##### Adicione os scripts de deploy:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

*(Mantenha os outros scripts existentes como `start`, `build`, etc.)*

#### Passo 3: Fazer o deploy

```bash
npm run deploy
```

#### Passo 4: Ativar o GitHub Pages

1. Vá até o repositório no GitHub.
2. Acesse **Settings > Pages**.
3. Escolha a branch **`gh-pages`** e a pasta `/root`.
4. Salve.

---

### ✅ Deploy usando Vite + React + Typescript

#### Passo 1: Instalar o `gh-pages`

```bash
npm install gh-pages --save-dev
```

#### Passo 2: Configurar o `package.json`

##### Adicione o campo `homepage`:

```json
"homepage": "https://<seu-usuario-github>.github.io/<nome-do-repositorio>"
```

#### Atualize os scripts de deploy:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

#### Passo 3: Configurar o Vite para GitHub Pages

No arquivo `vite.config.ts` ou `vite.config.js`, adicione:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/<nome-do-repositorio>/',
})
```

**Exemplo real:**

```ts
base: '/dev-frases/',
```

Isso garante que os caminhos dos arquivos estáticos funcionem corretamente no GitHub Pages.

---

#### Passo 4: Fazer o deploy

```bash
npm run deploy
```

---

#### Passo 5: Ativar o GitHub Pages

1. Vá até o repositório no GitHub.
2. Acesse **Settings > Pages**.
3. Escolha a branch **`gh-pages`** e a pasta `/root`.
4. Salve.

---

✅ Pronto! Seu projeto está publicado no GitHub Pages.
