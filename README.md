# Quasar Store FiveM Template
> **A modern UI template for FiveM resources, built with React and Vite.**

---

## 🚀 Features

- ⚡️ **React + Vite:** Fast development and instant HMR.
- 🎨 **TailwindCSS:** Modern, responsive styles out of the box.
- 🧩 **Modular structure:** Clear separation between client, server, and web.
- 🛠️ **Easy FiveM integration:** Designed for NUI resources.
- 🧑‍💻 **Clean, commented code:** Perfect for learning and customization.

---

## 📦 Project Structure

```
client/      # FiveM client-side code (Lua)
server/      # FiveM server-side code (Lua)
web/         # Web UI (React, Vite, TailwindCSS)
  └─ src/
      ├─ assets/      # Images and assets
      ├─ hooks/       # Custom React hooks
      ├─ providers/   # Context providers
      ├─ utils/       # JS utilities
      └─ App.jsx      # Main component
  └─ build/           # Production build output (auto-generated)
fxmanifest.lua        # FiveM resource manifest
```

---

## 🖥️ Installation & Usage

### 1. Clone the repository

```sh
git clone https://github.com/emanueldev1/react-fivem-base.git
cd react-fivem-base/web
```

### 2. Install dependencies with pnpm

```sh
pnpm install
```

### 3. Start the development server

```sh
pnpm run dev
```

### 4. Build for production

```sh
pnpm run build
```
This will generate the production files in `web/build`.

---

## 🎮 How to Install as a FiveM Script

1. **Build the web UI:**
   ```sh
   pnpm run build
   ```
   The output will be in `web/build`.

2. **Do NOT move the build folder.**  
   The resource is already configured to use `web/build` as the NUI root.  
   The `fxmanifest.lua` is set up to use `web/build/index.html` and all assets inside `web/build`.

3. **Resource structure:**  
   Your resource folder should look like this:
   ```
   client/
   server/
   web/
     └─ build/
     └─ src/
   fxmanifest.lua
   ```

4. **Add the resource to your `server.cfg`:**
   ```cfg
   ensure your_resource_name
   ```

---

## ⚡ Live Coding In-Game (Hot Reload)

You can use the `dev:game` script for live coding and automatic rebuilds while your server is running:

1. **Start the watcher:**
   ```sh
   pnpm run dev:game
   ```
   This will watch for changes and rebuild the UI automatically into `web/build`.

2. **In your FiveM server, refresh the NUI page (usually by reopening the UI or using a reload command) to see your changes instantly, without restarting the server.**

---

## 📝 Customization

- Edit [`web/src/App.jsx`](web/src/App.jsx) to modify the main UI.
- Replace the logo in [`web/src/assets/quasar-logo-with-text.png`](web/src/assets/quasar-logo-with-text.png).
- Add your own hooks, providers, and utilities in their respective folders.

---

## 🤝 Credits

Inspiration and workflow from [This Repo](https://github.com/project-error/fivem-react-boilerplate-lua)

Created by [emanueldev1](https://github.com/emanueldev1).

---

## 📄 License

This project is licensed under the **GNU GPL v3**. See the [`LICENSE`](LICENSE) file for details.

---

If you like this project, please star ⭐ the repository!
