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
        attack: function () {
            this.monsterHealth -= this.calcDamage(10, 2);
            if (this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRunning = false;
                return;
            }

            this.playerHealth -= this.calcDamage(12, 3);
            if (this.playerHealth <= 0) {
                alert('You lost!');
                this.gameIsRunning = false;
                return;
            }
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