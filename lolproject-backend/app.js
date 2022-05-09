const express = require("express");
const app = express();
const port = 3000;
const request = require("request");

app.get("/", (req, res) => {
  res.send(url);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

const options = {
  uri: "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%B9%B5%EB%92%A4%EB%A5%BC%ED%9D%94%EB%93%9C%EB%A1%9D%EB%B0%94",
  method: "GET",
  json: true,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
    "Accept-Language": "ko-KR,ko;q=0.9,en-GB;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    Origin: "https://developer.riotgames.com",
    "X-Riot-Token": "",
  },
};
request.get(options, function (err, response, body) {
  console.log(response);
});
