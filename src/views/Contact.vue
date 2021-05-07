<template>
    <div id="contact">
            <h1 id="us">Contact us</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12936887765!2d-104.995196694213!3d39.7645186739618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1619121137706!5m2!1sen!2sus" 
            allowFullScreen=""
            title="googlemap"
            key="denver-map"
            >
            </iframe>
            <div id="contact-info">
            <h4>Phone Number:</h4>
            <p>303-884-8298</p>
            <h4>Email:</h4>
            <p>soapbox.denver@gmail.com</p>
            <h4>Where we provide services:</h4>
            <p>Denver <br> Arvada <br> Westminster<br>Aurora<br>Lakewood<br>Thornton<br></p>
            </div>
    </div>
</template>



<style>
#us{
    position:absolute;
    top:10%;
    left:43%;
}
#contact{
    height:620px;
}
#contact iframe {
    position:absolute;
    top:30%;
    left:5%;
    border: 0;
    width:700px;
    height:400px;
    margin-bottom:15px;
}

#contact-info {
    position:absolute;
    top:30%;
    left:65%;
    width: 400px;
    height:350px;
    /* border-style: solid;
    border-color: grey;
    padding:0px;
    background:white; */
}

#contact-info h4{
    padding:10px;
}
</style>