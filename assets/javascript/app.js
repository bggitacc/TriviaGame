var game = {

    correct: 0,
    wrong: 0,

//  QUESTION ARRAY

    question: [
        ["The song 'Hazy Shade of Winter', recorded by the Bangles, was included on which movie soundtrack?", "Rush", "Less Than Zero", "The Breakfast Club", "Youngblood", [false, true, false, false]],
        ["Who joined Michael Jackson on vocals in the song 'Say Say Say'?", "Paul McCartney", "Elton John", "Stivie Wonder", "Boy George", [false, true, false, false]],
        ["Who sang 'I Know What Boys Like'?", "Bow Wow Wow", "The Waitresses", "Bananarama", "Cyndi Lauper", [false, false, true, false]],
        ["In the Violent Femmes song 'Kiss Off', he takes 'one cuz you left me...'. Why does he take eight?", "His Sorrow", "His Headache", "Everything", "He Forgets", [false, false, false, true]],
        ["Which 80's band's members were named Simon, Nick, John, Andy and Roger?", "Flock Of Seagulls", "Duran Duran", "Kajagoogoo", "Thompson Twins", [false, true, false, false]],
        ["Which 'I Think We're Alone Now' singer gained recognition by performing at shopping malls?", "Debbie Gibson", "Tiffany", "Madonna", "Sinead O'connor", [false, true, false, false]],
        ["Frank Zappa sang 'Valley Girl' with the help of his daughter. What is her name?", "Rainbow", "Moon Unit", "Sun Beam", "Space Rocket", [false, true, false, false]],
        ["Who sang the hit 'Tainted Love'?", "Spandau Ballet", "Erasure", "Soft Cell", "Tommy Tutone", [false, true, false, false]],
        ["Who sang the party hit 'Rock Lobster'?", "10,000 Maniacs", "They Might Be Giants", "Debbi Gibson", "The B52's", [false, false, false, true]],
        ["In the Stray Cats song, she's sexy and.. how old?", "16", "Jailbait", "18", "17", [false, false, false, true]]
    ],

    // Function to update counters on all elements with class counter

    timer: function() {

        $('.countdown').each(function() {
            var count = parseInt($(this).html());
            if (count !== 0) {
                $(this).html(count - 1);
            } else {

                game.results();
            }
        })
    },

// START TIMER

    startTimer: function() {

        $("#start").hide();
        $(".countdown").show();
        $("#stop").show();
        $("#footer").show();
        $("#field").show();
        $("#clockLabel").html("<h4 class='text-center'><strong class='timeleft'>Time Remaining</strong></h4>")
        this.listQuestion();
        myTimer = setInterval(this.timer, 1000);


    },


// STOP TIMER

    stopTimer: function() {

        clearInterval(myTimer);

        this.results();
    },

    // CREATE FORM


    listQuestion: function() {

        for (i = 0; i < this.question.length; i++) {


            var x = 0;


            var qText = "<fieldset class='form-group'><legend class='question'>" + this.question[i][x] + "</legend>";



            qText += "<div class='form-check'><label class='form-check-label'><input type='radio' name='" + i + "' class='form-check-input' id='questionA" + i + "' data-aIndex = '0' value='op1'>  " + this.question[i][1] + "</label></div>";



            qText += "<div class='form-check'><label class='form-check-label'><input type='radio' name='" + i + "' class='form-check-input' id='questionB" + i + "' data-aIndex = '1' value='op2'>  " + this.question[i][2] + "</label></div>";



            qText += "<div class='form-check'><label class='form-check-label'><input type='radio' name='" + i + "' class='form-check-input' id='questionC" + i + "' data-aIndex = '2' value='op3'>  " + this.question[i][3] + "</label></div>";



            qText += "<div class='form-check'><label class='form-check-label'><input type='radio' name='" + i + "' class='form-check-input' id='questionD" + i + "' data-aIndex = '3' value='op4'>  " + this.question[i][4] + "</label></div></fieldset>";



            $("#field").append(qText);



        }
    },

//  RESULTS FUNCTION

    results: function() {

        clearInterval(myTimer);

        $("#stop").hide();
        $(".countdown").hide();
        $("#clockLabel").hide();
        $(".form-group").hide();
        $("#footer").hide();
        $("#field").hide();

        var selectedInput = $("input[type=radio]:checked")

        var noAnswer = parseInt(selectedInput.length);
        noAnswer = (10 - noAnswer);

        for (i = 0; i < selectedInput.length; i++) {



            var qIndex = parseInt($(selectedInput[i]).attr("name"));
            var qProp = parseInt($(selectedInput[i]).attr("data-aindex"));
            var aProp = this.question[qIndex][5][qProp];

            if (aProp) {
                this.correct++;
            }


        }

        this.wrong = 10 - this.correct;

        $("#jumboL").html("<br><h3 class='text-center'><strong class='timeleft'>Correct     :   " + this.correct + "</strong></h3><br>")

        $("#jumboLabel").html("<br><h3 class='text-center'><strong class='timeleft'>Wrong   :   " + this.wrong + "</strong></h3><br>")

        $("#unanswered").html("<br><h3 class='text-center'><strong class='timeleft'>Not Answered   :   " + noAnswer + "</strong></h3><br>")



        console.log(this.correct);
        console.log(this.wrong);

    },

}


//  EVENT LISTENERS

$(document).ready(function() {


    $("#stop").on("click", function(event) {

        game.stopTimer();

    });

    $("#start").on("click", function(event) {
        console.log("hello");
        game.startTimer();

    });

});