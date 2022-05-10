const express = require("express");
const app = express();
const port = 3000;
const request = require("request");
const axios = require("axios");

https: app.use(express.json());

app.get("/", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// api - axios ver
axios({
  url: "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%B9%B5%EB%92%A4%EB%A5%BC%ED%9D%94%EB%93%9C%EB%A1%9D%EB%B0%94", // 통신할 웹문서
  method: "get", // 통신할 방식
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
    "Accept-Language": "ko-KR,ko;q=0.9,en-GB;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    Origin: "https://developer.riotgames.com",
    "X-Riot-Token": "put ur token ",
  },
  responseType: "json",
}).then(function (res) {
  console.log(res.headers);
  console.log(res.data);
});

// api - request ver
// const options = {
//   uri: "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%B9%B5%EB%92%A4%EB%A5%BC%ED%9D%94%EB%93%9C%EB%A1%9D%EB%B0%94",
//   method: "GET",
//   json: true,
//   headers: {
//     "User-Agent":
//       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
//     "Accept-Language": "ko-KR,ko;q=0.9,en-GB;q=0.8,en;q=0.7",
//     "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
//     Origin: "https://developer.riotgames.com",
//     "X-Riot-Token": " put ur token ",
//   },
// };

// request.get(options, function (req, res) {
//   console.log(res.headers);
//   console.log(res.body);
//   headers = res.headers;
//   body = res.body;
// });
