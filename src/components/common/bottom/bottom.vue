<template>
  <div class="bottom">
    <div class="line"></div>
    <div class="cont">
      <div class="title">LE SPICCATO MUSIC PTE.LTD.</div>
      <div class="cut"></div>

      <div class="info">
        Address: 1 Jalan Anak Bukit, #02-01 Bukit Timah Plaza, Singapore, 588996
      </div>
      <div class="info">Tel: +65 6235 6988</div>
      <div class="info info-a">E-mail: service@lespiccato.com.sg</div>
      <div class="title">Office Hours</div>
      <div class="cut"></div>
      <div class="info">Monday - Friday: 10:00 am- 9:00 pm</div>
      <div class="info info-b">Saturday - Sunday: 9:00 am - 8:00 pm</div>
    </div>

    <div class="bottom-logo">© LE SPICCATO MUSIC PTE LTD</div>
  </div>
</template>

<script>
export default {
  name: "bottom",
};
</script>

<style scoped lang="scss">
.bottom {
  background-color: #171819;
  position: relative;
  text-align: center;

  .line {
    height: 5px;
    background-color: #c5a47e;
    margin-bottom: 35px;
    &:after {
      content: "";
      position: absolute;
      top: 5px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 0;
      height: 0;
      border-top: 7px solid #c5a47e;
      border-right: 7px solid transparent;
      border-left: 7px solid transparent;
    }
  }
  .cont {
    color: #fefefe;
    padding: 0 20px;
    .title {
      color: #c5a47e;
      font-family: "BigCaslon";
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
    }
    .cut {
      background-color: #c5a47e;
      height: 2px;
      width: 30px;
      margin: 10px auto 15px;
    }
    .info {
      font-family: "Metropolis";
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 15px;
      &.info-a {
        margin-bottom: 20px;
      }
      &.info-b {
        margin-bottom: 40px;
      }
    }
  }
  .bottom-logo {
    height: 30px;
    background-color: #111111;
    color: #fefefe;
    font-family: "Metropolis";
    font-size: 10px;
    line-height: 30px;
  }
}
</style>