<template>
  <div class="repositories">
    <article>
      <h1>Welcome to Graph of repositories</h1>
      <p>The Graph of repositories helps who want to see a graph of repositories. Just enter your Github username and select a repository.</p>
    </article>
    <section
      class="repositories--username"
      :class="{'active': step === 1}">
      <input
        type="text"
        :ref='"usernameSearch"'
        v-model="usernameSearch"
        placeholder="Type a github username.. (e.g. github)"
        @keypress.enter="getRepos"
        class="repositories--username__input">
      <button
        v-on:click="getRepos"
        class="repositories--username__button">
        <span>Search on Github with Enter</span>
        <img src="@/assets/icon/enter.svg" alt="icon" class="icon">
      </button>
      <Loading
        width="25"
        height="25"
        duration="0.2s"
        :class="{active: isReposGetting}"/>
    </section>
    <section
      class="repositories--selectbox"
      :class="{'active': step >= 2}">
      <button
        @click="stepReset"
        class="back-button">
        <img src="@/assets/icon/return-arrow.svg" alt="icon" class="icon">
        <span>Search on Github (again)</span>
      </button>
      <multiselect
        label="name"
        v-model="selectedRepostory"
        :options="repos"
        :placeholder="`Select a repository from ${usernameSearch}'s profile`"
        :searchable="true"
        :hideSelected="true"
        @input="getRepoStats">
      </multiselect>
      <Loading
        width="25"
        height="25"
        duration="0.2s"
        :class="{active: isChartDataRendering}"/>
    </section>
    <section
      class="error"
      v-if="errorType !== null "
      :class="{'warning': errorType === 'empty-profile', 'warning': errorType === 'no-data'}">

      <h2>Ooops! We have a problem.</h2>

      <!-- If profile is empty -->
      <p v-if="errorType === 'empty-profile' ">{{virtualName}} doesn't share a repository still.</p>

      <!-- If username don't exits -->
      <p v-if="errorType === 'exits' ">Github doesn't have a user like '{{virtualName}}'</p>

      <!-- Chart Error -->
      <p v-if="errorType === 'github-server' ">We can't get dataset from github Server. Can you try again later?</p>

      <!-- Username Empty -->
      <p v-if="errorType === 'username-required' ">Please enter your github username.</p>

      <!-- No Data -->
      <p v-if="errorType === 'no-data' ">There is doesn't have any data from server.</p>

    </section>
    <section
      class="repositories--chart"
      :class="{'active': step !== 1, 'fill': step === 2}"
      v-if="errorType === null">
      <Chart
        :chartData="datacollection"
        :options="chartOptions" />
      <article class="repositories--chart--placeholder" v-if="step !== 3">
        <h2>User found.</h2>
        <p>Select a repository to load data</p>
      </article>
    </section>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import Chart from "@/components/Chart.vue";
import Loading from '@/components/Loading.vue';
import axios from "axios";

export default {
  name: 'home',
  components: {
    Multiselect,
    Chart,
    Loading
  },

  data() {
    return {

      // Error Check
      errorType: null,
      virtualName: '',

      // Loading
      isReposGetting: false,
      isChartDataRendering: false,

      // Step Management For Animations
      step: 1,

      // Repositories Area
      usernameSearch: '',
      repos: [],
      selectedRepostory: null,

      // Chart Area
      datacollection: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontColor: '#000',
            defaultColor: "#000",
            defaultFontColor: "#000",
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: 'rgba(0, 0, 0, .1)',
              zeroLineColor: 'rgba(0, 0, 0, .1)'
            }
          }],
          yAxes: [{
            gridLines: {
              color: 'rgba(0, 0, 0, .1)',
            }
          }]
        }
      }

    }
  },
  methods: {
    // Step reset generally works on back buttons and doesn't want a variable for that.
    stepReset() {
      this.step = 1;
      this.errorType = null;
      this.repos = [];
      this.usernameSearch = '';
      this.selectedRepostory = null;
      this.$refs.usernameSearch.focus();
      this.datacollection = {
        labels: [],
        datasets: [
          {
            label: '',
            backgroundColor: '#5c3ebd',
            data: []
          }
        ]
      };
    },

    /*
    * username: get a string variable from the data() variables (this.usernameSearch)
    * */
    getRepos() {
      // Check to Username by the user
      if (this.usernameSearch === null || this.usernameSearch === "") {
        this.errorType = 'username-required';
        return false;
      }

      // Error Controls and Virtual Name Refreshing
      this.errorType = null;
      this.virtualName = null;
      this.isReposGetting = true;

      // Server Request
      axios
        .get(`https://api.github.com/users/${this.usernameSearch}/repos`)
        .then(response => {
          // Loading indicator closing
          this.isReposGetting = false;

          // Data checking
          if (response.data.length > 0) {
            this.repos = response.data;
            this.step = 2;
            document.activeElement.blur(); // When the page changing the focus statement, not change. We checked the focus statement here.
          } else {
            this.errorType = 'empty-profile';
            this.virtualName = this.usernameSearch;
          }
        }).catch(() => {
        // Error Handler
        this.isReposGetting = false;
        this.errorType = 'exits';
        this.virtualName = this.usernameSearch;
      })
    },

    /*
    * value: get a object from dropdown
    * username: get a string variable from the data() variables (this.usernameSearch)
    * */
    getRepoStats(value) {
      // Check to Value of Selected Element
      if (!value || value.name === null || value.name === "") {
        this.errorType = 'github-server';
        return false;
      }

      // Error Controls, Loading Inticator, and Virtual Name Refreshing
      this.errorType = null;
      this.virtualName = '';
      this.isChartDataRendering = true;

      // Server Request
      axios
        .get(`https://api.github.com/repos/${this.usernameSearch}/${value.name}/contributors`)
        .then(response => {
          // Data refreshing
          this.isChartDataRendering = false; // Loading indicator closing
          this.step = 3;
          this.datacollection = {
            labels: [],
            datasets: [
              {
                label: 'Contribution Count',
                backgroundColor: '#5c3ebd',
                data: []
              }
            ]
          }
          // Data updating from the api
          if (response.data.length === 0) {
            this.isChartDataRendering = false;
            this.errorType = 'no-data';
            this.virtualName = this.usernameSearch;
          }
          for (let i = 0; i < response.data.length; i++) {
            this.datacollection.labels.push(response.data[i].login.toString());
            this.datacollection.datasets[0].data.push(response.data[i].contributions);
          }
        }).catch(() => {
          // Error Handling
          this.isChartDataRendering = false;
          this.errorType = 'github-server';
          this.virtualName = this.usernameSearch;
        })
    },
  },
}
</script>

<style lang="scss">
  @import '@/assets/style.scss';
</style>

