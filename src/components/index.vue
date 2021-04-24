<template>
  <div>
    <top></top>
    <div class="banner">
      <img src="./index/banner.png" />
      <a target="_blank" href="https://bookings.gettimely.com/lespiccato/bb/book"></a>
    </div>
    <div class="info-a">
      <img class="flower-a" src="./index/flower.png" />
      <div class="title">MUSIC MUST ALWAYS MOVE <br />FORWARD</div>
      <div class="cont">
        Music is a form of art and entertainment that is continuously evolving
        throughout time. It is constantly invented and shared worldwide by
        talented individuals. At Le Spiccato, we will help to shape you into
        your own masterpiece.
      </div>
      <img class="flower-b" src="./index/flower.png" />
      <div class="title">MUSIC COURSES</div>

      <div class="cont">
        Le Spiccato provides specialised and tailored lessons from our qualified
        music educators, including instrumental training, improvising
        coaching,early-care music enrichment courses and more.
      </div>

      <div class="banner-courses">
        <div class="banner-courses-top">
          <router-link :to="{ path: '/courses' }" class="courses-wrap">
            <img class="courses-pic" src="./index/violin.png" />
          </router-link>
          <router-link :to="{ path: '/courses' }" class="courses-wrap">
            <img class="courses-pic" src="./index/piano.png" />
          </router-link>
        </div>
        <div class="banner-courses-bottom">
          <router-link :to="{ path: '/courses' }" class="courses-wrap">
            <img class="courses-pic" src="./index/cello.png" />
          </router-link>
          <router-link :to="{ path: '/courses' }" class="courses-wrap">
            <img class="courses-pic" src="./index/vocal.png" />
          </router-link>
          <router-link :to="{ path: '/courses' }" class="courses-wrap">
            <img class="courses-pic" src="./index/guitar.png" />
          </router-link>
        </div>
      </div>

      <div class="button-wrap">
        <router-link :to="{ path: '/courses' }" class="button">
          <div class="button-text">VIEW FULL COURSES</div>
        </router-link>
      </div>
    </div>
    <img class="student" src="./index/student.png" />
    <div class="info-b">
      <div class="title">STUDENT LIFE</div>
      <div class="cut"></div>
      <div class="cont">
        Not only will the students learn to master different instruments and
        skills, we are keen in adding your characteristics into the songs you
        wish to learn. Helping you reach your goals and race towards success in
        no time. Different events will also be held in our concert hall for the
        students to showcase their skills and knowledge.
      </div>
    </div>
    <div class="bottom-banner">
      <img src="./index/bottom-banner.png" />
      <a target="_blank" href="https://bookings.gettimely.com/lespiccato/bb/book"></a>
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
  name: "index",
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
  a {
    display: block;
    position: absolute;
    width: 44%;
    height: 14%;
    top: 68%;
    left: 28%;
  }
}
.info-a {
  padding: 30px 20px 0;
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
  }
  .cont {
    color: #333333;
    font-family: "Metropolis";
    font-size: 13px;
    line-height: 17px;
  }

  .banner-courses {
    max-width: 1200px;
    margin: 0 auto;
    .courses-wrap {
      position: relative;
      display: block;
      .courses-pic {
        display: block;
        width: 100%;
      }
    }

    .banner-courses-top {
      display: flex;
      margin-left: -3px;
      margin-bottom: 3px;
      margin-top: 20px;
      .courses-wrap {
        width: 50%;
        margin-left: 3px;
      }
    }
    .banner-courses-bottom {
      display: flex;
      margin-left: -3px;
      margin-bottom: 20px;
      .courses-wrap {
        width: 33.33%;
        margin-left: 3px;
      }
    }
  }

  .button-wrap {
    text-align: center;
    margin-bottom: 40px;
    .button {
      display: inline-block;
      background-color: #c5a47e;
      border-radius: 38px;
      .button-text {
        display: inline-block;
        padding: 8px 38px;
        font-size: 12px;
        font-family: "DIN";
        color: #fefefe;
        line-height: 14px;
        letter-spacing: 2px;
      }
    }
  }
}
.student {
  display: block;
  width: 100%;
}
.info-b {
  padding: 20px 20px 40px;
  .title {
    color: #c5a47e;
    font-family: "BigCaslon";
    font-size: 16px;
    line-height: 21px;
  }
  .cut {
    width: 30px;
    height: 4px;
    background-color: #c5a47e;
    margin: 10px 0 20px;
  }
  .cont {
    color: #333333;
    font-family: "Metropolis";
    font-size: 13px;
    line-height: 17px;
  }
}
.bottom-banner {
  position: relative;
  width: 100%;
  img {
    display: block;
    width: 100%;
  }
  a {
    display: block;
    position: absolute;
    width: 74%;
    height: 15%;
    top: 71%;
    left: 13%;
  }
}
</style>
