module.exports = {
  siteMetadata: {
    title: 'HummingBird Mosaics',
  },
  pathPrefix: "/",
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Merienda`,
          `Marck Script`, // you can also specify font weights and styles
          'Tangerine',
          'Great Vibes',
          'Kaushan Script', 
          'EB Garamond'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/15x15favicon.png",
        injectHTML: true,
        // WebApp Manifest Configuration
        appName: 'HB Mosaics',
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
   
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ],
}
