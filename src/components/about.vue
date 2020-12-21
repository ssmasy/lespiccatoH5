<template>
  <div>
    <top></top>
    <div class="banner">
      <img src="./about/banner.png" />
    </div>
    <div class="info-a">
      <img class="flower-a" src="./index/flower.png" />
      <div class="title title-first">about le Spiccato</div>
      <div class="title-sec">
        "In order to move others, I must be moved." <br />- Niccolo Paganini
      </div>
      <div class="cont">
        At Le Spiccato, we believe in cultivating music from the within,
        nurturing passion, building confidence, and supporting our students
        throughout their musical journey. Le Spiccato provides a wide spectrum
        of carefully designed instrumental and music curriculum for students of
        all ages and abilities in Singapore.<br /><br />Le Spiccato's passion
        for re-imaging music education prioritizes the growth needs,
        development, as well as the happiness of our students.
      </div>
      <img class="flower-b" src="./index/flower.png" />
      <div class="title">Why Choose Us</div>

      <div class="cont">
        At Le Spiccato, the needs and welfare of our students are highly valued.
        With our top facilities and resources, the classes will provide the best
        learning experiences for the students, assisting you in taking the first
        step towards your musical voyages.
      </div>
    </div>
    <img class="piano" src="./about/piano.png" />
    <div class="info-b">
      <div class="title"><em></em>Re-imagine Music Learning</div>
      <div class="cont">
        Join us through a journey of self-discovery through music.
      </div>
      <div class="title"><em></em>Unleash Your Child’s Talent</div>
      <div class="cont">
        We are committed to providing the best-qualified music educators, state
        of the art facilities, and personalised curriculum for your children’s
        music development.
      </div>
      <div class="title"><em></em>We Care About Your Child’s Development</div>
      <div class="cont cont-first">
        “Learn to play like Niccolo Paganini from a young age!”
      </div>
      <div class="cont">
        At Le Spiccato, we cultivate music from the within, nurture passion,
        build confidence, and supports them throughout their musical journey.
      </div>
    </div>
    <div class="environ">
      <img class="environ-bg" src="./about/bg.png" />
      <div class="info-c">
        <img class="flower-a" src="./index/flower.png" />
        <div class="title title-first">ENVIRONMENT</div>
        <div class="cont">
          With a good and healthy environment, students will be more encouraged
          to focus and motivate themselves. By supporting our students, setting
          and achieving goals, bringing them to their maximum potential. We
          provide a bight stage of different opportunities where future talents
          can expressively develop and showcase their own sound and music.
        </div>
        <img class="environment" src="./about/environment.png" />
      </div>
    </div>
    <bottom></bottom>
    <free></free>
  </div>
</template>

<script>
import top from "./common/top/top";
import bottom from "./common/bottom/bottom";
import free from "./common/free/free";

export default {
  name: "about",
  components: {
    top,
    bottom,
    free,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  destroyed() {},
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  width: 100%;
  img {
    display: block;
    width: 100%;
  }
}
.info-a {
  padding: 30px 20px 20px;
  text-align: center;
  .flower-a {
    display: block;
    width: 191px;
    margin: 0 auto 10px;
  }
  .flower-b {
    display: block;
    width: 191px;
    margin: 40px auto 10px;
  }
  .title {
    color: #c5a47e;
    font-family: "BigCaslon";
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .title-first {
    margin-bottom: 5px;
  }
  .title-sec {
    color: #c5a47e;
    font-family: "Metropolis";
    font-size: 13px;
    line-height: 17px;
    margin-bottom: 10px;
  }
  .cont {
    color: #333333;
    font-family: "Metropolis";
    font-size: 13px;
    line-height: 17px;
  }
}
.piano {
  display: block;
  width: 100%;
}
.info-b {
  padding: 20px 20px 25px;
  .title {
    color: #c5a47e;
    font-family: "Metropolis";
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    margin-bottom: 5px;
    em {
      display: inline-block;
      background-color: #c5a47e;
      width: 4px;
      height: 4px;
      margin: 3px 5px 3px 0;
    }
  }
  .cont {
    color: #333333;
    font-family: "Metropolis";
    font-size: 13px;
    line-height: 17px;
    margin-bottom: 15px;
    &.cont-first {
      margin-bottom: 5px;
    }
  }
}
.environ {
  position: relative;
  .environ-bg {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: -1;
  }
  .info-c {
    padding: 30px 20px 20px;
    text-align: center;
    .flower-a {
      display: block;
      width: 191px;
      margin: 0 auto 10px;
    }

    .title {
      color: #c5a47e;
      font-family: "BigCaslon";
      font-size: 16px;
      line-height: 21px;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .cont {
      color: #fefefe;
      font-family: "Metropolis";
      font-size: 13px;
      line-height: 17px;
      margin-bottom: 20px;
    }
    .environment {
      display: block;
      width: 100%;
    }
  }
}
</style>
