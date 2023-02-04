// vite.config.js
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
var __vite_injected_original_dirname = "E:\\Programming\\Projects\\Template\\Frontend";
var isDev = process.env.ENV === "development";
var manifestPath = "/manifest";
var vite_config_default = defineConfig({
  plugins: [
    solidPlugin(),
    VitePWA({
      includeAssets: ["app/*.svg"],
      manifest: {
        name: "Huu Clothing",
        short_name: "Huu Clothing",
        description: "Huu Clothing Netlify Web App",
        theme_color: "#060505",
        icons: [
          {
            type: "image/png",
            src: manifestPath + "/pwa-192.png",
            sizes: "192x192"
          },
          {
            type: "image/png",
            src: manifestPath + "/pwa-512.png",
            sizes: "512x512"
          },
          {
            type: "image/png",
            src: manifestPath + "/pwa-512.png",
            sizes: "512x512",
            purpose: "any maskable"
          },
          {
            type: "image/png",
            src: manifestPath + "/apple-touch-icon.png",
            sizes: "180x180",
            rel: "apple-touch-icon"
          }
        ]
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: isDev
      }
    })
  ],
  server: {
    port: 3e3
  },
  build: {
    target: "esnext"
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQcm9ncmFtbWluZ1xcXFxQcm9qZWN0c1xcXFxUZW1wbGF0ZVxcXFxGcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcUHJvZ3JhbW1pbmdcXFxcUHJvamVjdHNcXFxcVGVtcGxhdGVcXFxcRnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1Byb2dyYW1taW5nL1Byb2plY3RzL1RlbXBsYXRlL0Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBzb2xpZFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCc7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcbmNvbnN0IG1hbmlmZXN0UGF0aCA9ICcvbWFuaWZlc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBzb2xpZFBsdWdpbigpLFxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnYXBwLyouc3ZnJ10sXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgbmFtZTogJ0h1dSBDbG90aGluZycsXHJcbiAgICAgICAgc2hvcnRfbmFtZTogJ0h1dSBDbG90aGluZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdIdXUgQ2xvdGhpbmcgTmV0bGlmeSBXZWIgQXBwJyxcclxuICAgICAgICB0aGVtZV9jb2xvcjogJyMwNjA1MDUnLFxyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgICAgICBzcmM6IG1hbmlmZXN0UGF0aCArICcvcHdhLTE5Mi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgc3JjOiBtYW5pZmVzdFBhdGggKyAnL3B3YS01MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHNyYzogbWFuaWZlc3RQYXRoICsgJy9wd2EtNTEyLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgc3JjOiBtYW5pZmVzdFBhdGggKyAnL2FwcGxlLXRvdWNoLWljb24ucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcclxuICAgICAgICAgICAgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbidcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcclxuICAgICAgZGV2T3B0aW9uczoge1xyXG4gICAgICAgIGVuYWJsZWQ6IGlzRGV2XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VCxTQUFTLG9CQUFvQjtBQUNwVixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLGVBQWU7QUFDeEIsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU0sUUFBUSxRQUFRLElBQUksUUFBUTtBQUNsQyxJQUFNLGVBQWU7QUFFckIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osUUFBUTtBQUFBLE1BQ04sZUFBZSxDQUFDLFdBQVc7QUFBQSxNQUMzQixVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sS0FBSyxlQUFlO0FBQUEsWUFDcEIsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixLQUFLLGVBQWU7QUFBQSxZQUNwQixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLEtBQUssZUFBZTtBQUFBLFlBQ3BCLE9BQU87QUFBQSxZQUNQLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sS0FBSyxlQUFlO0FBQUEsWUFDcEIsT0FBTztBQUFBLFlBQ1AsS0FBSztBQUFBLFVBQ1A7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYztBQUFBLE1BQ2QsWUFBWTtBQUFBLFFBQ1YsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
