    window.onload = function() {
        var words = [
            ["m", "a", "r", "i", "o", "1"],
            ["l", "u", "i", "g", "i", "1", "2"],
            ["t", "o", "a", "d"],
            ["p", "r", "i", "n", "c", "e", "s", "s"],
            ["p", "e", "a", "c", "h"]
        ]
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        var random = Math.floor((Math.random() * (words.length - 1)));
        var chosenWord = words[random];
        var guessSpace = new Array(chosenWord.length);

        console.log(chosenWord);

        var buttons = function() {
            myButtons = document.getElementById('buttons');
            letters = document.createElement('ul');

            for (var i = 0; i < alphabet.length; i++) {
                letters.id = 'alphabet';
                list = document.createElement('li');
                list.id = 'letter';
                list.innerHTML = alphabet[i];
                // check();
                myButtons.appendChild(letters);
                letters.appendChild(list);
            }
        }

        

        for (var i = 0; i < guessSpace.length; i++) {
            guessSpace[i] = "__ ";
        }

        $("#wordspaces").append(guessSpace[i]);

        function printGuessspace() {
            for (var i = 0; i < guessSpace.length; i++) {

                $("#wordspaces").append(guessSpace[i]);
            }
        }

        buttons();
        printGuessspace();
    }


