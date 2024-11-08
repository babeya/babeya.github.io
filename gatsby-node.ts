const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }: any) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  });
};

// Log out information after a build is done
exports.onPostBuild = ({ reporter }: any) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }: any) => {
  const { createPage, createRedirect } = actions;

  const indexTemplate = path.resolve(`src/pages/index.tsx`);

  createRedirect({
    fromPath: `/`,
    toPath: `/en`,
    conditions: {
      language: [`en`],
    },
  });

  createPage({
    path: `/`,
    component: indexTemplate,
    context: {
      lang: "fr",
    },
  });
  createPage({
    path: `/en`,
    component: indexTemplate,
    context: {
      lang: "en",
    },
  });
};
