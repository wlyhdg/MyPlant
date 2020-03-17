<template>
  <footer>
    <div class="footer">
      <div v-show="showLogo">
        <div class="tri">
          <div class="triangle"></div>
          <div class="triangle2"></div>
          <div class="triangle3"></div>
        </div>
      </div>
      <div class="text-center">
          Made by wlyhdg
      </div>
    </div>
</footer>
</template>

<script>
export default {
  props: {
    showLogo: Boolean
  }
}
</script>

<style>
  footer {
    position: relative;
  }

  .footer {
    position: fixed;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }

  .triangle {
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    border-bottom: 30px solid green;
    border-top: 30px solid transparent;
    border-radius: 5%;
    height: 30px;
    width: 30px;
    position: absolute;
    left: 50%;
    bottom: 7%;
    transform: translateX(-50%);
    z-index: 4;
  }

    .triangle2 {
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    border-bottom: 30px solid teal;
    border-top: 30px solid transparent;
    border-radius: 5%;
    height: 30px;
    width: 30px;
    position: absolute;
    left: 50%;
    bottom: 7%;
    transform: translateX(-38%) translateY(-12%);
    z-index: 3;
    opacity: 0.7;
  }

    .triangle3 {
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    border-bottom: 30px solid burlywood;
    border-top: 30px solid transparent;
    border-radius: 5%;
    height: 30px;
    width: 30px;
    position: absolute;
    left: 50%;
    bottom: 7%;
    transform: translateX(-62%) translateY(-14%);
    z-index: 2;
    opacity: 0.7;
  }

  .tri {
    position: relative;
  }

</style>