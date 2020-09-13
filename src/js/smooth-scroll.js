const $root = $('body,html');
const $link = $('.js-anchor');

$link.on('click', scrollToBlock);

function scrollToBlock(e) {
  const id = $(this).attr('href');

  if ($(id).length) {
    e.preventDefault();
    let top = $(id).offset().top;

    $root.animate({ scrollTop: top }, 1000);

    $link.removeClass('is-active');
    $(this).addClass('is-active');
  }
}


