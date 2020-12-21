<template>
  <div>
    <top></top>
    <div class="banner">
      <img src="./courses/banner.png" />
    </div>
    <div class="info-a">
      <img class="flower-a" src="./index/flower.png" />
      <div class="title">WHICH TYPE OF COURSE IS RIGHT <br />FOR YOU</div>
      <div class="cont">
        If you are interested in classical music instruments but doesn’t know
        what’s right for you, sign up for our trial class today! We provide a
        wide range of classical instruments selection and will help you discover
        your passion, venture into something new.
      </div>
    </div>
    <div class="courses-list">
      <img class="courses-pic" src="./courses/1.png" />
      <div class="courses-text">
        We focus on building a strong foundation and eliminating the mistakes
        beginners make. Our school strongly believes that students will reach
        excellence not only with practices but also devoting and adding your mix
        of emotions and style to the pieces you are perfecting.
      </div>
      <img class="courses-pic" src="./courses/2.png" />
      <div class="courses-text">
        Our classes focuses on building and strengthening on piano skills
        foundation, pitch and rhythm. Turn any piece into your very own version
        by adding your unique playing style and character into the song and your
        stage could be anywhere!
      </div>
      <img class="courses-pic" src="./courses/3.png" />
      <div class="courses-text">
        Cello is more than mastering the techniques. It also calms the soul and
        nurtures the mind of many. Essential to every ensemble and being a
        remarkable solo instrument, playing the cello will undoubtedly make you
        stand out.
      </div>
      <img class="courses-pic" src="./courses/4.png" />
      <div class="courses-text">
        Our teachers will guide and train your pitch, breathing control, vocal
        projection, the proper use and application of vocal muscles. After
        several proper practice and technique application, you will be able to
        confidently begin your journey in becoming a skilled singer.
      </div>
      <img class="courses-pic" src="./courses/5.png" />
      <div class="courses-text">
        Our classes are specially designed for students of all levels. We
        focuses on perfecting the techniques of the changing of chords and
        different strumming or plucking patterns and adding characteristics of
        individual students to make the pieces come alive!
      </div>
      <img class="courses-pic" src="./courses/6.png" />
      <div class="courses-text">
        Our classes focus on building a strong knowledge foundation, teaching
        you how to apply your knowledge into real life application leading you
        to higher marks in examinations such as, ABRSM, Trinity, Direct School
        Admission, etc., or even produce your very own item!
      </div>
      <img class="courses-pic" src="./courses/7.png" />
      <div class="courses-text">
        Music ignites all areas of child development and skills. Studies have
        shown that musical experiences affects children in many different areas,
        such as, language acquisition and reading skills, such as intellectual,
        social-emotional, motor, language, and overall literacy.
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
  name: "courses",
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
  padding: 30px 20px 30px;
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
  }
  .cont {
    color: #333333;
    font-family: "Metropolis";
    font-size: 13px;
    line-height: 17px;
  }
}
.courses-list {
  .courses-pic {
    display: block;
    width: 100%;
  }
  .courses-text {
    color: #333333;
    font-family: "Metropolis";
    font-size: 13px;
    line-height: 17px;
    text-align: center;
    padding: 20px 20px 40px;
  }
}
</style>
