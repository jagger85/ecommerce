import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env
    },
    plugins: [react()],
  //   server: {
  //      headers: {
  //        "Content-Security-Policy" : [
  //         //   "img-src  self https://i.ibb.co https://*.stripe.com",
  //         //   "connect-src self https://api.stripe.com https://maps.googleapis.com",
  //         //   "frame-src self https://js.stripe.com https://hooks.stripe.com",
  //        //"script-src 'unsafe-eval' 'unsafe-inline' https://js.stripe.com 'self' "
  //        //  https://js.stripe.com https://maps.googleapis.com",
        
  //      ],
  //     }
  //  }
  }
})
