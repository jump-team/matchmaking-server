// where your node app starts
// init project

import * as express from "express"
const app = express()
import { Match } from "./match"
let matches: Match[] = []
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request: Request, response: Response) {
  response.status(200)
  response.send("Server online")
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port)
})