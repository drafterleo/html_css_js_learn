<template>
    <div class="container">
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './Components/QuoteGrid.vue'
    import NewQuote from './Components/NewQuote.vue'

    export default {
        name: 'app',
        data: function () {
            return {
                quotes: [
                    'Just a Quote to see something',
                ],
                maxQuotes: 10
            }
        },
        components: {
            'app-quote-grid': QuoteGrid,
            'app-new-quote': NewQuote
        },
        methods: {
            newQuote: function (quote) {
                this.quotes.push(quote);
            }
        }
    }
</script>

<style>

</style>
