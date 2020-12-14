<template>
  <div>
    <h1>Add a new fault</h1>
    <div>
      <label>Title:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Locaton:</label>
      <input type="text" v-model="location" />
    </div>
    <div>
      <label>Block:</label>
      <input type="text" v-model="block" />
    </div>
    <button @click="addFault">Add new fault</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      title: "",
      location: "",
      block: "",
    };
  },
  methods: {
    addFault: async function () {
      await axios.post(
        "https://3000-f4533735-5e29-4c56-8fac-7d98824f41c1.ws-us03.gitpod.io/faults",
        {
          name: this.name,
          location: this.location,
          block: this.block,
          date: new Date(),
        }
      );

      this.name = "";
      this.location = "";
      this.block = "";
      alert("New fault has been reported");
    },
  },
};
</script>