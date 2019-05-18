$('[data-fancybox]').fancybox({
    loop: true,
    transitionEffect: 'fade',
    transitionDuration: 1500,
    animationDuration: 400,
    buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "share",
        "close"
    ]
});


// document.addEventListener('scroll', function() {
// scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
//   progress.style.setProperty('--scroll', scroll + '%');

//     if (tweetItBtn && topBtn && !topBtn.classList.contains('top-active') && window.scrollY >= 1500) {
//       topBtn.classList.add('top-active');
//       tweetItBtn.classList.add('tweet-it-active');
//     } else if (topBtn && topBtn.classList.contains('top-active') && window.scrollY < 1500) {
//       topBtn.classList.remove('top-active');
//       tweetItBtn.classList.remove('tweet-it-active');

//     }
//   }, {
//     passive: true
//   });


$(window).scroll(function () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled_val = (winScroll / height) * 100;
    var progress = $(".progress-bar")[0];
    console.log(scrolled_val);
    progress.style.setProperty('width', scrolled_val + '%');
});