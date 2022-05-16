const express = require("express");
const app = express();
const port = 3000;
const request = require("request");
const axios = require("axios");
const { get } = require("request");
const cors = require("cors");

https: app.use(express.json());

app.get("/api/allinfo", async (req, res) => {
  console.log("connected");
  const summoner = await getSummoner(
    "%EB%B9%B5%EB%92%A4%EB%A5%BC%ED%9D%94%EB%93%9C%EB%A1%9D%EB%B0%94" // name
  );
  const matchIdList = await getMatchId(
    "r8N_A7VuWeYuN47DEt-R7cSj4OhNMixvqUtxUbpVKXu16fqHlf839AYHiull9_peace0C4eouLo8Yg/ids?start=0&count=20" //puuid
  );
  const match = await getMatch("KR_5916884753");
  console.log(match);
  res.json(match);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

getSummoner = async (name) => {
  // api - axios ver

  const summoner = await axios.get(
    `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,
    {
      headers: {
        "X-Riot-Token": "api token",
      },
    }
  );
  // console.log(summoner.data);
  return summoner.data;
};

getMatchId = async (puuid) => {
  const matchId = await axios.get(
    `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}`,
    {
      headers: {
        "X-Riot-Token": "api token",
      },
    }
  );
  // console.log(matchId.data);
  return matchId.data;
};

getMatch = async (s) => {
  const matchInfo = await axios.get(
    `https://asia.api.riotgames.com/lol/match/v5/matches/${s}`,
    {
      headers: {
        "X-Riot-Token": "api token",
      },
    }
  );
  let allInfo = [
    {
      gameType: matchInfo.data.info.gameMode,
      gameResult: matchInfo.data.info.participants[9].win,
      champName: matchInfo.data.info.participants[9].championName,
      gameStat: `${matchInfo.data.info.participants[9].kills}/${matchInfo.data.info.participants[9].deaths}/${matchInfo.data.info.participants[9].assists}`,
      myTeam: [
        {
          champ: matchInfo.data.info.participants[9].championName,
          name: matchInfo.data.info.participants[9].summonerName,
        },
        {
          champ: matchInfo.data.info.participants[8].championName,
          name: matchInfo.data.info.participants[8].summonerName,
        },
        {
          champ: matchInfo.data.info.participants[7].championName,
          name: matchInfo.data.info.participants[7].summonerName,
        },
        {
          champ: matchInfo.data.info.participants[6].championName,
          name: matchInfo.data.info.participants[6].summonerName,
        },
        {
          champ: matchInfo.data.info.participants[5].championName,
          name: matchInfo.data.info.participants[5].summonerName,
        },
      ],
      notmyTeam: [
        {
          champ: matchInfo.data.info.participants[0].championName,
          name: matchInfo.data.info.participants[0].summonerName,
        },
        {
          champ: matchInfo.data.info.participants[1].championName,
          name: matchInfo.data.info.participants[1].summonerName,
        },
        {
          champ: matchInfo.data.info.participants[2].championName,
          name: matchInfo.data.info.participants[2].summonerName,
        },
        {
          champ: matchInfo.data.info.participants[3].championName,
          name: matchInfo.data.info.participants[3].summonerName,
        },
        {
          champ: matchInfo.data.info.participants[4].championName,
          name: matchInfo.data.info.participants[4].summonerName,
        },
      ],
    },
  ];
  // console.log(allInfo);
  console.log(typeof allInfo);
  return allInfo;
};

app.use(cors());
