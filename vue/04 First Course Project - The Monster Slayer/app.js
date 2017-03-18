new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        calcDamage: function (minDamage, maxDamage) {
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
        playerAttacks: function (min, max) {
            var damage = this.calcDamage(min, max);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage,
            });
        },
        monsterAttacks: function () {
            var damage = this.calcDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage,
            });
        },
        attack: function () {
            this.playerAttacks(2, 10);
            this.monsterAttacks();
            this.checkWin();
        },
        specialAttack: function () {
            this.playerAttacks(10, 20);
            this.monsterAttacks();
            this.checkWin();
        },
        heal: function () {
            this.playerHealth += 10;
            this.playerHealth > 100 ? this.playerHealth = 100 : 0;
            this.monsterAttacks();
            this.checkWin();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        }
    }
});