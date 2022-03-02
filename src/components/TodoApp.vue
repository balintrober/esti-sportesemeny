<template>
  <h1 class="title">Regisztráció eseményre</h1>
  <div>
    <form @submit.prevent="kuld">
      <div>
        <input type="text" name="nev" v-model="nev" placeholder="Teszt Elek" />
      </div>
      <div>
        <input type="date" name="szul" v-model="szul" />
      </div>
      <div>
        <input
          type="email"
          name="email"
          v-model="email"
          placeholder="cim@domain.van"
        />
      </div>
      <div>
        <label>Nő: </label>
        <input type="radio" name="nem" v-model="nem" value="no" />
      </div>
      <div>
        <label>Férfi: </label>
        <input type="radio" name="nem" v-model="nem" value="ferfi" />
      </div>
      <div>
        <label>Feltételeket elfogadom: </label>
        <input type="checkbox" name="aszf" />
      </div>
      <div>
        <input type="submit" value="Jelentkezés" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nevezes: null,
      // {
      //   nev: "",
      //   szul: "",
      //   email: "",
      //   nem: "",
      // },
      nev: "",
      szul: "",
      email: "",
      nem: "",
    };
  },
  methods: {
    kuld() {
      this.nevezes.nev = this.nev;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>