const express = require("express");
const app = express();
const port = 3000;
const request = require("request");
const axios = require("axios");
const { get } = require("request");

https: app.use(express.json());

app.get("/", async (req, res) => {
  const summoner = await getSummoner(
    "%EB%B9%B5%EB%92%A4%EB%A5%BC%ED%9D%94%EB%93%9C%EB%A1%9D%EB%B0%94"
  );
  const matchIdList = await getMatchId(
    "r8N_A7VuWeYuN47DEt-R7cSj4OhNMixvqUtxUbpVKXu16fqHlf839AYHiull9_peace0C4eouLo8Yg/ids?start=0&count=20"
  );
  const match = await getMatch("KR_5910174625");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

getSummoner = async (name) => {
  // api - axios ver
  console.log("hi");
  const summoner = await axios.get(
    `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,
    {
      headers: {
        "X-Riot-Token": "put ur token",
      },
    }
  );
  console.log(summoner.data);
  return summoner.data;
};

getMatchId = async (puuid) => {
  const matchId = await axios.get(
    `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}`,
    {
      headers: {
        "X-Riot-Token": "put ur token",
      },
    }
  );
  console.log(matchId.data);
  return matchId.data;
};

getMatch = async (s) => {
  const matchInfo = await axios.get(
    `https://asia.api.riotgames.com/lol/match/v5/matches/${s}`,
    {
      headers: {
        "X-Riot-Token": "put ur token",
      },
    }
  );
  console.log(matchInfo);
  return matchInfo;
};
