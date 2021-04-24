module.exports = {
  siteMetadata: {
    title: `M 💍 X`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    image: "images/logo.png",
    url: "https://gatsby-theme-countdown-simple-example.netlify.com"
  },
  plugins: [
    {
      resolve: "@rafaelquintanilha/gatsby-theme-countdown",
      options: {
        basePath: "/",
        mainHeader: "Magalie 💍 Xavier",
        secondaryHeader: " ", 
        // hideHours: true, 
        // hideMinutes: true,
        // hideSeconds: true,
        hideGithubButton: true,
        hideWhatsappShareButton: true,
        hideTwitterShareButton: true,
        hideFacebookShareButton: true,
        // hideParticles: true,
        targetDate: "2022-07-16 14:00:00",
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
