<template>
  <div class="container m-5">
    <head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
    <div>
      <h1 class="title animate__animated animate__bounce">RecycleTRON</h1>
      <div class="row">
        <div class="m-3" v-for="post in posts">
          <card :bookObject="post" key="post.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "~/components/card.vue";
import { fetchAllBooks ,setLibraryContract, getTronWeb } from "~/plugins/utils"
import { sampleTx } from "~/plugins/walletConnect"

export default {
  components: {
    card
  },
  async mounted() {

    // init contract object
    await setLibraryContract();
    // fetch all books
    const books = await fetchAllBooks();
    this.posts = books;
    
    // get tronWeb object 
    getTronWeb();
    
    // Wait a while to ensure tronweb object has already injected
    setTimeout(async ()=>{
        // init contract object
        await setLibraryContract();
        
        console.log("Begin to obtain the books information");
        // fetch all books
        const books = await fetchAllBooks();
        this.posts = books;
        console.log("The total number of Books: "+ books.length);
        
    },50);

  },
  data() {
    return {
      posts: [
      ]
    };
  },
  methods: {
    async sendTx() {
      await sampleTx()
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: bold;
  font-size: 100px;
  color: #17ce4e;
  letter-spacing: 1px;
}
.subtitle {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 150;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
