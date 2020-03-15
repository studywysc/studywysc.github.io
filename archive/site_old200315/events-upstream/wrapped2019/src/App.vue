<template>
  <div id="app">
    <a href="https://wysc.netlify.com" rel="noopener">
      <img class="wlogo" alt="logo" src="@/assets/wsc-square-sm.png">
    </a>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/showcase">Showcase</router-link>&ensp;
      <a href="https://wysc.netlify.com" rel="noopener">View Site</a>
    </div>
    <transition
         name="fade"
         mode="out-in"
         @beforeLeave="beforeLeave"
         @enter="enter"
         @afterEnter="afterEnter"
       >
         <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
};
</script>

<style lang="scss">

body {
  background: #232323;
}

#app, span {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Lato","Helvetica Neue",Roboto,Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    margin: 0 1em;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
  color: #73a4d4;
  transition: 300ms;
  text-decoration: none;
  &:hover {
    color: #608ab8
  }
}

.button {
  border-radius: 4px;
  background-color: #444;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 1em;
  padding: 20px;
  width: 14em;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover {
  background-color: #555;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.footer {
  padding-top: 4em;
  margin: 2em;
  font-size: 1em;
}

.wlogo {
  width: 100px;
  border-radius: 15px;
  margin-top: 2em;
}

.home, .showcase {
  h1 {
    margin-bottom: 1em;
  }
  p {
    margin-bottom: 2em;
  }
  .textcontainer {
    width: 50%;
    font-size: 1.25em;
    line-height: 1.75em;
    margin: auto;
  }
  br {
    margin-bottom: 1em;
  }
}

@media screen and (max-width:1200px) {
  .home, .showcase {
    .textcontainer {
      width: 80%;
      font-size: 1.15em;
      margin: auto;
    }
  }
}

@media screen and (max-width:750px) {
  .home, .showcase {
    .textcontainer {
      width: 90%;
      font-size: 1.15em;
      margin: auto;
    }
  }
}
</style>
