import * as express from "express";
const app = express();
import { Match } from "./match";
import { FailReason, MatchCheckReturnObject } from "./MatchCheckReturnObject";
import * as path from "path";
import * as expressHandlebars from "express-handlebars";
import * as bodyParser from "body-parser";
import { Player } from "./player";
let matchTypes: object = { Standard: [], Pro: [], Mega: [] };
const ranges: object = { Standard: 250, Pro: 250, Mega: 500 }

app.use(bodyParser.json());
app.set("views", path.join(__dirname, "../views"));
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

app.get("/", function(request: Request, response: Response) {
  response.status(200);
  response.render("index");
});

app.get("/ping", function(request: Request, response: Response) {
  response.status(200);
  response.send("online");
});

app.post("/:type/findmatch", function(request: Request, response: Response) {
  const info = request.body;
  if (matchTypes[request.params.type]) {
    const matches = matchTypes[request.params.type]
    let bestMatch;
    for (let v of matches) {
      const returnObject = v.isGoodMatch(info.rank, ranges[request.params.type]);
      if (returnObject.success === true) {
        bestMatch = matchTypes[request.params.type][returnObject.matchId];7
        break;
      }
    }
    if (!bestMatch instanceof Match) {
      res.status(201).json({ match_found: false, retry: true })
    }
  } else {
    res.status(404).json({ match_found: false, retry: true });
  }
}):

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
