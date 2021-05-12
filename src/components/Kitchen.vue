<template>
<img src="https://images.sherwin-williams.com/content_images/sw-img-kitchen-01-hdr.jpg"/>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <h1>Kitchen</h1>
      <!-- <img src="https://images.sherwin-williams.com/content_images/sw-img-kitchen-01-hdr.jpg" alt="Avatar" style="width:300px;height:300px;"> -->
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
</template>

<style scoped>
img{
    width: 400px;
    height:420px;
    position:absolute;
    top:100%;
    left:10%;
}
.flip-card {
  background-color: transparent;
  width: 400px;
  height: 420px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; 
  position:absolute;
  left:60%;
  top:100%;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #D9BDBA;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: #b4cbd994;
  color: white;
  transform: rotateY(180deg);
}
</style>