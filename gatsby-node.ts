const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const indexTemplate = path.resolve(`src/pages/index.tsx`);

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
