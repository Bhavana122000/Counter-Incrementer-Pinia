<script setup lang="ts">
  import { useStore } from './counter.ts';
  const useCounterStore = useStore();
</script>

<template>
  <div class="container">
    <div class="counter"> {{ useCounterStore.count }}</div>
    <button @click="useCounterStore.decrementCounter">-</button>
    <button @click="useCounterStore.incrementCounter">+</button>
    <hr>
    <p>The value is: {{ useCounterStore.oddOrEven }}</p>
    <hr>
    <div>
      <h3>Edit counter</h3>
      <input type="number" v-model="useCounterStore.count">
    </div>
  </div>
</template>

<style>
  .counter{
    font-size: 60px;
  }

  .container{
    text-align: center;
  }
</style>
