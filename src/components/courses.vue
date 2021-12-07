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
        Interested but not sure if learning music suits you? Sign up for our free music trial class and start your musical journey with Le Spiccato Music Institution.
      </div>
    </div>
    <div class="courses-list">
      <img class="courses-pic" src="./courses/1.png" />
      <div class="courses-text">
        Our piano classes are designed differently for all age groups, preparing
        the students for different exams, for example, ABRSM, Trinity, Direct School Admission,
        etc. We also cater to students who are interested in Jazz/Pop and improvisation.
        Despite the piano's complexity, our experienced teachers will make it more interesting
        and approachable for all. Students will be capable of producing an incredibly
        wide range of sounds. You will master the art of playing as a solo artist or
        harmonizing with other instruments!
      </div>
      <img class="courses-pic" src="./courses/2.png" />
      <div class="courses-text">
        At Le Spiccato, our classes are specially designed to make violin/viola lessons more enjoyable and easier with different heck and tricks. We believe that students will reach excellence not only with sufficient practice but also devoting and adding your mix of emotions and style to the pieces you are perfecting. While mastering the instrument, we focus on building a strong foundation and eliminating mistakes made by beginners to achieve a higher grade in examinations such as, ABRSM, Trinity, Direct School Admission, etc..
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
        Chamber music is composed for a small group of instruments – a chamber music ensemble.
        Chamber music is more  expressive. As it teaches students to learn how to be attentive and patient, listen and support each other’s music, hone their collaboration ability and train their music improvisation skills. Learning the ways of performing in a chamber music ensemble will set strong foundations towards performing in the symphony orchestral setting.

      </div>
      <img class="courses-pic" src="./courses/5.png" />
      <div class="courses-text">
        Our classes focus on building a strong knowledge foundation, teaching
        you how to apply your knowledge into real life application leading you
        to higher marks in examinations such as, ABRSM, Trinity, Direct School
        Admission, etc., or even produce your very own item!
      </div>
      <img class="courses-pic" src="./courses/6.png" />
      <div class="courses-text">
        Music ignites all areas of child development and skills. Studies have shown that musical experiences affects children in many different areas, such as, language acquisition and reading skills, such as intellectual, social-emotional, motor, language, and overall literacy.
      </div>
      <img class="courses-pic" src="./courses/7.png" />
      <div class="courses-text">
        Explore your voice with Le Spiccato where you can enhance your singing talents through different aspects such as vocal techniques, music theory, intonation, performance, and hearing skills, no matter how experienced you are. We are engaged with the best professional teachers to guide and train your pitch, breathing control, vocal projection, the proper use and application of vocal muscles. You will eventually be able to sing your favourite songs and confidently begin your journey in becoming a skilled singer.
        （Due to Covid-19 situation, vocal class is currently suspended.）
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
