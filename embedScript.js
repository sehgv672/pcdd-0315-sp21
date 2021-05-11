$(document).ready(function() {
  
    //menu button for mobile
    $(".mobileMenuButton").on('click',function(){
      $(".mobileNavigation").css('right',"0%");
      $(".mobileNavigation ul").css('display',"block");
      $(".mobileMenuButton").css('display',"none");
      $(".mobileExit").css('display',"block");
    });
  
    //exit button for mobile menu
    $(".mobileExit").on('click',function(){
      $(".mobileNavigation").css('right',"100%");
      $(".mobileNavigation ul").css('display',"none");
      $(".mobileMenuButton").css('display',"block");
      $(".mobileExit").css('display',"none");
    });
  
  });
  