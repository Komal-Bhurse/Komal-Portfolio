import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    REACT_APP_EMAILJS_SERVICE_ID:JSON.stringify("service_y3d6llk"),
    REACT_APP_EMAILJS_TEMPLATE_ID:JSON.stringify("template_nmeymx5"),
    REACT_APP_EMAILJS_PUBLIC_KEY:JSON.stringify("RFBvZ18ysBWskiwEX")
  }
})
