/*1. Create your project :
npm create vite@latest my-project
cd my-project

2. Install Tailwind CSS - Install tailwindcss and @tailwindcss/vite via npm :
npm install tailwindcss @tailwindcss/vite

3. Configure the Vite plugin - Add the @tailwindcss/vite plugin to your Vite configuration :
At present vite-config.js hai - 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

Isko change karo to -
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

4. Import Tailwind CSS - Add an @import to your CSS file that imports Tailwind CSS :
@import "tailwindcss";

5. Start your build process :
Run your build process with npm run dev or whatever command is configured in your package.json file : npm run dev

6. Start using Tailwind in your HTML - Make sure your compiled CSS is included in the <head> (your framework might handle this for you), then start using Tailwind’s utility classes to style your content:
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
*/