$(() => {
  const viewLeft = event => {
    $(event.currentTarget)
      .parent()
      .children(".img-left")
      .css("display", "flex")
      .addClass("slide-left");
  };

  const viewRight = event => {
    $(event.currentTarget)
      .parent()
      .children(".img-right")
      .css("display", "flex")
      .addClass("slide-right");
  };

  const closeLeft = event => {
    $(event.currentTarget)
      .parent()
      .removeClass("slide-left")
      .addClass("hidden");
  };

  const closeRight = event => {
    $(event.currentTarget)
      .parent()
      .removeClass("slide-right")
      .addClass("hidden");
  };

  $(".dim-left").click(viewLeft);
  $(".dim-right").click(viewRight);
  $(".less-left").click(closeLeft);
  $(".less-right").click(closeRight);

  // credit to: https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });
});
