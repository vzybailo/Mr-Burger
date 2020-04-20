

    $('.hamburger-menu-link').on('click',function(){ // кликаем на кнопку бургера
      $('.mobile').slideToggle(); // меню открывается
    }); 
    
    $('.mobile__logo-link').on('click', function(){ // кликаем на кнопку крестика
        $('.mobile').slideToggle(); // меню закрывается
      });