var express = require("express");
var router = express.Router();

const returnAdventures = require("../models/adventures");

/* GET home page. */
router.get("/:slug?", function (req, res, next) {
  let slug = req.params.slug;

  let adventureDetail;
  (async function () {
    adventureDetail = await returnAdventures.getAdventuresBySlug(slug);

    res.render("adventureDetail", {
      title: "WKND Adventure Details",
      adventureDetails: adventureDetail.data.adventureList.items,
      slug: slug
    });
  })();
});

module.exports = router;
