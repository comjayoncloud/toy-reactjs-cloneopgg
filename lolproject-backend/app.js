const express = require("express");
const app = express();
const port = 3000;
var url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%B9%B5%EB%92%A4%EB%A5%BC%ED%9D%94%EB%93%9C%EB%A1%9D%EB%B0%94`;
app.get("/", (req, res) => {
    request({url: url,method: "GET"},
    res.send(url);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

