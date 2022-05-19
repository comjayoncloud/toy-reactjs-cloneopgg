const express = require("express");
const app = express();
const port = 8080;
const request = require("request");
const axios = require("axios");
const { get } = require("request");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/allinfo", async (req, res) => {
  console.log("connected");
  const summoner = await getSummoner(
    "%EB%B9%B5%EB%92%A4%EB%A5%BC%ED%9D%94%EB%93%9C%EB%A1%9D%EB%B0%94" // name
  );
  console.log(summoner);
  const matchIdList = await getMatchId(
    "r8N_A7VuWeYuN47DEt-R7cSj4OhNMixvqUtxUbpVKXu16fqHlf839AYHiull9_peace0C4eouLo8Yg/ids?start=0&count=20" //puuid
  );
  console.log(matchIdList);
  const matchList = [];

  for (const matchId of matchIdList) {
    try {
      console.log(matchId);
      matchList.push(await getMatch(matchId));
    } catch (e) {
      console.error(e);
    }
  }

  console.log(matchList);

  res.json(matchList);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

getSummoner = async (name) => {
  // api - axios ver

  const url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`;
  // console.log

  const summoner = await axios.get(url, {
    headers: {
      "X-Riot-Token": "RGAPI-864d61be-5d5e-41e1-a1b4-497631285277",
    },
  });
  // console.log(summoner.data);
  return summoner.data;
};

getMatchId = async (puuid) => {
  const matchId = await axios.get(
    `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}`,
    {
      headers: {
        "X-Riot-Token": "RGAPI-864d61be-5d5e-41e1-a1b4-497631285277",
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
        "X-Riot-Token": "RGAPI-864d61be-5d5e-41e1-a1b4-497631285277",
      },
    }
  );

  if (matchInfo.data.info.gameMode == "ARAM") {
    matchInfo.data.info.gameMode = "무작위총력전";
  }
  if (matchInfo.data.info.participants[9].win == false) {
    matchInfo.data.info.participants[9].win = "패";
  } else matchInfo.data.info.participants[9].win = "승";

  let allInfo = {
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
  };
  console.log(allInfo);
  // console.log(typeof allInfo);
  return allInfo;
};
