// (function() {
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }

//   Question.prototype.displayQuestion = function() {
//     console.log(this.question);

//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ': ' + this.answers[i]);
//     }
//   };

//   Question.prototype.checkAnswer = function(ans) {
//     if (ans === this.correct) {
//       console.log('Correct answer!');
//     } else {
//       console.log('Wrong answer. Try again :)');
//     }
//   };

//   var q1 = new Question(
//     'Is Javascript the coolest programming language in the world?',
//     ['Yes', 'No'],
//     0
//   );

//   var q2 = new Question(
//     "What is the name of this course's teacher?",
//     ['John', 'Michael', 'Jonas'],
//     2
//   );

//   var q3 = new Question(
//     'What does best describe coding?',
//     ['Boring', 'Hard', 'Fun', 'Tedious'],
//     2
//   );

//   var questions = [q1, q2, q3];

//   var n = Math.floor(Math.random() * questions.length);

//   questions[n].displayQuestion();

//   var answer = parseInt(prompt('Please select the correct answer.'));

//   questions[n].checkAnswer(answer);
// })();

// Expert level

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;

    if (ans === this.correct) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer. Try again :)');

      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('---------------------');
  };

  var q1 = new Question(
    'Is Javascript the coolest programming language in the world?',
    ['Yes', 'No'],
    0
  );

  var q2 = new Question(
    "What is the name of this course's teacher?",
    ['John', 'Michael', 'Jonas'],
    2
  );

  var q3 = new Question(
    'What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tedious'],
    2
  );

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');

    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }

  nextQuestion();
})();
