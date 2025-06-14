import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Task-tracker/', // 👈 Ye repo ka naam hai, yahi hona chahiye
});
