<template>
<div id="full-page">
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <h1>Kitchen</h1>
    <img src="https://images.sherwin-williams.com/content_images/sw-img-kitchen-01-hdr.jpg" style="width:440px; height:420px;"/>
      
    </div>
    <div class="flip-card-back">
      <li>Appliance exterior</li>
        <li>microwave inside</li>
        <li>countertop and backsplash</li>
        <li>stovetop surface cleaning</li>
        <li>under small appliances</li>
        <li>Sinks and Faucets disinfected</li>
        <li>Trash Emptied</li>
        <li>Table and chairs wiped</li>
        <li>Top of fridge cleaned<h6>deep</h6> </li>
        <li>Cabinet fronts wiped<h6>deep</h6> </li>
        <li>stove burners and knobs wiped<h6>deep</h6> </li>
        <li>Inside cabinets<h6>move-out only</h6> </li>
    
    </div>
  </div>
</div>
<div class="flip-card-02">
  <div class="flip-card-inner-02">
    <div class="flip-card-front">
        <h1>Bathroom</h1>
        <img src="https://www.mydomaine.com/thmb/0gtcH6nubr82Pfdo7qz5QCZbPoU=/700x525/smart/filters:no_upscale()/cdn.cliqueinc.com__cache__posts__86497__bathroom-decorating-ideas-86497-1516227530488-main.700x0c-7df1bc036a5e49b0be9ce9df413a132b-1631561e0dd74e4b8380161a610a000b-8427b6ae9007491e83585cac7d8298ae.jpg" style="width:440px; height:420px;"/>
    </div>
    <div class="flip-card-back">
      <li>Showers and Tubs disinfected</li>
        <li>Sink and Faucets disinfected</li>
        <li>Toilets disinfected inside/out</li>
        <li>Countertops wiped</li>
        <li>Vanity exterior wiped</li>
        <li>Mirrors cleaned</li>
        <li>Trash Emptied</li>
        <li>Door wiped<h6>deep</h6> </li>
        <li>Cabinet fronts wiped<h6>deep</h6> </li>
        <li>Shower Heads cleaned<h6>deep</h6> </li>
        <li>Inside medicine cabinets<h6>move-out/in only</h6> </li>
    </div>
  </div>
</div>
<div class="flip-card-03">
  <div class="flip-card-inner-03">
    <div class="flip-card-front">
        <h1>Bedrooms</h1>
        <img src="https://i.pinimg.com/originals/94/2e/d6/942ed6b973943ffe454d230b5878d3ed.jpg" style="width:440px; height:420px;"/>
    </div>
    <div class="flip-card-back">
        <li>Furniture Dusted</li>
        <li>Beds made</li>
        <li>Vacuum floors</li>
        <li>Vacuum inside closet<h6>by request</h6></li>
        <li>Light tidying up</li>
    </div>
  </div>
</div>
<div class="flip-card-04">
  <div class="flip-card-inner-04">
    <div class="flip-card-front">
        <h1>Laundry</h1>
        <img src="http://www.byhyu.com/uploads/4/7/3/7/47371935/laundry-room-67_orig.jpg" style="width:440px; height:420px;"/>
    </div>
    <div class="flip-card-back">
        <li>Vacuum and mop Floors</li>
        <li>Washer & Dryer exteriors wiped</li>
        <li>Empty Dryer lint trap<h6>deep</h6></li>
        <li>Between washer and dryer area<h6>deep</h6></li>
    </div>
  </div>
</div>
<div class="flip-card-05">
  <div class="flip-card-inner-05">
    <div class="flip-card-front">
        <h1>All Areas</h1>
        <img src="https://i.pinimg.com/originals/b0/e7/80/b0e780fe1733563cd76941705b377efa.jpg" style="width:440px; height:420px;"/>
    </div>
    <div class="flip-card-back">
        <li>Ceiling fans dusted under 10'</li>
        <li>Light Fixtures dusted under 10'</li>
        <li>Furniture dusted</li>
        <li>Light tidying up</li>
        <li>Switches and door knobs wiped</li>
        <li>Sliding glass doors cleaned inside/out</li>
        <li>Doors and Door Frames wiped<h6>deep</h6></li>
        <li>Vents dry dusted<h6>deep</h6></li>
        <li>Couches and cushions vacuumed<h6>deep</h6></li>
        <li>Window blinds/ledges dry dusted<h6>deep</h6></li>
        <li>Baseboards dry dusted<h6>deep</h6></li>
        <li>Inside closets shelves wiped<h6>move-out/in only</h6></li>   
    </div>
  </div>
</div>
<div class="flip-card-06">
  <div class="flip-card-inner-06">
    <div class="flip-card-front">
        <h1>Add On Services</h1>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cleaning-glass-at-home-1559038890.jpg?crop=0.668xw:1.00xh;0.105xw,0&resize=640:*" style="width:440px; height:420px;"/>
    </div>
    <div class="flip-card-back">
        <li>Inside fridge</li>
        <li>Inside oven</li>
        <li>Inside washing & dryer machines</li>
        <li>Baseboard wet wiped</li>
        <li>Blinds wet wipe</li>
    </div>
  </div>
</div>
</div>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">

</template>

<style scoped>

#full-page{
height:1614px;
}
.flip-card {
    background-color: transparent;
    width: 440px;
    height: 420px;
    perspective: 1000px; 
    position:absolute;
    left:52%;
    top:80%;
}
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.5s;
    transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; 
    backface-visibility: hidden;
}
.flip-card-front {
    background-color: #b4cbd994;
    color: black;
}
.flip-card-front h1{
    margin:0;
    padding:0px;
}
.flip-card-back {
    background-color:#b4cbd994;
    color: white;
    transform: rotateY(180deg);
}
.flip-card-back li {
    text-align: left;
    padding:2px;
    color:black;
    font-weight: bold;
    list-style-type:none;
    margin-left:15px;
    margin-top:5px;
}
.flip-card-back h6 {
    color:#2D3E73;
    display:inline-block;
    padding:7px;
}
.flip-card-02 {
    background-color: transparent;
    width: 440px;
    height: 420px;
    perspective: 1000px; 
    position:absolute;
    left:12%;
    top:80%;
}
.flip-card-inner-02 {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.5s;
    transform-style: preserve-3d;
}
.flip-card-02:hover .flip-card-inner-02 {
    transform: rotateY(180deg);
}
.flip-card-03 {
    background-color: transparent;
    width: 440px;
    height: 420px;
    perspective: 1000px; 
    position:absolute;
    left:12%;
    top:150%;
}
.flip-card-inner-03 {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.5s;
    transform-style: preserve-3d;
}
.flip-card-03:hover .flip-card-inner-03 {
    transform: rotateY(180deg);
}
.flip-card-04 {
    background-color: transparent;
    width: 440px;
    height: 420px;
    perspective: 1000px; 
    position:absolute;
    left:52%;
    top:150%;
}
.flip-card-inner-04 {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.5s;
    transform-style: preserve-3d;
}
.flip-card-04:hover .flip-card-inner-04 {
    transform: rotateY(180deg);
}
.flip-card-05 {
    background-color: transparent;
    width: 440px;
    height: 420px;
    perspective: 1000px; 
    position:absolute;
    left:12%;
    top:220%;
}
.flip-card-inner-05 {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.5s;
    transform-style: preserve-3d;
}
.flip-card-05:hover .flip-card-inner-05 {
    transform: rotateY(180deg);
}
.flip-card-06 {
    background-color: transparent;
    width: 440px;
    height: 420px;
    perspective: 1000px; 
    position:absolute;
    left:52%;
    top:220%;
}
.flip-card-inner-06 {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.5s;
    transform-style: preserve-3d;
}
.flip-card-06:hover .flip-card-inner-06 {
    transform: rotateY(180deg);
}

</style>