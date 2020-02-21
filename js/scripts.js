

$(function () {

  // change image rotation from default 5 sec to 2 sec
  $('.carousel').carousel({ interval: 2000 });
  
  // Single Carousel button toggling between play and pause
  $ ('#carouselButton').click (function () { 
    if ($ ('#carouselButton').children ('i').hasClass ('fa-pause')) {
      $ ('.carousel').carousel ('pause');
      $ ('#carouselButton').children ('i').removeClass ('fa-pause');
      $ ('#carouselButton').children ('i').addClass ('fa-play');
    } else {
      $ ('.carousel').carousel ('cycle');
      $ ('#carouselButton').children ('i').removeClass ('fa-play');
      $ ('#carouselButton').children ('i').addClass ('fa-pause');
    }
  });

// launch Reserve Campsite modal upon button click
  $('#reserveButton').click(function () {
    $('#reserveModal').modal('show');
    
  })

// launch Login Modal
  $('#loginButton').click(function () {
    $('#loginModal').modal('show');
  })
  
});

