var express = require("express");
var router = express.Router();

const aemHeadless = require("../api/aemHeadlessClient");
const returnAdventures = require("../models/adventures");
/* GET home page. */

//import {getAllAdventures} from "../models/adventures";
router.get("/:activity?", function (req, res, next) {
  let activity = req.params.activity;
  let navItems = returnAdventures.getNavMenu();
  if (!activity) {
    let allAdventures;
    (async function () {
      try {
        allAdventures = await returnAdventures.getGraphQLAdventures();
        console.log(allAdventures);
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
    console.log("queryParameters " + queryParameters);
    (async function () {
      try {
        adventuresByActivity = await returnAdventures.getAdventuresByActivity(
          activity
        );
        console.log(adventuresByActivity);
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

  //res.render('index', { title: 'WKND', adventures: parsedAdventure.data.adventureList.items, activity: activity, queryReturn: parsedAdventure});
});

module.exports = router;
