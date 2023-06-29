<template>
  <div>
    <div class="container">
      <div :class="shape" v-for="shape in shapes">
        <div :class="shape" tabindex="0">
          <div :class="`face ${faceClass}`" v-for="faceClass in faceClasses" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const shapes = ['shape', 'shape', 'shape', 'shape']
const faceClasses = ['front', 'back', 'right', 'left', 'top', 'bottom']
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

body {
  margin: 0;
  box-sizing: border-box;
  color: white;
  font-family: "Poppins", sans-serif;
  background-color: #000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 7vmin;
  --box-color: rgb(172 255 128 / 60%);

  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    perspective: 1000px;
    gap: 7vmin;

    .shape {
      width: 20vmin;
      height: 20vmin;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateX(-20deg) rotateY(-20deg);
      &:hover,
      &:focus {
        animation: rotate 10s infinite linear;
        .face {
          background-color: var(--box-color);
          box-shadow: 0 0 16px var(--box-color);
        }
      }

      &:nth-child(1):hover,
      &:nth-child(1):focus {
        .face {
          --box-color: rgba(239, 154, 154, 0.8);
        }
      }

      &:nth-child(2):hover,
      &:nth-child(2):focus {
        .face {
          --box-color: rgb(255 0 0 / 80%);
        }
      }

      &:nth-child(3):hover,
      &:nth-child(3):focus {
        .face {
          --box-color: rgba(255, 160, 0, 0.8);
        }
      }

      &:nth-child(4):hover,
      &:nth-child(4):focus {
        .face {
          --box-color: rgba(63, 81, 181, 0.8);
        }
      }
    }

    .face {
      position: absolute;
      width: 20vmin;
      height: 20vmin;
      background-color: var(--box-color);
      border: 1px solid #fff;
      box-sizing: border-box;
      opacity: 0.9;
      transition: all 0.5s ease-in-out;
    }

    .front {
      transform: translateZ(10vmin);
    }

    .back {
      transform: translateZ(-10vmin);
    }

    .right {
      transform: rotateY(90deg) translateZ(10vmin);
    }

    .left {
      transform: rotateY(-90deg) translateZ(10vmin);
    }

    .top {
      transform: rotateX(90deg) translateZ(10vmin);
    }

    .bottom {
      transform: rotateX(-90deg) translateZ(10vmin);
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotateX(-20deg) rotateY(-20deg) rotateZ(0);
  }
  100% {
    transform: rotateX(340deg) rotateY(340deg) rotateZ(720deg);
  }
}

</style>
