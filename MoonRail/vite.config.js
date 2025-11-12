import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ADD or ENSURE this line is here:
  base: '/', 
  // END ADDITION
  plugins: [react()],
})