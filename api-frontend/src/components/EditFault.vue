<template>
  <div>
    <h1>Edit Fault</h1>
    <div>
      <label>Title:</label>
      <input type="text" v-model="fault.name" />
    </div>
    <div>
      <label>Locaton:</label>
      <input type="text" v-model="fault.location" />
    </div>
    <div>
      <label>Block:</label>
      <input type="text" v-model="fault.block" />
    </div>
    <button @click="updateFault">Update fault</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      faultId: "",
      fault: {},
    };
  },
  methods: {
    updateFault: async function () {
      await axios.patch(
        "https://3000-f4533735-5e29-4c56-8fac-7d98824f41c1.ws-us03.gitpod.io/faults/" +
          this.faultId,
        this.fault
      );
      this.fault.name = "";
      this.fault.location = "";
      this.fault.block = "";
      alert("Fault has been updated");
    },
  },
  created: async function () {
    this.faultId = this.$route.params.id;
    let response = await axios.get(
      "https://3000-f4533735-5e29-4c56-8fac-7d98824f41c1.ws-us03.gitpod.io/faults/" +
        this.faultId
    );
    this.fault = response.data;
  },
  watch: {
    $route: async function () {
      this.faultId = this.$route.params.id;
      let response = await axios.get(
        "https://3000-f4533735-5e29-4c56-8fac-7d98824f41c1.ws-us03.gitpod.io/faults/" +
          this.faultId
      );
      this.fault = response.data;
    },
  },
};
</script>
<style scoped>
</style>