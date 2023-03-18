<template>
  <div class="main-container" >
    <div class="main-counter">
      <h1>Counter: {{ counter.count }}</h1>
      <div class="sec-one">
      <button class="btn-counter1" @click="counter.setValue(value)">Set Value</button>
      <input type="number" v-model.number="value" />
      </div>
       <div class="sec-two">
      <button class="btn-counter" @click="counter.increment()">+</button>
      <button class="btn-counter" @click="counter.reset()">Reset</button>
      <button class="btn-counter" @click="counter.decrement()">-</button>
      </div> 
      </div> 
    </div>
</template>

<script>
import useCounter from "@/composables/UseCounter";
import { ref } from "vue";

export default {
  setup() {
    const counter = useCounter();
    const value = ref(0);

    return {
      counter,
      value
    };
  },
};

</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0A1123;
  height: 100%;
  width: 100%;
  }

.main-counter {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #069AF3;
      width: 50vw;
      min-width: 420px;
      height: 100vh;
      border-radius: 0.8rem;
    }

h1 {
  font-size: 2.5rem;
  font-family: sans-serif;
}

.btn-counter {
  margin: 0 0.6rem;
  padding: 0.6rem;
  border: 0.06rem solid;
  border-radius: 0.5rem;
  color: #ccc;
  background-color: #0A1123;
  width: 6rem;
  font-size: 1.2rem;
  font-family: sans-serif;
}
.btn-counter1 {
  width: 11rem;
  height: 2.7rem;
  margin-right: 1.5rem;
  font-size: 1.2rem;
  font-family: sans-serif;
  border: 0.06rem solid #ccc;
  border-radius: 0.5rem;
  color: #ccc;
  background-color: #0A1123;
}

input {
  padding: 0.6rem;
  font-size: 1.2rem;
  border: 0.06rem solid #ccc;
  border-radius: 0.5rem;
  width: 6rem;
  height: 1.5rem;
  color: #ccc;
  background-color: #0A1123;
}

.sec-one {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.sec-two {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}


@media screens only (max-width: 1200px) {
  .main-container {
    width: 50vw;
    height: 50vh;
    margin: 0;
  }
  .main-counter {
    padding: 0;
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-direction: row;
  }
}
@media screens only max-width: 450px{
  .main-container {
  
    width: 50vw;
    height: 50vh;
    margin: 0;
  }
  .main-counter {
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-direction: row;
  }
}

</style>