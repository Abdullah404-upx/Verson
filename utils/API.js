// const express = require('express')
// const router = express.Router();




// router.use((req,res,next)=>{ 
//     console.log("from the api call")
//     fetch("https://unpkg.com/quran-json@1.0.1/json/quran/text.json")
// .then((verses) => verses.json())
// .then((verses) => {
//   Ayat = verses;
//   console.log(Ayat[0])
//   next()
// })
// .catch(err=> {
//     console.log("err", err)
//     res.render("500", {layout: "500"});
    
    
//     console.log("didn't render it")
// })

// })
  
  

// router.use((req,res,next)=>{
//     fetch('https://raw.githubusercontent.com/Abdullah404-upx/scripto-/main/surahs.json')
//     .then(response => {
//        // console.log(response)
//        return response.json();
//     })
//     .then(data => {Surahs = data; next()})
//     .catch(err=>console.log(err, "haha"))
    
// })
  
// console.log('ho')


// router.get('/', (req,res)=>{
//     res.send("hello this is the hoime page of api router")
// })
// router.get('/surahs', (req,res)=>{
//     console.log("here?")
//   res.json(Surahs)
// })

// router.get('/:ayah/:surah', (req,res)=>{
//     res.json();
// })
// router.get('/:ayah', (req,res)=>{

// })

// router.get('/surahs/:surahNumber', (req,res)=>{

//     res.json(Surahs[req.params.surahNumber])
//   })

// router.get('/', (req,res)=>{
//     res.send("hi from o")
// })

// module.exports = router