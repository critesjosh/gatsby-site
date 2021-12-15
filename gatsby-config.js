module.exports = {
  siteMetadata: {
    siteUrl: "https://joshcrites.com",
    title: "Being Josh C",
    author: "Josh C",
    description: "a corner of the metaverse",
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/critesjosh_`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/critesjosh`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
        prismPreset: `duotone-dark`,
      },
    },
  ],
};
