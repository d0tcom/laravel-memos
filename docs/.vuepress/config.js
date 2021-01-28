const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Laravel Memorandum",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#F05340" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "/assets/img/laravel-logo.svg",
    repo: "d0tcom/laravel-memos",
    repoLabel: "Contribuer à Laravel Mémos",
    editLinks: true,
    docsRepo: "d0tcom/laravel-memos",
    docsDir: "docs",
    editLinkText: "Modifier ou contribuer à cette page.",
    lastUpdated: "Dernière modification",
    smoothScroll: true,
    nextLinks: false,
    prevLinks: false,
    nav: [
      {
        text: "Laravel",
        link: "/memos/",
      },
      {
        text: "Plus",
        ariaLabel: "Plus",
        items: [
          {
            text: "Changelog",
            link:
              "https://github.com/d0tcom/laravel-memos/blob/master/CHANGELOG.md",
          },
        ],
      },
    ],
    sidebar: {
      "/memos/": [
        // Au commencement
        {
          title: "Au commencement",
          collapsable: false,
          children: [
            "",
            "installer-les-prerequis-pour-laravel",
            "creer-un-nouveau-projet-laravel",
          ],
        },
        // Routing
        {
          title: "Routing",
          collapsable: false,
          children: ["creer-des-routes-laravel"],
        },
        // Requêtes
        {
          title: "Requêtes",
          collapsable: false,
          children: ["acceder-a-une-requete-dans-une-url-avec-laravel"],
        },
        // Contrôleurs
        {
          title: "Contrôleurs",
          collapsable: false,
          children: ["creer-un-controleur-sur-laravel"],
        },
        // Modèles
        {
          title: "Modèles",
          collapsable: false,
          children: [
            "c-est-quoi-un-modele-laravel",
            "eloquent-laravel",
            "creer-un-modele-laravel",
            "eager-loading-laravel",
          ],
        },
        // Réponses
        {
          title: "Réponses",
          collapsable: false,
          children: ["creer-et-retourner-des-reponses"],
        },
        // Views, Blade
        {
          title: "Views, Blade",
          collapsable: false,
          children: [
            "creer-des-layouts-laravel",
            "gerer-le-css-sur-laravel",
            "afficher-des-donnees-dans-une-vue",
          ],
        },
        // Base de données
        {
          title: "Base de donnée",
          collapsable: false,
          children: [
            "se-connecter-a-mysql-et-creer-une-base-de-donnees",
            "migration",
            "enregistrer-des-donnees-dans-une-table",
            "supprimer-un-enregistrement-dans-la-base-de-donnees",
            "query-builder-laravel",
            "pagination-laravel",
            "seeding-laravel",
          ],
        },
        // Divers
        {
          title: "Divers",
          collapsable: false,
          children: [
            "conventions-de-nommage-laravel",
            "se-reperer-dans-une-relation-entre-les-tables",
            "ne-pas-echapper-les-caracteres-speciaux-laravel",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
