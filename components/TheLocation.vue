<template>
  <main class="container">
    <h1 class="mt0 regular center pageTitle">Location</h1>
    <section id="accommodations">
      <h2 class="center">Accommodations</h2>
      <ol class="list-reset m0">
        <li
          :key="i"
          class="card"
          v-for="(place, i) in accommodations"
        >
          <p class="center">{{ place.name }}</p>
          <figure>
            <img
              :alt="place.name"
              :src="profilePic(place.pic.filename)"
            />
            <figcaption>{{ place.blurb }}</figcaption>
          </figure>
        </li>
      </ol>
    </section>
    <TheLocationMap></TheLocationMap>
  </main>
</template>

<script>
import imagesSet from "../img/location/*.*";

import TheLocationMap from "./TheLocationMap.vue";

export default {
  data() {
    return {
      accommodations: [
        {
          name: "Hilton Garden Inn",
          address: "Congress and Cajundome",
          url:
            "https://hiltongardeninn3.hilton.com/en/hotels/louisiana/hilton-garden-inn-lafayette-cajundome-LFTCDGI/index.html",
          pic: {
            filename: "hilton.jpg",
            source:
              "https://s3-media3.fl.yelpcdn.com/bphoto/T3W1hxPFNGYV-5yku1VZkw/o.jpg"
          },
          blurb:
            "Just across the street from Erin’s parents, you’ll be able to walk home after the after party."
        },
        {
          name: "Blue Moon Guest House",
          address: "215 East Convent Street, Lafayette, LA",
          url: "https://bluemoonpresents.com/web/book-a-room/",
          pic: {
            filename: "blue-moon.jpg",
            source:
              "https://thumbnails.trvl-media.com/nj7zpwYlVMPO2Ndr5w86cJvYsHA=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/21000000/20330000/20320800/20320728/4c22351b_z.jpg"
          },
          blurb:
            "A hostel that we’ve always wanted to stay in but never had a good excuse to. Lots of good live music here, too."
        },
        {
          name: "Air BnB",
          address: "215 East Convent Street, Lafayette, LA",
          url: "https://bluemoonpresents.com/web/book-a-room/",
          pic: {
            filename: "blue-moon.jpg",
            source:
              "https://thumbnails.trvl-media.com/nj7zpwYlVMPO2Ndr5w86cJvYsHA=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/21000000/20330000/20320800/20320728/4c22351b_z.jpg"
          },
          blurb:
            "Check out our old neighborhood, the Saint Streets (south west Lafayette)"
        }
      ]
    };
  },
  components: { TheLocationMap },
  methods: {
    profilePic(filename) {
      const name = filename.split(".")[0];
      const ext = filename.split(".")[1];
      return imagesSet[name][ext];
    }
  },
  mounted() {
    console.log("imagesSet::::", imagesSet);
    // outputs:
    /**
     * {
        "blue-moon": {
          "jpg": "/blue-moon.7d3f581b.jpg"
        },
        "hilton": {
          "jpg": "/hilton.c1d95dc0.jpg"
        }
      }
 */
  }
};
</script>

<style scoped>
ol {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
}

.card {
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  background-color: rgba(51, 34, 34, 0.05);
}
@media screen and (min-width: 780px) {
  .card {
    width: 50%;
  }
}
@media screen and (min-width: 960px) {
  .card {
    width: 33.33%;
    padding: 0.5rem;
  }
}

.card p {
  font-size: 1.5rem;
}
</style>