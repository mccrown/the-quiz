var highscore = [];
var scoreWrapper = document.querySelector("#score-wrapper");

var loadScores = function() {
    var highscore = localStorage.getItem("highscore", highscore);
    
    if (!highscore) {
        highscore = [];
        return false;
    }

    highscore = JSON.parse(highscore);

    for (i = 0; i < highscore.length; i++) {

            
            var highscoresInfoEl = document.createElement("div");
            highscoresInfoEl.className = "score-list";
            
            var list = document.createElement("li");
            list.className = "score";
            list.innerHTML =  "Name: " + highscore[i].initials + " Score: " + highscore[i].score;

            highscoresInfoEl.appendChild(list);
            scoreWrapper.appendChild(highscoresInfoEl);

            console.log(highscoresInfoEl);


            
        };
        
}

loadScores();