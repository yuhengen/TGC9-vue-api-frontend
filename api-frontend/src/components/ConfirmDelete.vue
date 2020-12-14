<template>
  <div>
    <h1>Confirm delete of fault: {{ fault.name }}</h1>
    <button @click="doDelete">OK</button>
    <router-link to="/faults">Cancel</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created: async function () {
    this.faultId = this.$route.params.id;
    let response = await axios.get(
      "https://3000-f4533735-5e29-4c56-8fac-7d98824f41c1.ws-us03.gitpod.io/faults/" +
        this.faultId
    );
    this.fault = response.data;
  },
  data: function () {
    return {
      fault: {},
      faultId: 0,
    };
  },
  methods: {
    doDelete: async function () {
      await axios.delete(
        "https://3000-f4533735-5e29-4c56-8fac-7d98824f41c1.ws-us03.gitpod.io/faults/" +
          this.faultId
      );
      alert("The fault has been deleted");
    },
  },
};
</script>

<style scoped>
</style>