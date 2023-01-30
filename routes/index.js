var express = require("express");
var router = express.Router();

const returnAdventures = require("../models/adventures");
/* GET home page. */

router.get("/:activity?", function (req, res, next) {
  let activity = req.params.activity;
  let navItems = returnAdventures.getNavMenu();
  if (!activity) {
    let allAdventures;
    (async function () {
      try {
        allAdventures = await returnAdventures.getGraphQLAdventures();
        res.render("index", {
          title: "WKND",
          adventures: allAdventures.data.adventureList.items,
          activity: "All",
          navMenu: navItems
        });
      } catch (error) {
        console.log("error= " + error);
      }
    })();
  } else {
    let adventuresByActivity;
    const queryParameters = { activity: activity };
    (async function () {
      try {
        adventuresByActivity = await returnAdventures.getAdventuresByActivity(
          activity
        );
        res.render("index", {
          title: "WKND",
          adventures: adventuresByActivity.data.adventureList.items,
          activity: activity,
          navMenu: navItems
        });
      } catch (error) {
        console.log("error = " + error);
      }
    })();
  }

});

module.exports = router;
