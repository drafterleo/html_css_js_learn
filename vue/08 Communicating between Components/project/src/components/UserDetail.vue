<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: {
            userName: {
                type: String,
                required: false,
                default: 'NoName'
            },
            resetFn: Function,
            userAge: Number
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        },
        methods: {
            switchName: function () {
                // https://learn.javascript.ru/array-methods
                return this.userName.split("").reverse().join("");
            }, 
            resetName: function () {
                this.userName = "Oleg";
                this.$emit('nameWasReset', this.userName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
