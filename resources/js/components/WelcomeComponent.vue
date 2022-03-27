<template>
    <section class="light-background">
        <div class="container">
            <h2 class="title text-center">Our Products</h2>
            <div class="grid-1-2-3-4">
                <div v-for="product in products" v-bind:key="product.id" class="boxed text-center product">
                    <img class=img-responsive src="/images/product.png" alt="">
                    <p>{{ product.title }}</p>
                    <p class="price margin-top">{{ product.price }}$</p>
                    <div class="margin-top">
                        <a :href="'/products/'+product.id" class="button">View</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        products_prop: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            products: this.products_prop
        }
    }
}
</script>
