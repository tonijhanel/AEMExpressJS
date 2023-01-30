const AEMHeadless = require("@adobe/aem-headless-client-nodejs");

const {
  NODE_APP_HOST_URI,
  NODE_APP_GRAPHQL_ENDPOINT,
  NODE_APP_USE_PROXY,
  NODE_APP_AUTH_METHOD,
  NODE_APP_DEV_TOKEN,
  NODE_APP_BASIC_AUTH_USER,
  NODE_APP_BASIC_AUTH_PASS
} = process.env;

const setAuthorization = () => {
  if (NODE_APP_AUTH_METHOD === "basic") {
    return [NODE_APP_BASIC_AUTH_USER, NODE_APP_BASIC_AUTH_PASS];
  } else if (NODE_APP_AUTH_METHOD === "dev-token") {
    return NODE_APP_DEV_TOKEN;
  } else {
    // no authentication set
    return;
  }
};

const aemHeadlessClient = new AEMHeadless({
  serviceURL: "https://publish-p96606-e882934.adobeaemcloud.com",
  endpoint: "", // Avoid non-persisted queries
  auth: setAuthorization() // accessToken only set if the 2nd command line parameter is set
});

function getAllAdventures() {
  let adventures =
    '{"data":{"adventureList":{"items":[{"_path":"/content/dam/wknd-shared/en/adventures/bali-surf-camp/bali-surf-camp","slug":"bali-surf-camp","title":"Bali Surf Camp","price":5000.0,"activity":"Surfing","tripLength":"6 Days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/bali-surf-camp/adobestock-175749320.jpg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/bali-surf-camp/adobestock-175749320.jpg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/bali-surf-camp/adobestock-175749320.jpg","mimeType":"image/jpeg","width":1600,"height":899}},{"_path":"/content/dam/wknd-shared/en/adventures/beervana-portland/beervana-in-portland","slug":"beervana-portland","title":"Beervana in Portland","price":300.0,"activity":"Social","tripLength":"1 Day","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/beervana-portland/adobestock-279232449.jpeg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/beervana-portland/adobestock-279232449.jpeg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/beervana-portland/adobestock-279232449.jpeg","mimeType":"image/jpeg","width":1381,"height":920}},{"_path":"/content/dam/wknd-shared/en/adventures/climbing-new-zealand/climbing-new-zealand","slug":"climbing-new-zealand","title":"Climbing New Zealand","price":900.0,"activity":"Rock Climbing","tripLength":"2 Days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/climbing-new-zealand/adobestock-140634652.jpeg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/climbing-new-zealand/adobestock-140634652.jpeg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/climbing-new-zealand/adobestock-140634652.jpeg","mimeType":"image/jpeg","width":1293,"height":862}},{"_path":"/content/dam/wknd-shared/en/adventures/colorado-rock-climbing/colorado-rock-climbing","slug":"colorado-rock-climbing","title":"Overnight Colorado Rock Climbing","price":1000.0,"activity":"Rock Climbing","tripLength":"3 Days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/colorado-rock-climbing/adobestock-241578158.jpg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/colorado-rock-climbing/adobestock-241578158.jpg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/colorado-rock-climbing/adobestock-241578158.jpg","mimeType":"image/jpeg","width":1000,"height":667}},{"_path":"/content/dam/wknd-shared/en/adventures/cycling-southern-utah/cycling-southern-utah","slug":"cycling-southern-utah","title":"Cycling Southern Utah","price":3000.0,"activity":"Cycling","tripLength":"5 Days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/cycling-southern-utah/adobestock-185324648.jpg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/cycling-southern-utah/adobestock-185324648.jpg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/cycling-southern-utah/adobestock-185324648.jpg","mimeType":"image/jpeg","width":1000,"height":667}},{"_path":"/content/dam/wknd-shared/en/adventures/cycling-tuscany/cycling-tuscany","slug":"cycling-tuscany","title":"Cycling Tuscany","price":4500.0,"activity":"Cycling","tripLength":"4 Days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/cycling-tuscany/adobestock-261097343.jpeg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/cycling-tuscany/adobestock-261097343.jpeg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/cycling-tuscany/adobestock-261097343.jpeg","mimeType":"image/jpeg","width":1381,"height":920}},{"_path":"/content/dam/wknd-shared/en/adventures/downhill-skiing-wyoming/downhill-skiing-wyoming","slug":"downhill-skiing-wyoming","title":"Downhill Skiing in Jackson Hole, Wyoming","price":400.0,"activity":"Skiing","tripLength":"2-3 days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/downhill-skiing-wyoming/adobestock-185234795.jpeg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/downhill-skiing-wyoming/adobestock-185234795.jpeg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/downhill-skiing-wyoming/adobestock-185234795.jpeg","mimeType":"image/jpeg","width":1180,"height":787}},{"_path":"/content/dam/wknd-shared/en/adventures/gastronomic-marais-tour/gastronomic-marais-tour","slug":"gastronomic-marais-tour","title":"Gastronomic Marais Tour","price":95.0,"activity":"Social","tripLength":"1 Day","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/gastronomic-marais-tour/adobestock-270835979.jpg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/gastronomic-marais-tour/adobestock-270835979.jpg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/gastronomic-marais-tour/adobestock-270835979.jpg","mimeType":"image/jpeg","width":1000,"height":667}},{"_path":"/content/dam/wknd-shared/en/adventures/napa-wine-tasting/napa-wine-tasting","slug":"napa-wine-tasting","title":"Napa Wine Tasting","price":152.59,"activity":"Social","tripLength":"1 Day","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/napa-wine-tasting/adobestock-280313729.jpg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/napa-wine-tasting/adobestock-280313729.jpg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/napa-wine-tasting/adobestock-280313729.jpg","mimeType":"image/jpeg","width":1000,"height":563}},{"_path":"/content/dam/wknd-shared/en/adventures/riverside-camping-australia/riverside-camping-australia","slug":"riverside-camping-australia","title":"Riverside Camping Australia","price":500.0,"activity":"Camping","tripLength":"3 Days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/riverside-camping-australia/adobestock-257541512.jpeg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/riverside-camping-australia/adobestock-257541512.jpeg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/riverside-camping-australia/adobestock-257541512.jpeg","mimeType":"image/jpeg","width":1379,"height":776}},{"_path":"/content/dam/wknd-shared/en/adventures/ski-touring-mont-blanc/ski-touring-mont-blanc","slug":"ski-touring-mount-blanc","title":"Ski Touring Mont Blanc","price":2600.0,"activity":"Skiing","tripLength":"5 Days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/ski-touring-mont-blanc/adobestock-291339093.jpeg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/ski-touring-mont-blanc/adobestock-291339093.jpeg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/ski-touring-mont-blanc/adobestock-291339093.jpeg","mimeType":"image/jpeg","width":720,"height":480}},{"_path":"/content/dam/wknd-shared/en/adventures/surf-camp-in-costa-rica/surf-camp-costa-rica","slug":"surf-camp-costa-rica","title":"Surf Camp in Costa Rica","price":3400.0,"activity":"Surfing","tripLength":"5 Days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/surf-camp-in-costa-rica/surfing_5.jpg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/surf-camp-in-costa-rica/surfing_5.jpg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/surf-camp-in-costa-rica/surfing_5.jpg","mimeType":"image/jpeg","width":1920,"height":1080}},{"_path":"/content/dam/wknd-shared/en/adventures/tahoe-skiing/tahoe-skiing","slug":"tahoe-skiing","title":"Tahoe Skiing","price":1500.0,"activity":"Skiing","tripLength":"3-4 days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/tahoe-skiing/adobestock-184591344.jpg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/tahoe-skiing/adobestock-184591344.jpg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/tahoe-skiing/adobestock-184591344.jpg","mimeType":"image/jpeg","width":1000,"height":722}},{"_path":"/content/dam/wknd-shared/en/adventures/west-coast-cycling/west-coast-cycling","slug":"west-coast-cycling","title":"West Coast Cycling","price":4500.0,"activity":"Cycling","tripLength":"5 days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/west-coast-cycling/adobestock-151584995.jpg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/west-coast-cycling/adobestock-151584995.jpg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/west-coast-cycling/adobestock-151584995.jpg","mimeType":"image/jpeg","width":1000,"height":357}},{"_path":"/content/dam/wknd-shared/en/adventures/whistler-mountain-biking/whistler-mountain-biking","slug":"whistler-mountain-biking","title":"Whistler Mountain Biking Adventure","price":1500.0,"activity":"Cycling","tripLength":"2 Days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/whistler-mountain-biking/adobestock-122578479.jpeg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/whistler-mountain-biking/adobestock-122578479.jpeg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/whistler-mountain-biking/adobestock-122578479.jpeg","mimeType":"image/jpeg","width":1694,"height":1122}},{"_path":"/content/dam/wknd-shared/en/adventures/yosemite-backpacking/yosemite-backpacking","slug":"yosemite-backpacking","title":"Yosemite Backpacking","price":1500.0,"activity":"Camping","tripLength":"5 Days","primaryImage":{"_path":"/content/dam/wknd-shared/en/adventures/yosemite-backpacking/adobestock-196967522.jpg","_authorUrl":"http://localhost:4502/content/dam/wknd-shared/en/adventures/yosemite-backpacking/adobestock-196967522.jpg","_publishUrl":"http://localhost:4503/content/dam/wknd-shared/en/adventures/yosemite-backpacking/adobestock-196967522.jpg","mimeType":"image/jpeg","width":1000,"height":667}}]}}}';

  return adventures;
}

function getNavMenu() {
  let menuItems = [
    { activity: "All", link: "/" },
    { activity: "Camping", link: "/Camping" },
    { activity: "Cycling", link: "/Cycling" },
    { activity: "Skiing", link: "/Skiing" },
    { activity: "Social", link: "/Social" }
  ];

  return menuItems;
}

async function getGraphQLAdventures() {
  let getData;
  let parsedAdventure;
  try {
    getData = await aemHeadlessClient.runPersistedQuery(
      "wknd-shared/adventures-all"
    );
    return getData;
  } catch (error) {
    // Handle the error any way you'd like
    console.log("error=" + error);
  }
}

async function returnAdventures() {
  let output = await getGraphQLAdventures();
  console.log("Result is" + output); // Output is 1
  return output;
}

async function getAdventuresByActivity(activity) {
  let getData;
  try {
    let query = "wknd-shared/adventures-by-activity;activity=" + activity;
    getData = await aemHeadlessClient.runPersistedQuery(query);
    return getData;
  } catch (error) {
    // Handle the error any way you'd like
    console.log("error=" + error);
  }
}

async function getAdventuresBySlug(slug) {
  console.log("in getAdventuresBySlug");
  let getData;
  let parsedAdventure;
  try {
    let query = "wknd-shared/adventure-by-slug;slug=" + slug;
    getData = await aemHeadlessClient.runPersistedQuery(query);
    return getData;
  } catch (error) {
    // Handle the error any way you'd like
    console.log("error=" + error);
  }
}

module.exports = {
  getAllAdventures,
  getGraphQLAdventures,
  getAdventuresByActivity,
  getAdventuresBySlug,
  getNavMenu
};
