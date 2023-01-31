<template>
  <div class="container">
    <h1> Counter: {{ counter }}</h1>
    <div class="d-flex">
    <button @click="onIncrement" class="btn btn-success">
      Qo'shish
    </button>
    <button @click="onDecrement" class="btn btn-danger" >
      O'chirish 
    </button>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1
    }
  },
  methods: {
    onIncrement() {
      this.counter += 1
    },
    onDecrement() {
      this.counter -= 1
    }
  }
}
</script>

