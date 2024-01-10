module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_qbchou3t9",
        apiToken: "b2xJzIkIPuEwFGDU0qSNsG4K",
        appFilter: "ovanos-strapi",
        teamFilter: "your-team-id-on-vercel",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });