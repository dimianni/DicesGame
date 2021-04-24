
document.addEventListener("DOMContentLoaded", function () {

    const dices = document.querySelectorAll(".dice"),
        rollBtn = document.querySelector(".button"),
        winner = document.querySelector(".winner"),
        board = document.querySelector(".board-wrapper"),
        initBtn = document.querySelector(".board-start");

    let round = 0;

    function Player(name, score, total) {
        this.name = name
        this.score = score
        this.total = total
    }

    const player1 = new Player("Player 1", [], 0)
    const player2 = new Player("Player 2", [], 0)

    // Start button pressed
    initBtn.addEventListener("click", function () {
        board.classList.add("active")
        this.style.display = "none"
    })

    // Roll button pressed
    rollBtn.addEventListener("click", function () {
        record(player1.score, player2.score)
        round++;

        if (round === 3) checkWinner(player1.score, player2.score)

    })

    function record(arr1, arr2) {
        arr1.push(generate(dices[0]))
        arr2.push(generate(dices[1]))
    }

    function generate(dice) {

        dice.innerHTML = "";

        let num = Math.floor(Math.random() * 7);

        if (num === 0) num++;

        for (let i = 0; i < num; i++) {
            dice.innerHTML += "<div class='circle'></div>";
        }

        return num;
    }

    function checkWinner(arr1, arr2) {

        player1.total = arr1.reduce((a, b) => a + b, 0)
        player2.total = arr2.reduce((a, b) => a + b, 0)

        rollBtn.style.display = "none"
        winner.classList.add("active")

        if (player1.total > player2.total) {
            winner.innerHTML = `${player1.name} wins!`
        } else if (player1.total < player2.total) {
            winner.innerHTML = `${player2.name} wins!`
        } else {
            winner.innerHTML = "Draw!"
        }

    }

})