<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-quote>
                    <h2>The Quote</h2>
                    <p>A wonderful Quote!</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';

    export default {
        components: {
            'app-quote': Quote
        }
    }
</script>

<style>
</style>
