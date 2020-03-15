
const express = require('express');
const Info = require('./Info.js');

const app = express();

app.listen(8080, ()=>{
    console.log("Running on port 8080");
});

app.get('/apps', (req,res) => {
    let genre = req.query.genre;
    console.log(genre)
    let gameGenre = Info.filter(
        gen => {
            if(gen.Genres === genre ) {
                return gen;
            }
        }

        
    )

    let rating = req.query.rating;
    console.log(rating)
    let gameRating = gameGenre.filter(
        rat => {
            if(rat.Rating == rating ) {
                return rating;
            }
        }

        
    )
 
return res.status(200).json(gameRating);
        
})

