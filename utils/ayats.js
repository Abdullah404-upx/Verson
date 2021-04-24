
function getRandomAyah(ayats){
    
    let verseIndex = Math.floor((Math.random() * 6236) + 1);
    return {content: ayats[verseIndex].content, verseNumber: verseIndex};
}

function getAyah(ayats, ...args){ // 
    if(args.length > 2) return;

    if(args.length == 1){
        
        return ayats[args[0]].content
    }else{

    let x = ayats.filter(ver =>  ver.surah_number == args[0] && ver.verse_number == args[1] );
    console.log("something here");
    return x[0].content;
}
        
}



module.exports = {
    getRandomAyah,
    getAyah,
    
}