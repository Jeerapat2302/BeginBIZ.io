// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()]
// });

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// server: {
	// 	proxy: {
	// 		'/api': {
	// 			target: ' http://localhost:5173',  // ที่อยู่ของ API จริง
	// 			changeOrigin: true,
	// 			rewrite: (path) => path.replace(/^\/api/, '')
	// 		}
	// 	}
	// }
});

