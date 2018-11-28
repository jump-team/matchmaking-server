import * as express from "express";
const app = express();
import { Match } from "./match";
import { FailReason, MatchCheckReturnObject } from "./MatchCheckReturnObject";
let matches: Match[] = [];

app.get("/", function(request: Request, response: Response) {
  response.status(200);
  response.sendFile("/app/views/index.html");
});

app.get("/ping", function(request: Request, response: Response) {
  response.status(200);
  response.send("online");
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
