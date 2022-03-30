<template>
  <div>
    <GChart
      type="LineChart"
      :options="options"
      :data="collectionData"
    />    
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "GoogleGraph",
  components: {
    GChart
  },
  data() {
    return {
      collectionData: [
        ["Day", "Followers"],
        ["Sept",  860000],
        ["Oct", 780000],
        ["Nov",  1090000],
        ["Dec",  1270000],
        ["Jan",  2910000],
        ["Feb",   3640000],
        ["Mar",  3770000]
      ],
      options: {
        width: 400,
        height: 250,
        legend: 'none'
      }
    };
  }
};
</script>