
const carouselDesktop = Array.from(document.querySelectorAll('.pagination-dot'));
const paginationDots = Array.from(document.querySelectorAll('.dot'));
const memes = Array.from(document.querySelectorAll('.meme'));
const memesDescription = Array.from(document.querySelectorAll('.memeTov'));

carouselDesktop.forEach(dotArea => {
    dotArea.addEventListener('click', () => {
        let ind = carouselDesktop.indexOf(dotArea);
        alignActiveDot(ind);
        alignMeme(ind);
    })
  } )

  function alignActiveDot(ind) {
    paginationDots.forEach(dots => {
      dots.classList.remove('dot-active'); 
    })
    paginationDots[ind].classList.add('dot-active');
  }

  function alignMeme(position) {
          memes.forEach(photo => {
          if (photo !== memes[position]) {
            photo.classList.add('hidden');
         }
        })
        memesDescription.forEach(memeTov => {
            if (memeTov !== memesDescription[position]) {
                memeTov.classList.add('hidden');
            }
        })
        memes[position].classList.remove('hidden');
        memesDescription[position].classList.remove('hidden');
  }
  