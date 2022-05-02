window.onload = function () {
  // Begin Swagger UI call region
  const ui = SwaggerUIBundle({
    /**
     * Remove url and add urls with following format.
     * Value of url attribute inside urls can be full URL address or a path of local file in heroku
     *
     * Notice: Path of a local file can be relative.
     * In this example, you must create apiFiles under home directory of apidoc-repo,
     * and put productBdefinition.json file there.
     */
    urls: [
      { url: "https://petstore.swagger.io/v2/swagger.json", name: "product A" },
      // { url: "../../docs/swagger.json", name: "covid Data" },
    ],

    /**
     * Select assigned name after landing this page
     */
    "urls.primaryName": "product A",

    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
  });
  // End Swagger UI call region

  window.ui = ui;
};
