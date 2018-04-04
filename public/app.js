$(() => {

  const viewLeft = (event) => {
    $(event.currentTarget).parent().children('.img-left').css('display', 'flex').addClass('slide-left');
  }

  const viewRight = (event) => {
    $(event.currentTarget).parent().children('.img-right').css('display', 'flex').addClass('slide-right');
  }

  const closeLeft = (event) => {
    $(event.currentTarget).parent().removeClass('slide-left').addClass('hidden');
  }

  const closeRight = (event) => {
    $(event.currentTarget).parent().removeClass('slide-right').addClass('hidden');
  }


  $('.dim-left').click(viewLeft);
  $('.dim-right').click(viewRight);
  $('.less-left').click(closeLeft);
  $('.less-right').click(closeRight);
})
