// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portafolio/', // <--- ¡AÑADE O MODIFICA ESTA LÍNEA!
  plugins: [react()],
});