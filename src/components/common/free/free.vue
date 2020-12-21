<template>
  <div class="free-wrap">
    <a target="_blank" href="https://lespiccato.setmore.com">
      <img src="./booking.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "free",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.free-wrap {
  display: block;
  position: fixed;
  bottom: 52px;
  right: 5px;
  height: 80px;
  width: 80px;
  a {
    display: block;
    height: 80px;
    img {
      width: 80px;
    }
  }
}
</style>