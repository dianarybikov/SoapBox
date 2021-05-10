<template>
    <!-- <div id="contact">
            
            <div id="contact-info">
            <h4>Phone Number:</h4>
            <p>303-884-8298</p>
            <h4>Email:</h4>
            <p>soapbox.denver@gmail.com</p>
            <h4>Where we provide services:</h4>
            <p>Denver <br> Arvada <br> Westminster<br>Aurora<br>Lakewood<br>Thornton<br></p>
            </div>
    </div> -->
    <div id="contact-us">
    <div id="contact">
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="https://cdn3.iconfinder.com/data/icons/network-and-communications-10/32/network_contact_list_contact_log_contact_book-512.png" 
      alt="Avatar" 
      style="width:300px;height:300px;">
      <h2>Contact info</h2>
    </div>
    <div class="flip-card-back">
        <h4>Phone Number:</h4>
        <p>303-884-8298</p>
        <h4>Email:</h4>
        <p>soapbox.denver@gmail.com</p>
        <h4>Where we provide services:</h4>
        <p>Denver <br> Arvada <br> Westminster<br>Aurora<br>Lakewood<br>Thornton<br></p>
    </div>
  </div>
</div>
</div>
</div>
</template>



<style>
#contact-us{
    height:600px;

}
#contact{
    position:absolute;
    top:30%;
    left:60%;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
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
  /* background-color: #bbb; */
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color:#B4CBD9;
  color: white;
  transform: rotateY(180deg);
}


</style>