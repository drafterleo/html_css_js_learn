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
                if (confirm('You lost! New Game?')) {
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
            this.playerHealth -= this.calcDamage(12, 5);
            this.checkWin();
        },
        specialAttack: function () {
            this.monsterHealth -= this.calcDamage(20, 10);
            this.playerHealth -= this.calcDamage(12, 5);
            this.checkWin();
        },
        heal: function () {
            this.playerHealth += 10;
            this.playerHealth > 100 ? this.playerHealth = 100 : 0;
            this.playerHealth -= this.calcDamage(12, 5); // monster attack;
            this.checkWin();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        }
    }
});