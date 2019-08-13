var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/sdl/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i; botRegexTw = /^\/twitch/i; botRegexSb = /^\/spicy/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; botRegexOW = /^\/ratings/;
      botRegexSlut = /^\/slut/; botRegexStop = /^\/stop/;
      botRegexProp = /^\/prop/; botRegexKys = /^\/kys/; botRegexSpcy = /^\/spicey/; botRegexBrye = /^\/brye/;
      botRegexGian = /^\/gian/; botRegexScrotes = /^\/scrotes/; botRegexShaki = /^\/shaki/;
      botRegexDaf = /^\/dafuq/; botRegexMA32 = /^\/pending/; botRegexTrade = /^\/trade/; botRegexIce = /^\/icy/; botRegexIce2 = /^\/icy2/;
      botRegexIce3 = /^\/icy3/; botRegexJohnny = /^\/johnny time/; botRegexJoe = /^\/joeee flaccooo/; botRegexLost = /^\/I lost/;
      botRegexWon = /^\/I won/; botRegexCards = /^\/cards/; botRegexHawks = /^\/hawks/; botRegexCue = /^\/cue it up/; botRegexWut = /^\/wut?/;
      botRegexNext = /^\/next year/; botRegexBane = /^\/dolphins/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexSlut.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/640x364.jpeg.f8a0e216bf7e42ed9a86b3ae23cc2ff1.large");
    this.res.end();
  }https://github.com/berowsk
  else if(request.text && botRegexBane.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/3oKIPocxpTYMm0zQcw/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexJoe.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media0.giphy.com/media/12M1FrSEUbPwGY/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexIce.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/FzRA0A2.gif");
    this.res.end();
  }
  else if(request.text && botRegexHawks.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media1.giphy.com/media/4rGdj6mKd4Wru/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCards.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media3.giphy.com/media/gL7NTbPU2TC36/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexNext.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://im2.ezgif.com/tmp/ezgif-2-2e5435a57b.gif");
    this.res.end();
  }
  else if(request.text && botRegexCue.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.sharegif.com/wp-content/uploads/2014/04/wwfsuck-it.gif");
    this.res.end();
  }
  else if(request.text && botRegexWut.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media2.giphy.com/media/5hHy4i1YoiyIw/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexJohnny.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/blSe3wgKswJX2/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexIce2.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://25.media.tumblr.com/d2a29d990cca9de4cd4260c15545ac6f/tumblr_mpyn0k7syX1ra7vneo1_400.gif");
    this.res.end();
  }
  else if(request.text && botRegexWon.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/xUPGcCSglJXB5WR6bC/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexLost.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media0.giphy.com/media/H9cX8gxKmlFh6/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexIce3.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://mrwgifs.com/wp-content/uploads/2013/11/Vanilla-Ice-Freaky-Dance-Reaction-Gif.gif");
    this.res.end();
  }
  else if(request.text && botRegexStop.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Stop appropriating black culture");
    this.res.end();
  }
  else if(request.text && botRegexProp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/409x327.jpeg.08b5d95c51bb4897835cfe6b514f2f52.large");
    this.res.end();
  }
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.wikihow.com/Tie-a-Noose");
    this.res.end();
  }
  else if(request.text && botRegexSpcy.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/btEhrTJ.gif");
    this.res.end();
  }
  else if(request.text && botRegexDaf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/facebook/000/787/356/d6f.jpg");
    this.res.end();
  }
  else if(request.text && botRegexBrye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/600x490.jpeg.b31d5153fb474d9bb18dd51b3d650afe.large");
    this.res.end();
  }
  else if(request.text && botRegexGian.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/9V6ZnvD.png");
    this.res.end();
  }
  else if(request.text && botRegexScrotes.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1006x1340.jpeg.730381e4280e4028b8375432af14f39f.large");
    this.res.end();
  }
  else if(request.text && botRegexShaki.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/305x375.jpeg.a8dd3aa18c7a4963a553e6dc16bcb100.large");
    this.res.end();
  }
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
    postMessage("http://daddyleagues.com/RML2018/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  }
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.leagues.com/maddenrating/");
    this.res.end();
  }
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  }
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/rml2018/rules");
    this.res.end();
  }
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  }
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/RML2018/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/RML2018/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  }
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/btEhrTJ.gif");
    this.res.end();
  }
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  }
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1zRLaUZ12vUOORFdNQbPCzJW5T0zFBrkth_osH9b7d34/edit?usp=drivesdk");
    this.res.end();
  }
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  }
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexMA32.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/rml2018/forum/forum/7115");
    this.res.end();
  }
  else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/rml2018/forum/forum/7115");
    this.res.end();
  }
  
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}
function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message ' + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message ' + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
