<template>
  <main class="container">
    <h1 class="mt0 regular center pageTitle">Location</h1>

    <section id="ceremony">
      <h2 class="mt0 center">Wedding</h2>
      <div class="card card--big hover-shadow">
        <p class="mb0 center">Woodlawn Chapel</p>
        <address>8001 Woodlawn Road, Maurice, Louisiana 70555</address>
        <figure>
          <img
            alt="Woodlawn Chapel, Maurice, Lousisiana"
            src="../img/location/woodlawn-chapel.jpg"
          />
        </figure>
        <address>
          <a href="https://www.woodlawnchapella.com/">Website</a>
          <span>|</span>
          <a href="https://www.google.com/maps?cid=822815283659515363">Map</a>
        </address>
      </div>
    </section>

    <hr />

    <section id="afterparty">
      <h2 class="mt0 center">After Party</h2>
      <div class="card card--big hover-shadow">
        <p class="mb0 center">Brian &amp; Annette&rsquo;s place</p>
        <address>128 State Street, Lafayette, Louisiana 70506</address>
        <figure>
          <img
            alt="The after party"
            src="../img/location/afterparty.png"
          />
        </figure>
        <address>
          <a
            href="https://www.google.com/maps/place/128+State+St,+Lafayette,+LA+70506/@30.2193673,-92.0362277,17z/data=!4m13!1m7!3m6!1s0x86249c65ebba3067:0xd1bb357208ce6c4c!2s128+State+St,+Lafayette,+LA+70506!3b1!8m2!3d30.219418!4d-92.0361017!3m4!1s0x86249c65ebba3067:0xd1bb357208ce6c4c!8m2!3d30.219418!4d-92.0361017?hl=en"
          >Map</a>
        </address>
      </div>
    </section>

    <hr />

    <section id="accommodations">
      <h2 class="mt0 center">Accommodations</h2>
      <ol class="list-reset m0">
        <li
          :key="i"
          class="card hover-shadow"
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

    <hr />

    <section id="food">
      <h2 class="mt0 center">Food &amp; Drinks</h2>
      <ol class="list-reset m0">
        <li
          :key="i"
          class="card hover-shadow"
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

    <hr />

    <section id="map">
      <h2 class="mt0 mb3 center">The Whole Pot of Gumbo</h2>
      <TheLocationMap class="hover-shadow"></TheLocationMap>
    </section>
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
}

@media screen and (min-width: 780px) {
  .card {
    width: 50%;
  }
  .card--big {
    width: 75%;
    margin: 0 auto;
  }
}
@media screen and (min-width: 960px) {
  .card {
    width: 33.33%;
    padding: 0.5rem;
  }
  .card--big {
    width: 50%;
    padding: 1rem;
  }
}

.card p {
  font-size: 1.5rem;
}

figure {
  margin: 0;
}

p + address {
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  text-align: center;
  font-style: normal;
}

figure + address {
  font-size: 1.125rem;
  text-align: center;
  font-style: normal;
}

hr {
  height: 4px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: none;
  background-color: var(--soft-black);
}

.hover-shadow {
  transition: 200ms ease-in-out;
}
.hover-shadow:hover {
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  transform: scale3d(1.001, 1.001, 1.001);
  transition: 200ms ease-in-out;
}
</style>