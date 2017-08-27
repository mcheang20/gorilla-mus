(function() {
     function LandingCtrl() {
          this.heroTitle = "Turn the Music Up!";

          $("button").click(function() {
            $('html,body').animate({
                scrollTop: $(".selling-points").offset().top},
                'slow');
        });
     }

     angular
         .module('gorillaMus')
         .controller('LandingCtrl', LandingCtrl);
 })();
