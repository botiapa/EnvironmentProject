const numberOfChoices = 10;

var quizzes = $(".quiz-container");
var currentQuizId = 0
var correctChoices = 0;

$(".quiz-button").each(function(index) {
    $(this).click(function() {
        console.log("a");
        if(currentQuizId+1 == numberOfChoices) {
            // DISPLAY SCORE
        }
        else {
            // Disable buttons so they can't be spammed
            $("button",quizzes[currentQuizId]).attr("disabled", "disabled");

            $(quizzes[currentQuizId]).css("opacity", "0");
            if($(this).hasClass("correct"))
                correctChoices++;
    
            setTimeout(() => {
                $(quizzes[currentQuizId++]).css("display", "none");
    
                $(quizzes[currentQuizId]).css("opacity", "0");
                $(quizzes[currentQuizId]).css("display", "block");
                setTimeout(() => { // Workaround: The browser needs some time to catch up
                    $(quizzes[currentQuizId]).css("opacity", "1");
                }, 10);
            }, 500);
        }
    });
})