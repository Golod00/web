  "use strict"

  const problemdropdawn = document.querySelector('.problem-dropdawn');
  const problemArrow = document.querySelector('.problem-arrow');

  if (problemdropdawn && problemArrow) {
    problemArrow.addEventListener('click', () => {
      problemdropdawn.classList.toggle('active')
      problemArrow.classList.toggle('active')
    })
  }