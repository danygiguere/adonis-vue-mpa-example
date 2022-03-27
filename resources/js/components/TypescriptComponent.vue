<template>
    <section class="light-background">
        <div class="container text-center">
            <p>Typescript component</p>
            <button @click="increment">click me: {{ count }}</button>
        </div>
    </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
    setup() {
        let count = ref(0)

        function increment(){
            this.count = add(this.count, 1)
        }
        function add(x: number, y: number): number {
            return x + y
        }

        return {
            count, 
            increment,
            add
        }
    }
})
</script>
