
document.addEventListener("DOMContentLoaded", function () {

    const dices = document.querySelectorAll(".dice"),
        button = document.querySelector(".button"),
        winner = document.querySelector(".winner");


    function Player(name, score, total) {
        this.name = name
        this.score = score
        this.total = total
    }

    const player1 = new Player("Player 1", [], 0)
    const player2 = new Player("Player 2", [], 0)

    button.addEventListener("click", function () {
        play()

        console.log(player1.score, player2.score);
        console.log(player1.total, player2.total);
    })

    function play() {

        update()
        checkWinner(player1.score, player2.score)

    }

    function update() {
        player1.score.push(generate(dices[0]))
        player2.score.push(generate(dices[1]))
    }

    function generate(dice) {


        dice.innerHTML = "";

        let num = Math.floor(Math.random() * 7);
        if (num === 0) {
            num++
        }
        for (let i = 0; i < num; i++) {
            dice.innerHTML += "<div class='circle'></div>";
        }

        return num;

    }


    function checkWinner(arr1, arr2) {

        if (arr1.length === 3 && arr2.length === 3) {
            player1.total = arr1.reduce((a, b) => a + b, 0)
            player2.total = arr2.reduce((a, b) => a + b, 0)

            if (player1.total > player2.total) {
                winner.innerHTML = `${player1.name} wins!`
            } else if (player1.total < player2.total) {
                winner.innerHTML = `${player2.name} wins!`
            } else {
                winner.innerHTML = "Draw!"
            }
        } else {
            return;
        }



    }




})