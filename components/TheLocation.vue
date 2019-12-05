<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Location</h1>

    <section id="wedding">
      <h2 class="mt0 center">Wedding &amp; Reception</h2>
      <div class="card card--big">
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
      <div class="card card--big">
        <p class="mb0 center">Brian &amp; Annette&rsquo;s place</p>
        <address>128 State Street, Lafayette, Louisiana 70506</address>
        <figure>
          <img
            alt="The after party"
            src="../img/location/afterparty.jpg"
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
          <address>
            <a :href="place.url">Website</a>
            <span v-if="place.url != '' && place.map != ''">|</span>
            <a
              :href="place.map"
              v-if="place.map != ''"
            >Map</a>
          </address>
        </li>
      </ol>
    </section>

    <hr />

    <section id="recommendations">
      <h2 class="mt0 center">Recommendations</h2>
      <ol class="list-reset m0">
        <li
          :key="i"
          class="card"
          v-for="(place, i) in recommendations"
        >
          <p class="center">{{ place.name }}</p>
          <figure>
            <img
              :alt="place.name"
              :src="profilePic(place.pic.filename)"
            />
            <figcaption>{{ place.blurb }}</figcaption>
          </figure>
          <address>
            <a
              :href="place.url"
              v-if="place.url != ''"
            >Website</a>
            <span v-if="place.url != '' && place.map != ''">|</span>
            <a
              :href="place.map"
              v-if="place.map != ''"
            >Map</a>
          </address>
        </li>
      </ol>
    </section>

    <hr />

    <section id="map">
      <h2 class="mt0 mb3 center">Erin &amp; Matt&rsquo;s Favorite Places</h2>
      <TheLocationMap></TheLocationMap>
    </section>
  </main>
</template>

<script>
import imagesSet from "../img/location/*.*";

import TheLocationMap from "./TheLocationMap.vue";

export default {
  data() {
    return {
      recommendations: [
        {
          name: "Shade Tree Cafe",
          url: "",
          map:
            "https://www.google.com/maps/place/Shade+Tree+Cafe/@30.1472835,-91.9605542,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4aa9e81cc256f6de!8m2!3d30.1472835!4d-91.9583655",
          blurb:
            "The greatest dining experience of our lives. That’s why Chef Lonnie is catering the wedding.",
          pic: {
            filename: "shade-tree.jpg",
            source: "E&M"
          }
        },
        {
          name: "Olde Thyme Grocery",
          url: "http://www.oldetymegrocery.com/",
          map:
            "https://www.google.com/maps/place/Olde+Tyme+Grocery/@30.2157038,-92.0253116,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x3e19fb09c5cab663!8m2!3d30.2157038!4d-92.0231229",
          blurb:
            "Best po boys Erin’s ever had. Anywhere. Sorry, New Orleans. Get the fried shrimp po boy with fries and wash it down with an Abita Amber.",
          pic: {
            filename: "olde-thyme.jpg",
            source: "E&M"
          }
        },
        {
          name: "Saint Street Inn",
          url: "https://saintstreetinn.com/",
          map:
            "https://www.google.com/maps?q=The+Saint+Street+Inn&ftid=0x86249c8b74359ea7:0x90427d38e73ab41c",
          blurb:
            "(As mentioned in Our Story.) One of our favorite places in Lafayette—everything is so fresh. Their seared scallops are amazing.",
          pic: {
            filename: "saint-street-inn.jpg",
            source: "E&M"
          }
        },
        {
          name: "Chez Jacqueline’s",
          url: "",
          map:
            "https://www.google.com/maps/place/Chez+Jacqueline/@30.2738531,-91.9011263,17z/data=!3m1!4b1!4m5!3m4!1s0x8624868f95bf60db:0x87536f60f017b66d!8m2!3d30.2738531!4d-91.8989376",
          blurb:
            "This place in Breaux Bridge is very special to Erin. Jacqueline serves Parisian French cooking, though she does have Cajun food on the menu. Great mimosas, delicious rabbit bathed in a rich gravy, and a slice of doberge cake—a must try. Plus, Breaux Bridge is a cute town with lots of antique stores, cafes, bars, etc. Call before you go to Jacqueline’s. She basically opens and closes when she feels like it. P.S.: She’s quite a good storyteller.",
          pic: {
            filename: "jacqueline.jpg",
            source: "E&M"
          }
        },
        {
          name: "Oishi Sushi",
          url: "http://www.oishi-sushi.com/",
          map:
            "https://www.google.com/maps/place/Oishi+Sushi/@30.1804188,-92.026695,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x27d1157d97ae73fb!8m2!3d30.1804188!4d-92.0245063",
          blurb:
            "We’re not going to lie—the service here is some of the worst you’ll ever get anywhere, but the sushi is SO good that we don’t care. Just relax and accept that you’ll be there a while.",
          pic: {
            filename: "oishi.PNG",
            source:
              "http://oishi-sushi.com/code/Brother%20Oishi-Front-Back2008.pdf"
          }
        },
        {
          name: "Smoothie King",
          url: "",
          map: "",
          blurb:
            "If you are hungover post-wedding, get a Light and Fluffy from Smoothie King. They don’t make it anymore, but they’ll whip up something similar. We know...it’s a chain...doesn’t matter. I miss it living here in Toledo.",
          pic: {
            filename: "smoothie-king.jpg",
            source: "E&M"
          }
        },
        {
          name: "Taco Sisters",
          url: "",
          map:
            "https://www.google.com/maps/place/Taco+Sisters/@30.2232337,-92.0171324,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xd18c6c63804be39f!8m2!3d30.2232337!4d-92.0149437",
          blurb:
            "Smoked shrimp tacos with ginger sauce, sour cream, cheese, and their fresh organic greens with chopped apples! Yum.",
          pic: {
            filename: "taco-sisters.jpg",
            source: "E&M"
          }
        },
        {
          name: "New Orleans",
          url: "",
          map:
            "https://www.google.com/maps/place/New+Orleans,+LA/@30.0326996,-90.1627533,10z/data=!3m1!4b1!4m5!3m4!1s0x8620a454b2118265:0xdb065be85e22d3b4!8m2!3d29.9510658!4d-90.0715323?hl=en",
          blurb:
            "About a two hour drive from Lafayette, if you haven’t been we can’t recommend it enough. One of our favorite places on Earth; Matt got his undergrad from Tulane University and misses that city eternally. Must do’s: ride the St. Charles streetcar, wander aimlessly around the French Quarter, eat fried chicken at Willie Mae’s Scotch House, listen to jazz in the Marigny, see a concert at Tipitina’s, go to the sculpture gardens at City Park, eat greasy breakfast at the Camellia Grill, and picnic on the banks of the Mississippi. Please feel free to ask Matt or Erin for more suggestions. So much to do and it’s hard to go wrong. Get funky!",
          pic: {
            filename: "nola.jpg",
            source:
              "https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1143723457/960x0.jpg?fit=scale"
          }
        },
        {
          name: "Saint Francisville",
          url: "",
          map:
            "https://www.google.com/maps/place/St+Francisville,+LA+70775/@30.7878663,-91.3953551,14z/data=!3m1!4b1!4m5!3m4!1s0x8624349d4752be27:0x8453e255c0a189cc!8m2!3d30.7880721!4d-91.3768479",
          blurb:
            "If you are staying in the area for a while and don’t mind the drive (about an hour and a half), Saint Francisville is a beautiful place to visit with lots of history. Historic gardens, plantation homes, elaborate cemeteries, cute shops, and quaint restaurants—it’s worth the drive.",
          pic: {
            filename: "francisville.jpg",
            source:
              "https://cbsnews2.cbsistatic.com/hub/i/r/2005/12/21/4aec2139-a642-11e2-a3f0-029118418759/resize/620x465/ad91bb12427e64e4c358ca4f829fa57a/image1156299.jpg"
          }
        }
      ],
      accommodations: [
        {
          name: "Hilton Garden Inn",
          url:
            "https://hiltongardeninn3.hilton.com/en/hotels/louisiana/hilton-garden-inn-lafayette-cajundome-LFTCDGI/index.html",
          map:
            "https://www.google.com/maps/place/Hilton+Garden+Inn+Lafayette%2FCajundome/@30.2200084,-92.043297,17z/data=!3m1!4b1!4m8!3m7!1s0x86249c6ebd95aa19:0xe631653082b26537!5m2!4m1!1i2!8m2!3d30.2200084!4d-92.0411083",
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
          url: "https://bluemoonpresents.com/web/book-a-room/",
          map:
            "https://www.google.com/maps/place/Blue+Moon+Saloon+And+Guest+House/@30.220422,-92.0184877,17z/data=!3m1!4b1!4m8!3m7!1s0x0:0xa0c5d634fd1bb51d!5m2!4m1!1i2!8m2!3d30.220422!4d-92.016299",
          pic: {
            filename: "blue-moon.jpg",
            source:
              "https://thumbnails.trvl-media.com/nj7zpwYlVMPO2Ndr5w86cJvYsHA=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/21000000/20330000/20320800/20320728/4c22351b_z.jpg"
          },
          blurb:
            "A hostel that we’ve always wanted to stay in but never had a good excuse to. Lots of good live music here, too."
        },
        {
          name: "Airbnb",
          url: "https://www.airbnb.com/s/Lafayette--LA/all",
          map: "",
          pic: {
            filename: "airbnb.png",
            source: "airbnb.com"
          },
          blurb:
            "Look for places to stay in our old neighborhood, the Saint Streets (south west Lafayette)."
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
  }
};
</script>

<style scoped>
section:nth-of-type(1) {
  padding-top: 0.875rem;
}
h2 {
  margin-top: 0;
  margin-bottom: 2rem;
}

ol {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 100%;
}

.card {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 3px;
  background-color: rgba(54, 31, 31, 0.09);
}

@media screen and (min-width: 780px) {
  .card {
    width: calc(50% - 1rem);
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
  .card--big {
    width: 75%;
    margin-right: auto;
    margin-left: auto;
  }
}

@media screen and (min-width: 1200px) {
  .card {
    width: calc(33.33% - 1rem);
    padding: 1rem;
  }
  .card--big {
    width: 66.66%;
    padding: 1rem;
  }
}

.card p {
  font-size: 1.125rem;
}
@media screen and (min-width: 780px) {
  .card p {
    font-size: 1.25rem;
  }
}
@media screen and (min-width: 960px) {
  .card p {
    font-size: 1.5rem;
  }
}

figure {
  margin: 0;
}

.card p + address {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  text-align: center;
  font-style: normal;
}
@media screen and (min-width: 960px) {
  .card p + address {
    font-size: 1.125rem;
  }
}

figure + address {
  margin-top: 1rem;
  font-size: 1.125rem;
  text-align: center;
  font-style: normal;
}

.card figcaption {
  line-height: 1.25;
  font-size: 1rem;
}

hr {
  height: 2px;
  margin: 4rem -1rem;
  border: none;
  background-color: var(--soft-black);
}
@media screen and (min-width: 960px) {
  hr {
    height: 4px;
    margin: 6rem 0;
  }
}
</style>
