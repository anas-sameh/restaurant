// استيراد المكتبات المطلوبة
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // إضافة الإضافات المطلوبة
  plugins: [react()],
  
  // إعدادات خادم التطوير
  server: {
    // إعدادات الوكيل (Proxy) للتعامل مع مشاكل CORS
    proxy: {
      // وكيل لطلبات اللغات
      '/languages': {
        target: 'https://extensions.aitopia.ai',
        changeOrigin: true,
        secure: false
      },
      // وكيل لطلبات الذكاء الاصطناعي
      '/ai': {
        target: 'https://extensions.aitopia.ai',
        changeOrigin: true,
        secure: false
      },
      // وكيل لطلبات الإضافات
      '/extensions': {
        target: 'https://extensions.aitopia.ai',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
