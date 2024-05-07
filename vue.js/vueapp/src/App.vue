<template>
  <div id="app">
    <h1>Employees Name and age</h1>
    <ul>
      <li>
        <span class="head">Name</span>
        <span class="head">&nbsp;Age</span>
      </li>
      <li v-for="item in items" :key="item">
        <span class="Name">{{ item.name }}</span>
        <span class="age">&nbsp;{{ item.age }}</span>
      </li>
    </ul>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
  font-style: italic;
  font-size: 1rem;
  padding: 2rem 4rem 2rem 4rem;
}
ul {
  padding-left: 4rem;
  list-style-type: none;
}
li {
  display: flex;
  background-color: #ffe4c4;
  border: 0.1rem solid #808080;
  justify-content: space-between;
  width: 20%;
  align-items: center;
  padding: 0.5rem 0.5rem;
}
.head {
  font-weight: bold;
}
</style>
<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        { name: "Daniel", age: 25 },
        { name: "John", age: 24 },
        { name: "Jen", age: 31 },
      ],
    };
  },
};
</script>
