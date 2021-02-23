window.onscroll = () => {
  if (window.pageYOffset > 50) {
    document
      .querySelector('#top-header')
      .classList.add('top-header--white-bgc')
  } else {
    document
      .querySelector('#top-header')
      .classList.remove('top-header--white-bgc')
  }
}
