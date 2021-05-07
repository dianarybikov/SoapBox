<template>
    <div class="home">
   <div id="cleaning">
    <h1>Do you need a cleaning?</h1>
    <div id="cleaning-type">
      <a a href="./Services.vue">Standard <br>cleaning</a>
    </div>
    <div id="cleaning-type">
      <a href="./Services.vue">Deep <br> Cleaning</a>
    </div>
    <div id="cleaning-type">
      <a href="./Services.vue">Move in/out <br>cleaning</a>
    </div>
    <div id="cleaning-type">
      <a a href="./Services.vue">Interior/Exterior Window Cleaning</a>
    </div>
  </div>
  <div id="included">
    <h1>What is included in a Cleaning</h1>
    <div id="areas">
      <h2>All Areas</h2>
        <li>Dust light fixtures</li>
        <li>Dust window blinds</li>
        <li>Dust window ledges</li>
        <li>Dust baseboards</li>
        <li>Dust furniture</li>
        <li>light tidying up</li>
        <li>Wet surfaces wipe down</li>
    </div>
    <div id="areas">
        <h2>Kitchen</h2>
        <li>Dust light fixtures</li>
        <li>Dust window blinds</li>
        <li>Dust window ledges</li>
        <li>Dust baseboards</li>
        <li>Dust furniture</li>
        <li>light tidying up</li>
        <li>Wet surfaces wipe down</li>
    </div>
    <div id="areas">
        <h2>Bathrooms</h2>
        <li>Dust light fixtures</li>
        <li>Dust window blinds</li>
        <li>Dust window ledges</li>
        <li>Dust baseboards</li>
        <li>Dust furniture</li>
        <li>light tidying up</li>
        <li>Wet surfaces wipe down</li>
    </div>
    <div id="areas">
        <h2>Add Ons</h2>
        <li>Dust light fixtures</li>
        <li>Dust window blinds</li>
        <li>Dust window ledges</li>
        <li>Dust baseboards</li>
        <li>Dust furniture</li>
        <li>light tidying up</li>
        <li>Wet surfaces wipe down</li>
    </div>
  </div>
        <h1 id="shine">We want you to come home a shine</h1>
    <div id="cat-3">
        <div id="happy">
        <img src="https://spng.subpng.com/20180802/vcc/kisspng-black-white-emoticon-smiley-computer-icons-clip-smile-svg-png-icon-free-download-505342-onlin-5b62bb3990c076.4970999815331971135929.jpg"/>
        <h3> 100% Happiness guaranteed</h3>
        <h4>You can relax, and enjoy a clean home with our 100% <br>happiness guaranteed. If you dont like something we will<br> work to fix it.</h4>
        </div>
        <div id="happy">
            <img src="https://img.icons8.com/pastel-glyph/2x/like--v3.png"/> 
            <h3>We strive to have A+ customer service</h3>
            <h4>We dont only strive for the best cleaning. We want to<br> have a personal relationship. Providing answers as<br> soon as possible. Take care of you is our first priority.</h4>
        </div>
    </div>
  </div>
</template>

<style>

#cleaning{
  /* background:yellow; */
  width:100%;
  height:550px;
  margin-top:50px;
}

#cleaning-type{
  /* background:rgb(140, 140, 218); */
  padding:20px;
  margin:20px;
  display:inline-block;
  width:200px;
  height:200px;
  margin-top:150px;
  background:white;
}
#cleaning-type:hover {
  transform:translate3D(0, -1px,0) scale(1.10);
}
#cleaning-type a {
  text-decoration:none;
  font-size: 25px;
  color:#2c3e50;
}

#included {
  /* background:rgb(83, 124, 83); */
  width:100%;
  height:550px;
}

#areas{
  width:250px;
  height:400px;
  background:white;
  margin:20px;
  display:inline-block;
  margin-top:50px;
  
}

#areas:hover {
  transform:translate3D(0,-1px,0) scale(1.10);
}

li{
  padding:10px;
}
#shine{
    margin-top:120px;
}
#cat-3{
    display:flex;
    justify-content:center;
    padding:15px;
    height:350px;
    
}
#happy{
    padding:35px;
    margin-left:25px;

}
img{
    width:50px;
    height:50px;
}

</style>
