const theo = require("theo");

theo
  .convert({
    transform: {
      type: "web",
      file: "tokens/_buttons.yml",
    },
    format: {
      type: "scss",
    },
  })
  .then((scss) => {
    // $button-background: rgb(0, 112, 210);
  })
  .catch((error) => console.log(`Something went wrong: ${error}`));
