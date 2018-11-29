import * as express from "express";
const app = express();
import { Match } from "./match";
import { FailReason, MatchCheckReturnObject } from "./MatchCheckReturnObject";
import * as path from "path";
import * as expressHandlebars from "express-handlebars";
import * as bodyParser from "body-parser";
import { Player } from "./player";
let matchTypes: object = { Standard: [], Pro: [], Mega: [] };

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

app.post("/findmatch", function(request: Request, response: Response) {
  const info = request.body;
}):

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
