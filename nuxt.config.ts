//import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
   },
vite: {
    define: {
        'process.env.DEBUG': false,
    },
  },
//   modules: [
//     '@nuxtjs/firebase',
   
//   ],  
   /*
  ** Firebase Configuration
  */
//  firebase: {
//     config: {
//         apiKey: "AIzaSyClPGZEgQKjpuV_8223CXH_6ar4Xi9C8cE",
//                     authDomain: "grid-app-bdda1.firebaseapp.com",
//                     projectId: "grid-app-bdda1",
//                     storageBucket: "grid-app-bdda1.appspot.com",
//                     messagingSenderId: "651055576207",
//                     appId: "1:651055576207:web:d5543c4b3b9118e598acfa",
//                     measurementId: "G-0K91XLFQDY"
//     },
//     services: {
//       auth: true,
//       firestore: true,
//       storage: true,
//       realtimeDb: true,
//     },
//   },
  
//   modules: [
    
//     [
//       '@nuxtjs/firebase',
//       { proxyHeaders: false },
//       {
//         config: {
//             apiKey: "AIzaSyClPGZEgQKjpuV_8223CXH_6ar4Xi9C8cE",
//             authDomain: "grid-app-bdda1.firebaseapp.com",
//             projectId: "grid-app-bdda1",
//             storageBucket: "grid-app-bdda1.appspot.com",
//             messagingSenderId: "651055576207",
//             appId: "1:651055576207:web:d5543c4b3b9118e598acfa",
//             measurementId: "G-0K91XLFQDY"
//         },
//         services: {
//           auth: true // Just as example. Can be any other service.
//         }
//       }
//     ]
//   ],
}