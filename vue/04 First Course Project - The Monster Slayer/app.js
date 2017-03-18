new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        calcDamage: function (maxDamage, minDamage) {
            return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else
            if (this.playerHealth <= 0) {
                if (confirm('Ypu lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        attack: function () {
            this.monsterHealth -= this.calcDamage(10, 2);
            this.playerHealth -= this.calcDamage(12, 3);
            this.checkWin();
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {
            this.gameIsRunning = false;
        }
    }
});