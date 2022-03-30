<template>
  <div>
     <GChart type="ColumnChart"
      :options="options"
      :data="data" />
  </div>
</template>
 
<script>
import { GChart } from "vue-google-charts";
export default {
  name: "GoogleChart",
  components: {
    GChart
  },
//   computed: {
//     numFollowers() {
//         let followers = [];
//         for (let i = 0; i < 5; i++){
//             followers[i] = Math.floor(Math.random() * 1000) + 1;
//         }
//         return followers
//       }
//   },
//   methods: {
//     followerAt : function(i) {
//         let followers = this.numFollowers;
//         console.log(followers[i]);
//         return followers[i]
//       }
//   },
  data() {
    return {
      data: [
         ['Element', 'Density', { role: 'style' }],
         ['November', 2096, '#9856c8'],
         ['December', 3117, '#9856c8'],
         ['January', 3104, '#9856c8'],
         ['February', 4098, '#9856c8' ],
         ['March', 6738, '#9856c8' ]
      ],
      options: {
        width: 400,
        height: 250,
        legend: 'none',
        crosshair: {
            orientation: 'both'
        }
      }
    };
  },

};
</script>