<template>
  <section>
    <div class="header-wrap">
      <div class="header-wrap-in">
        <div class="menu-btn" @click="openMenu">
          <img src="./btn.png" />
        </div>
        <router-link :to="{ path: '/' }" class="header-logo">
          <img src="./logo.png" />
        </router-link>
      </div>
    </div>

    <transition name="fade">
      <div v-show="menuActive" class="menu-wrap">
        <div class="menu-cont">
          <div class="menu-logo"><img src="./logo.png" /></div>
          <router-link
            @click.native="closeMenu"
            :to="{ path: '/' }"
            class="menu-link menu-link-home"
            >HOME</router-link
          >
          <router-link
            @click.native="closeMenu"
            :to="{ path: '/about' }"
            class="menu-link"
            >ABOUT US</router-link
          >
          <router-link
            @click.native="closeMenu"
            :to="{ path: '/courses' }"
            class="menu-link"
            >MUSIC COURSES</router-link
          >
          <router-link
            @click.native="closeMenu"
            :to="{ path: '/contact' }"
            class="menu-link"
            >CONTACT US</router-link
          >

          <div class="menu-follow">
            <div class="follow-title">
              <div class="line"></div>
              <div class="text">FOLLOW US</div>
            </div>
            <div class="follow-icons">
              <a target="_blank" href="https://www.instagram.com/le.spiccato/">
                <img src="./ins.png" />
              </a>
              <a
                class="fb"
                target="_blank"
                href="https://www.facebook.com/Le-Spiccato-Music-106989044456978/"
              >
                <img src="./fb.png" />
              </a>
            </div>
            <div class="button-wrap">
              <a
                target="_blank"
                href="https://lespiccato.setmore.com"
                class="button"
              >
                <div class="button-text">FREE TRAIL CLASS BOOKING </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div v-show="menuActive" class="menu-mask" @click="closeMenu"></div>
  </section>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    openMenu() {
      document.body.classList.add("flow-hidden");
      this.menuActive = true;
    },
    closeMenu() {
      document.body.classList.remove("flow-hidden");
      this.menuActive = false;
    },
  },
};
</script>

<style scoped lang="scss">
// header
.header-wrap {
  position: relative;
  height: 70px;
  // background-color: #171819;
  .header-wrap-in {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100%;
    z-index: 50;
    background: #171819;
    .menu-btn {
      position: absolute;
      top: 0;
      left: 0;
      height: 70px;
      width: 60px;
      img {
        width: 20px;
        margin: 35px 20px 15px;
      }
    }
    .header-logo {
      display: block;
      width: 146px;
      img {
        width: 100%;
      }
    }
  }
}

// menu
.menu-wrap {
  position: fixed;
  width: 80%;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #171819;
  z-index: 101;
  .menu-cont {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .menu-logo {
      display: flex;
      justify-content: center;
      padding: 30px 0 10px;
      img {
        width: 146px;
        height: 50px;
      }
    }
    .menu-link {
      display: block;
      text-align: center;
      color: #c5a47e;
      font-family: "BigCaslon";
      font-size: 16px;
      line-height: 19px;
      padding: 25px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      &.menu-link-home {
        border-top: 1px solid rgba(255, 255, 255, 0.4);
      }
    }

    .menu-follow {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      .follow-title {
        text-align: center;
        position: relative;
        .text {
          display: inline-block;
          color: #c5a47e;
          font-family: "BigCaslon";
          font-size: 12px;
          line-height: 14px;
          background: #171819;
          width: 100px;
        }

        .line {
          position: absolute;
          width: 200px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-top: 1px solid #c5a47e;
          z-index: -1;
        }
      }
      .follow-icons {
        padding: 20px 0 30px;
        display: flex;
        justify-content: center;
        a {
          display: block;
          background-color: #eeeeee;
          width: 44px;
          height: 44px;
          border-radius: 22px;
          padding: 10px;
          &.fb {
            margin-left: 40px;
          }
          img {
            width: 24px;
          }
        }
      }
    }
  }
}
.button-wrap {
  text-align: center;
  margin-bottom: 20px;
  .button {
    display: inline-block;
    background-color: #c5a47e;
    border-radius: 38px;
    .button-text {
      display: inline-block;
      padding: 8px 27px;
      font-size: 12px;
      font-family: "DIN";
      color: #fefefe;
      line-height: 14px;
      letter-spacing: 2px;
    }
  }
}

.menu-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
}

// animate
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s linear;
}
.fade-enter,
.fade-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>
