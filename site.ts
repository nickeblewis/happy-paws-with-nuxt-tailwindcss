// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'Nick Lewis',
  description: 'Creative Music/Photography/Code',
  logo: 'i-noto:cat-face',
  author: 'Pinegrow',
  url: 'https://happy-paws-with-nuxt-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@nicklewis',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Gallery', link: '/adopt', type: 'primary', icon: 'i-mdi-home' },
    {
      text: 'Get Started',
      link: '/quick-start',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Articles',
      link: '/articles',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    { text: 'Blog', link: '/blog', type: 'secondary', icon: 'i-mdi-home' },
    {
      text: 'Subscribe',
      link: '/volunteer',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
  ],
}
