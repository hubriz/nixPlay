// var myFullpage = new fullpage('#fullpage', {
//     anchors: ['firstPage', 'secondPage'],
//     sectionsColor: ['transparent', '#1BBC9B'],
//     css3: true,
//     navigation: true,
//     navigationPosition: 'right'
// });


$(function(){

  $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage'],
        css3: true,
        navigation: true,
        navigationPosition: 'right',
        scrollHorizontally: false,
        interlockedSlides: true,
        keyboardScrolling: false,
        controlArrows: false,
        slidesNavPosition: "bottom",
	      slidesNavigation: true,
        afterLoad: function(origin, destination, direction){

        },
        onLeave: function(origin, destination, direction){

        }
  });


});
