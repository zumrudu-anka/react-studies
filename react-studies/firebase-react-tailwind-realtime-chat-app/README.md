# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## When Create the Project

### Install & Setup

- `npm create vite@latest . -- --template react`
- `npm i`
- `npm install tailwindcss @tailwindcss/vite`

#### **`vite.config.ts`**

```ts
    import { defineConfig } from 'vite';
    import tailwindcss from '@tailwindcss/vite';

    export default defineConfig({
        plugins: [
            tailwindcss(),
        ],
    });
```

#### **`CSS`**

```css
    @import "tailwindcss";
```

- `npm run dev`

### Firebase

- Create a project on Firebase platform
- Build -> Authentication
  - Get started
  - Select Google Sign-in method and enable it
- Build -> Firestore Database
  - Create database
  - Select location
  - Start in test mode
  - Start collection
    - Name it `messages`
    - Auto-Id for Document-ID
    - Create field or fields
- Project Overview
  - Web
    - Register an app
    - `npm install firebase`
    - `npm i react-firebase-hooks`
    - Copy `firebaseConfig` section from firebase and paste it to **App.jsx**

#### **`App.jsx`**

```js
    import { initializeApp } from "firebase/app";

    const firebaseConfig = {
        apiKey: "...",
        authDomain: "...",
        projectId: "...",
        storageBucket: "...",
        messagingSenderId: "...",
        appId: "...",
        measurementId: "..."
    };

    const app = initializeApp(firebaseConfig);
```

### Deploy with Firebase

- `npm install -g firebase-tools`,
- `firebase login`
- `firebase init`
- On the `hosting` option press `spacebar` and `enter`
- Select `Use an existing project` and then select your project
- Enter `dist` as input and press `enter`
- Select `y` for SPA option
- Select `N` for GitHub option
- `npm run build`
- `firebase deploy`

### Deployed Website

[Go to Site](https://real-time-chat-app-ed632.web.app/)
