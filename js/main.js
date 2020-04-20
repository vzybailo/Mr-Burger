        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        var myMap;

        function init(){ 
            // Создание карты.    
            var myMap = new ymaps.Map('map', {
                zoom: 12,
                center: [59.93772, 30.313622],
                controls: []
                
            });

            myMap.behaviors.disable('scrollZoom');

            var coords = [
                [59.925316112136144,30.313817746093704],
                [59.92049024058814,30.47002959912101],
                [59.966704224745584,30.31234138790169],
                [59.90842248046625,30.25922942822256]

            ];
            var myCollection = new ymaps.GeoObjectCollection({}, {
                draggable: false, // и их можно перемещать

                iconLayout: 'default#image',
                iconImageHref: '/img/icons/map-marker.svg', //установить свою метку на карте в виде картинки
                iconImageSize: [46, 57],
                iconImageOffset: [-26, -52]

            });
            
            for (var i = 0; i < coords.length; i++) {
                myCollection.add(new ymaps.Placemark(coords[i]));
            }
            
            myMap.geoObjects.add(myCollection);

        }


      


    // tabs team
    
    $('.team__acco-item').on('click', function (e) {
      e.preventDefault()

      var elem = $(e.target);

      elem.closest('.team__acco-item').addClass('active').siblings().removeClass('active'); //при клике на название добавляется класс active удаляется с соседних

      }
    )

    // tabs team end

    //accordeon menu start
    $('.menu__acco-trigger').on('click', function (e) {
        e.preventDefault()
  
        var elem = $(this).siblings('.menu__acco-content');
        if (!elem.hasClass('text-active')) {
          $('.menu__acco-content').removeClass('text-active');
          elem.addClass('text-active');
        }

      });
        

    //accordeon menu end

      // modal window start

        $(".review__view").on("click",function(e){
            e.preventDefault()
        
            $(".popup").css({
                "display":"block"
            })
        });
        
        $(".popup__cross").on("click",function(e){
            e.preventDefault()
        
            $(".popup").css({
                "display":"none"
            })

        });

    // modal window end








    // onepagescroll start

    $(function() {

        var sections = $('.section'),
        display = $('.maincontent'),
        inScroll = false;

        var perfomTransition = function (sectionEq) { // передаем номер секции

            if (!inScroll) {
                inScroll = true;

                var position = (sectionEq  * -100) + '%'; // определяем позицию

                display.css({
                    'transform' : 'translateY(' + position + ')'
                })

            sections.eq(sectionEq).addClass('active')
            .siblings().removeClass('active');

            setTimeout(function(){
                inScroll = false;
                $('.fixed__menu-item').eq(sectionEq).addClass('active')
                    .siblings().removeClass('active');
            },1300);

            }
        }



       $('.wrapper').on('wheel', function(e) { // перемещение по колесику мышки
        
            var deltaY = e.originalEvent.deltaY;
            var activeSection = sections.filter('.active');
            var nextSection = activeSection.next();
            var prevSection = activeSection.prev();

            if (deltaY > 0 && nextSection.length) { //скролим вверх и проверяем длину лендинга
                console.log('вверх');

                perfomTransition(nextSection.index());
            }

            if (deltaY < 0 && prevSection.length) { //скролим вниз
                console.log('вниз');

                perfomTransition(prevSection.index());
            }
        });  



        $(document).on('keydown', function(e) {  // при нажатии на кнопку на клавиатуре
            var activeSection = sections.filter('.active');
            var nextSection = activeSection.next();
            var prevSection = activeSection.prev();

            console.log(e.keyCode);
            switch (e.keyCode) {
                case 40: //вверх
                    if(nextSection.length) {
                        perfomTransition(nextSection.index());
                    }
                    break; // выполнялось только это условие

                case 38: // вниз
                if(prevSection.length) {
                    perfomTransition(prevSection.index());
                }
                break;
            }
        })

        $('[data-scroll-to]').on('click', function(e){  // переходы по клике на название меню либо фикс меню
            e.preventDefault();

            var elem = $(e.target);

            perfomTransition(elem.attr('data-scroll-to'));
        
        });



        // mobile swipe 

        $(window).swipe ({

                  //Generic swipe handler for all directions
                  swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                    $(this).text("You swiped " + direction );  

                
              }
        });
                    
    });




    $(function() {
        var moveSlide = function(container,slideNum) {

        var
        items=container.find(".slider__item"),
        activeSlide=items.filter(".slider-active"),
        reqItem=items.eq(slideNum),
        reqIndex=reqItem.index(),
        list=container.find(".slider"),
        duration=500;

        if(reqItem.length) {
            list.animate({
            "left": -reqIndex * 100 + "%"
        },duration , function() {
            activeSlide.removeClass("slider-active");
            reqItem.addClass("slider-active");
        });
        }
    }

    $(".arrow__link").on("click" , function(e){
        e.preventDefault();

        var $this=$(this),
        container = $(".food"),
        items=container.find(".slider__item"),
        activeItem= items.filter(".slider-active"),
        existedItem,edgeItem,reqItem;

        if ($this.hasClass("arrow__link_right")){
            existedItem=activeItem.next();
            edgeItem=items.first();
        }
        if ($this.hasClass("arrow__link_left")){
            existedItem=activeItem.prev();
            edgeItem=items.last();
        }
        
        reqItem= existedItem.length ? existedItem.index() : edgeItem.index();
       
              moveSlide(container,reqItem );
        
    });
    });



    