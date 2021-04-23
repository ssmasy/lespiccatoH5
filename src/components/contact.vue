<template>
  <div>
    <top></top>
    <div class="banner">
      <img src="./contact/banner.png" />
    </div>

    <div class="info-a">
      <img class="flower-a" src="./index/flower.png" />
      <div class="title title-first">LE SPICCATO MUSIC PTE LTD</div>
      <div class="title-sec">
        Contact us now to begin your music journey today!
      </div>
    </div>

    <div class="contact-list">
      <img src="./contact/address.png" />
      <div class="title">address</div>
      <div class="text">
        1 Jln Anak Bukit, #02-01 Bukit Timah Plaza,<br />
        Singapore, 588996
      </div>
      <img src="./contact/phone.png" />
      <div class="title">phone</div>
      <div class="text">+65 6235 6988</div>
      <img src="./contact/email.png" />
      <div class="title">email</div>
      <div class="text">service@lespiccato.com.sg</div>
      <img src="./contact/hours.png" />
      <div class="title">Business Hours</div>
      <div class="text hours">
        Monday – Friday： 10am-9pm<br />
        Saturday – Sunday：9am-8pm
      </div>
    </div>
    <img class="contact-map" src="./contact/map.png" />
    <bottom></bottom>
    <free></free>
  </div>
</template>

<script>
import top from "./common/top/top";
import bottom from "./common/bottom/bottom";
import free from "./common/free/free";

export default {
  name: "contact",
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
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  .title-sec {
    color: #c5a47e;
    font-family: "Metropolis";
    font-size: 12px;
    line-height: 14px;
  }
}
.contact-list {
  text-align: center;
  padding-bottom: 10px;
  img {
    display: block;
    margin: 0 auto 10px;
    width: 32px;
  }
  .title {
    color: #c5a47e;
    font-family: "Metropolis";
    text-transform: uppercase;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 10px;
  }
  .text {
    color: #333;
    font-family: "Metropolis";
    font-size: 13px;
    line-height: 13px;
    margin-bottom: 30px;
    &.hours {
      font-size: 10px;
    }
  }
}
.contact-map {
  display: block;
  width: 100%;
}
</style>
