<template>
  <main class="container">
    <h1 class="mt0 regular center pageTitle">Schedule</h1>
    <dl>
      <div>
        <dt>6:30pm</dt>
        <dd>
          Ceremony begins at
          <a
            href="https://www.google.com/maps/place/Woodlawn+Chapel/@30.0378152,-92.0811216,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xb6b3a241a49a5e3!8m2!3d30.0378152!4d-92.0789329"
          >Woodlawn Chapel</a>
        </dd>
      </div>
      <div>
        <dt>7:00pm</dt>
        <dd>Reception follows</dd>
      </div>
      <div>
        <dt>8:00pm</dt>
        <dd>Cajun band plays</dd>
      </div>
      <div>
        <dt>11:00pm</dt>
        <dd>
          Head to
          <a
            href="https://www.google.com/maps/place/128+State+St,+Lafayette,+LA+70506/@30.2193115,-92.0376383,17.4z/data=!4m5!3m4!1s0x86249c65ebba3067:0xd1bb357208ce6c4c!8m2!3d30.219418!4d-92.0361017?hl=en"
          >Brian &amp; Annette’s place</a> for the afterparty!
        </dd>
      </div>
    </dl>
    <p class="headsup center">Stay tuned for more events!</p>
  </main>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

@media screen and (min-height: 650px) {
  dl {
    padding-bottom: 2rem;
  }
}

@media screen and (min-width: 780px) and (min-height: 650px) {
  dl {
    padding-top: 2rem;
  }
}

@media screen and (min-width: 960px) {
  dl {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

dt {
  width: 40%;
  padding-right: 1rem;
  text-align: right;
  font-weight: 700;
}

dd {
  width: 60%;
  margin: 0;
  padding-left: 1rem;
}

dt,
dd,
.headsup {
  font-size: 1.125rem;
}
@media screen and (min-width: 480px) {
  dt,
  dd,
  .headsup {
    font-size: 1.3rem;
  }
}
@media screen and (min-width: 780px) {
  dt,
  dd,
  .headsup {
    font-size: 1.5rem;
  }
}
</style>