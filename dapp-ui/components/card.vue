<template>
 

  <div>
    <head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
    <div class="card animate__bounceIn" style="width: 18rem;">
      <img class="card-img-top" src="~/assets/recycle.jpeg" alt="Card image cap" />
      <div class="card-body">
        <!-- <h4 class="card-title">Price: {{bookObject.price}}</h4> -->
        <h5 class="card-title">Location: {{bookObject.name}}</h5>
        <p class="card-text">Capacity: {{bookObject.description}}</p>
        <!-- <p class="card-text">Checked  Counter: {{bookObject.counter}}</p> -->
        <button class="btn btn-primary grow" id="quick" v-on:click="displayDetails">View</button>
      </div>
    </div>
    <details-modal v-if="showModal" :bookData="bookObject">
    </details-modal>
  </div>
</template>

<script>
import DetailsModal from "~/components/detailsModal.vue";

export default {
  props: ["bookObject"],
  data() {
    return {
      showModal: false
    }
  },
  components: {
    DetailsModal
  },
  methods: {
    displayDetails() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style>
.card {
  border: 1px solid #13a03d;
  border-radius: 10px;
}

.grow:hover {
  -webkit-animation:fontbulger 2s infinite;
   -moz-animation:fontbulger 2s infinite;
   -o-animation:fontbulger 2s infinite;
   animation:fontbulger 2s infinite;
}

@-webkit-keyframes fontbulger  {
   0% {
      font-size:16px;
   }
   
   100% {
      font-size:21px;
   }

}
</style>
