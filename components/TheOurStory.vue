<template>
  <main class="container">
    <h1 class="mt0 regular center pageTitle">Our Story</h1>
    <p>It all started in a Griffin Hall computer room when Erin said, &ldquo;Nice mustache&rdquo; and Matt replied, &ldquo;You&rsquo;re in my seat.&rdquo; It was truly love at first insult. He had an old timey, western style mustache that turned up at the edges, kind of like he was an extra from Tombstone. Erin had to admit, though that, despite the alluring moustache, Matt was impolite at best. Lucky for him, he was quite cute, and Erin didn&rsquo;t forget that part.</p>

    <figure class="griffin-hall">
      <img
        alt="Griffin Hall, University of Louisiana at Lafayette"
        src="../img/griffin-hall.jpg"
      />
      <figcaption>Griffin Hall, University of Louisiana</figcaption>
    </figure>

    <p>Fast forward a few months: Erin is driving Matt and a van-full of friends when Matt&mdash;in a fit of passion&mdash;artfully grazes her leg, sending shivers to her very core...is one person&rsquo;s memory, and it is partially true. Anyway, that night they became friends. Shy leg-grabbing friends who, in typical drunken grad school fashion were too awkward to talk normally for any length of time without the cover of a silly costume or inadvisable amounts of alcohol.</p>

    <figure class="mustache">
      <img
        alt="Matt's nice mustache"
        src="../img/mustache.jpg"
      />
      <figcaption>Nice mustache!</figcaption>
    </figure>

    <p>Fast forward to Kristen Bradley&rsquo;s party. A pool party. A costume party. A nude party for some people. Like Matt. When the cops arrived, Matt somehow managed to put both his legs into one leg of his boxers, as if he were wearing a mini skirt of sorts and, as a very unimpressed security guard rolled her eyes, he stumbled toward Kristen&rsquo;s apartment with the rest of the inebriants.</p>

    <p>As the party died down, Erin and Matt were left sitting poolside, clothed. They got to know each other&mdash;how Matt was from Toledo and had worked in Alaska, and had lived in New Orleans years ago. He&rsquo;d moved to Lafayette because he missed Louisiana so much. Erin was dressed as Linda Rondstadt and he told her she looked great. Matt was back in his Townes Van Zandt outfit after his naked stint.</p>

    <figure class="linda">
      <img
        alt="Charly and Erin in Amy Winehouse and Linda Rondstadt holloween costumes"
        src="../img/linda-rondstadt.png"
      />
      <figcaption>Charly as Amy Winehouse, Erin as Linda Rondstadt</figcaption>
    </figure>

    <p>They were chatting with their remaining party friends when Erin left, awkwardly speeding away as Matt yelled goodbye from the parking lot. He made her nervous in a good way.</p>

    <p>A couple of weeks later at the English department&rsquo;s Thursday Night Reading Series, in Fall of 2012 at the Saint Street Inn, Erin and Matt were thrown together again, and this time they weren&rsquo;t too awkward to suggest hanging out after the reading.</p>

    <figure class="wild-salmon">
      <img
        alt="The Wild Salmon"
        src="../img/wild-salmon.jpg"
      />
      <figcaption>The Wild Salmon</figcaption>
    </figure>

    <p>They went to the Wild Salmon (RIP). There was a loud band playing for a $10 cover, and they weren&rsquo;t very good. Suavely, Matt suggested they not go in there so he could be alone with Erin. They found themselves at Cafe Cottage&mdash;a den of iniquity filled with hipsters writing their first novel or creepers getting handsy at the bar, no in-between. They had drinks and quesadillas while they talked about music and life. The two of them lived close to each other in Freetown near the university. Like a two-minute walk close together. They ended up at Matt&rsquo;s place where they had their first kiss, in his one-bedroom duplex apartment. It came to be a place that they found themselves sitting on the porch, hidden behind a huge banana tree, heckling young undergrads who liked to kick over Matt&rsquo;s trash cans. It was the place where they got to know each other. Had their first everything. It was a tiny place where cats and the occasional possum would wander in, but it was pretty romantic to them.</p>

    <p>Seven years later, they find themselves planning a wedding, sitting in Matt&rsquo;s childhood home in Toledo. They are excited to be getting married in Maurice, Louisiana in a small venue called Woodlawn chapel on the Winter Solstice. Erin and Matt both hope you all can come and help them celebrate!</p>
  </main>
</template>

<style scoped>
p:nth-of-type(1)::first-letter {
  font-size: 3.75rem;
  line-height: 0.6;
  font-family: Italianno;
}
@media screen and (min-width: 960px) {
  p:nth-of-type(1)::first-letter {
    font-size: 4.5rem;
  }
}

figure {
  display: block;
  max-width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 2px solid var(--soft-black);
  clear: both;
}
@media screen and (min-width: 960px) {
  figure {
    border-width: 4px;
  }
}

figure img {
  width: 100%;
  display: block;
}

figcaption {
  margin-top: 0.5rem;
  text-align: center;
}

@media screen and (min-width: 525px) {
  figure.griffin-hall {
    max-width: 500px;
    float: right;
    margin: 0.25rem 0 0 1.25rem;
  }
  figure.griffin-hall img {
    max-height: 300px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 525px) {
  figure.mustache {
    max-width: 300px;
    float: left;
    margin: 0.25rem 1.25rem 0.75rem 0;
  }
}

@media screen and (min-width: 400px) {
  figure.linda {
    max-width: 250px;
    float: right;
    margin: 0.5rem 0 0.5rem 1.25rem;
  }
}

@media screen and (min-width: 480px) {
  figure.wild-salmon {
    max-width: 375px;
    float: left;
    margin: 0.5rem 1.25rem 0 0;
  }
}
</style>
