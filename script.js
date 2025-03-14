$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["a Student at NIT Raipur", "a Coder",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["a Student at NIT Raipur", "a Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

   

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 200,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            // 600:{
            //     items: 2,
            //     nav: false
            // },
            // 1000:{
            //     items: 3,
            //     nav: false
            // }
        }
    });
});

 //Email function
 emailjs.init("pOBBf_f4QXOG-EAUm");
 function sendEmail() {
    // event.preventDefault(); Prevent the form from submitting normally
    var tempParams = {
        from_name: document.querySelector("input[name='name']").value,
        to_name: "Kaushik", // Set a valid recipient name
        email: document.querySelector("input[name='email']").value,
        message: document.querySelector("textarea[name='message']").value,
    };

    const serviceId = "service_qc8s1i3";
    const templateId = "template_8013y2p";

    emailjs.send(serviceId, templateId, tempParams)
    .then(function(res) {
        console.log("Success! Status:", res.status);
    })
    .catch(function(error) {
        console.error("EmailJS Error:", error);
    });
}


