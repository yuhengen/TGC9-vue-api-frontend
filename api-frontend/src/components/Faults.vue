<template>
  <div>
    <h1>All Faults</h1>
    <button v-on:click="loadFaults">Load faults</button>
    <div>
      <label>Filter faults by title:</label>
      <input type="text" v-model="searchTitle" />
    </div>
    <div v-for="f in results" v-bind:key="f._id">
      <h2>{{ f.name }}</h2>
      <ul>
        <li>Date: {{ f.date }}</li>
        <li>Location: {{ f.location }}</li>
        <li>Block: {{ f.block }}</li>
      </ul>
      <router-link v-bind:to="getEditUrl(f)">Edit</router-link><br />
      <router-link v-bind:to="getDeleteUrl(f)">Delete</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: async function () {
    let response = await axios.get(
      "https://3000-f4533735-5e29-4c56-8fac-7d98824f41c1.ws-us03.gitpod.io/faults"
    );
    this.faults = response.data;
  },
  data: function () {
    return {
      faults: [],
      searchTitle: "",
    };
  },
  methods: {
    loadFaults: async function () {
      let response = await axios.get(
        "https://3000-f4533735-5e29-4c56-8fac-7d98824f41c1.ws-us03.gitpod.io/faults"
      );
      this.faults = response.data;
    },
    getEditUrl(fault) {
      return `/faults/${fault._id}/edit`;
    },
    getDeleteUrl(fault) {
      return `/faults/${fault._id}/delete`;
    },
  },
  computed: {
    results: function () {
      return this.faults.filter((eachFault) => {
        return eachFault.name
          .toLowerCase()
          .includes(this.searchTitle.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
</style>