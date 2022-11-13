<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <ul class="navbar-nav justify-content-end ml-auto">
        <li class="nav-item">
          <b-button v-on:click="toggle" class="mr-5 mt-3 sponsor animate__animated animate__backInDown">
            <span class="grow">Sponsor Recycle Bin</span>
          </b-button>
        </li>
      </ul>
    </nav>

    <book-form v-if="showModal">
      <h3 slot="header" v-on:click="toggle">Sponsor Recycle Bin</h3>
      <!-- <h1 slot="quit" v-on:click="toggle">Exit</h1>
       -->
    </book-form>
  </div>
</template>

<script>
import BookForm from "~/components/bookForm.vue";
import { accountAddress } from "~/plugins/utils";
import { initWalletConnect } from "~/plugins/walletConnect";

export default {
  data() {
    return {
      showModal: false,
      address: null
    };
  },
  components: {
    BookForm
  },
  methods: {
    toggle() {
      this.showModal = !this.showModal;
    },
    walletConnect() {
      // TODO: connect to walletconnect
      initWalletConnect();
    }
  }
};
</script>

<style>
button.sponsor {
  background-color:rgb(21, 89, 225)
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