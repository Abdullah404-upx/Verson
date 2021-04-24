const express = require("express");
const app = express();
const fetcher = require("./utils/fetcher");
require("dotenv").config();
let ayats = require("./utils/ayats");

let handlebars = require("express-handlebars").create({
  defaultLayout: "main",
  extname: ".hbs",
});
app.engine(".hbs", handlebars.engine);

app.use(express.json()); // parse the body into json format

app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", ".hbs"); // view eninge

const port = process.env.PORT || 3000;
let Ayat, Surahs;

app.listen(port, (e) => {
  console.log("listening...");
});

app.use((req, res, next) => {
  fetcher.dataFetcher(process.env.CHAPTERS).then((res) => {
    Surahs = res;
    next();
  });
});

app.use((req, res, next) => {
  fetcher.dataFetcher(process.env.VERSES).then((res) => {
    Ayat = res;
    next();
  });
});

// app.get("/:surah/:ayah", (req, res) => {
//   console.log(req.params);
//   let surah = req.params.surah;
//   let ayah = req.params.ayah;

//   console.log("on it wasy");
//   res.render("board", { content: "dhgs" });
// });

app.get("/", (req, res) => {
  //let randomverse = "random-verse" works
  res.redirect("/random-verse");
});
app.get("/random-verse", (req, res) => {
  let { content, verseNumber } = ayats.getRandomAyah(Ayat);

  res.render("board", {
    theVerses: JSON.stringify(Ayat),
    content: content,
    verseNumber: verseNumber,
    surahs_info: JSON.stringify(Surahs),
  });
});

// https://unpkg.com/quran-json@1.0.1/json/translations/en.json

// API
app.get("/api/surahs", (req, res) => {
  res.json(Surahs);
});

app.get("/api/:surah/:ayah", (req, res) => {
  let { ayah, surah } = req.params;
  if (isNaN(ayah) && isNaN(surah)) console.log("helllo");
  else {
    console.log(ayah, surah);
    let ayahContent = ayats.getAyah(Ayat, surah, ayah);
    res.json({
      content: ayahContent,
      surah: Surahs[surah].name,
    });
  }
});
app.get("/api/random", (req, res) => {
  res.json({
    content: ayats.getRandomAyah(Ayat)})
});

/// app.use('/api', router)

app.use((req, res) => {
  res.render("404", { layout: "404" });
});
