# Steps
* pnpm i vike
* pnpm i @vite-plugin-vercel/vike
* pnpm i vite-plugin-vercel
* vite.config.ts -> import vercel from 'vite-plugin-vercel'
* pnpm run build
* vercel deploy --prebuilt
? What's your Build Command? pnpm run build
? What's your Development Command? pnpm run dev
? What's your Output Directory? dist/client
