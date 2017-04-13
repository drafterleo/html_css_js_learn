<template>
    <div class="container">
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
            </div>
        </div>
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
            newQuote (quote) {
                this.quotes.push(quote);
            },
            deleteQuote (index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>

</style>
