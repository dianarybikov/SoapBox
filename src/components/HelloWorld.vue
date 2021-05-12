<template>
    <div class="home">
   <div id="cleaning">
    <h1>A clean home</h1>
    <h2>is a happy home</h2>
     <img src="https://rdcnewsadvice.wpengine.com/wp-content/uploads/2016/07/clean-house.jpg">
  </div>
  <div id="included">
    <h1>What is included in a Cleaning</h1>
    <div id="areas">
      <img src="https://www.pngfind.com/pngs/m/38-385503_cg-home-icon-svg-png-free-download-home.png">
      <h2>All Areas</h2>
        <li>Dust light fixtures</li>
        <li>Dust window blinds & ledges</li>
        <li>Dust baseboards</li>
        <li>Dust furniture</li>
        <li>light tidying up</li>
        <li>Wet surfaces wipe down</li>
    </div>
    <div id="areas">
      <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/kitchen-1447727-1224141.png">
        <h2>Kitchen</h2>
        <li>Oven wipe down </li>
        <li>Backsplash & Countertop</li>
        <li>Sinks & Faucets</li>
        <li>Fridge wipe down</li>
        <li>Mircrowave</li>
        <li>Tables & Chairs washed</li>
    </div>
    <div id="areas">
      <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/bathroom-1677078-1427673.png">
        <h2>Bathrooms</h2>
        <li>Showers & Tubs</li>
        <li>Mirrors cleaning</li>
        <li>Toilets disinfected</li>
        <li>Trash emptied</li>
        <li>Vanity cleaning</li>
        <li>Cabinet fronts wiped</li>
    </div>
    <div id="areas">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73vcJfDBr_rEunISWVwGGl_kauyHkeexIfw&usqp=CAU">
        <h2>Add Ons</h2>
        <li>Inside Fridge</li>
        <li>Inside Oven</li>
        <li>Inside washing machine</li>
        <li>Baseboards wet wiped</li>
        <li>Blinds wet wipe</li>
        <li>Laundry</li>
        
    </div>
  </div>
        <h1 id="shine">We want you to come home to a shine</h1>
    <div id="cat-3">
        <div id="happy">
        <img src="https://spng.subpng.com/20180802/vcc/kisspng-black-white-emoticon-smiley-computer-icons-clip-smile-svg-png-icon-free-download-505342-onlin-5b62bb3990c076.4970999815331971135929.jpg"/>
        <h3> 100% Happiness guaranteed</h3>
        <h4>You can relax, and enjoy a clean home with our 100% <br>happiness guaranteed. If you dont like something we will<br> work to fix it.</h4>
        </div>
        <div id="happy">
            <img src="https://img.icons8.com/pastel-glyph/2x/like--v3.png"/> 
            <h3>We strive to have A+ customer service</h3>
            <h4>We dont only strive for the best cleaning. We want to<br> have a personal relationship. Providing answers as<br> soon as possible. Taking care of you is our first priority.</h4>
        </div>
    </div>
<div >

</div>
  </div>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">

</template>

<style scoped>

html {
  scroll-behavior: smooth;
}
#cleaning{
  width:100%;
  height:590px;
  margin-top:50px;
}
#cleaning h1{
  position:absolute;
  top:38%;
  left:62%;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size:45px;
  
}
#cleaning h2{
  position:absolute;
  top:58%;
  left:46%;
  font-size:70px;
  z-index:100;
  font-family: 'Cedarville Cursive', cursive;
  color:black;
}
#cleaning img{
  position:absolute;
  top:14%;
  left:1%;
  width:650px;
  height:550px;

}

#cleaning-type a {
  text-decoration:none;
  font-size: 25px;
  color:#2c3e50;
}

#included {
  /* background:rgb(83, 124, 83); */
  width:100%;
  height:590px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size:21px;

}
#included h1{
  margin-bottom:35px;
}

#areas{
  width:250px;
  height:400px;
  /* background:white; */
  margin:20px;
  display:inline-block;
  margin-top:50px;
  text-align:left;
  
}

#areas:hover {
  transform:translate3D(0,-1px,0) scale(1.10);
}

li{
  padding:10px;
}
#shine{
    margin-top:70px;
    font-family: 'Open Sans Condensed', sans-serif;
}
#cat-3{
    display:flex;
    justify-content:center;
    padding:15px;
    height:350px;
    font-family: 'Open Sans Condensed', sans-serif;
    margin-top:50px;
    
}

#cat-3 h3 {
  padding:10px;
  margin-bottom:7px;
  font-size:30px;
}
#cat-3 h4 {
  padding:10px;
  margin-bottom:7px;
  font-size:17px;
}


#happy{
    padding:35px;
    margin-left:28px;

}
img{
    width:50px;
    height:50px;
}

</style>
