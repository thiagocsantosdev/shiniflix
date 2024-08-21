// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      Poppins: [100, 300, 400, 500, 700, 900],
    },
  },
  compatibilityDate: "2024-08-18"
})