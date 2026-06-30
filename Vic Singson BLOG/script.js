/* =========================
   FEATURED CAROUSEL
========================= */

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if (slides && prevBtn && nextBtn && slide.length > 0) {

  let index = 0;

  function showSlide() {
    slides.style.transform =
      `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {

    index++;

    if (index >= slide.length) {
      index = 0;
    }

    showSlide();

  });

  prevBtn.addEventListener('click', () => {

    index--;

    if (index < 0) {
      index = slide.length - 1;
    }

    showSlide();

  });

  setInterval(() => {

    index++;

    if (index >= slide.length) {
      index = 0;
    }

    showSlide();

  }, 5000);

}


/* =========================
   BLOG CAROUSEL
========================= */

const blogSlides = document.querySelector('.blog-slides');
const blogSlide = document.querySelectorAll('.blog-slide');
const blogPrevBtn = document.querySelector('.blog-prev');
const blogNextBtn = document.querySelector('.blog-next');

if (
  blogSlides &&
  blogPrevBtn &&
  blogNextBtn &&
  blogSlide.length > 0
) {

  let blogIndex = 0;

  function showBlogSlide() {

    blogSlides.style.transform =
      `translateX(-${blogIndex * 100}%)`;

  }

  blogNextBtn.addEventListener('click', () => {

    blogIndex++;

    if (blogIndex >= blogSlide.length) {
      blogIndex = 0;
    }

    showBlogSlide();

  });

  blogPrevBtn.addEventListener('click', () => {

    blogIndex--;

    if (blogIndex < 0) {
      blogIndex = blogSlide.length - 1;
    }

    showBlogSlide();

  });

  setInterval(() => {

    blogIndex++;

    if (blogIndex >= blogSlide.length) {
      blogIndex = 0;
    }

    showBlogSlide();

  }, 4000);

}
/* =========================
   INTERNSHIP CAROUSEL
========================= */

const internshipSlides =
document.querySelector('.internship-slides');

const internshipSlide =
document.querySelectorAll('.internship-slide');

const internshipPrev =
document.querySelector('.internship-prev');

const internshipNext =
document.querySelector('.internship-next');

if (
  internshipSlides &&
  internshipPrev &&
  internshipNext &&
  internshipSlide.length > 0
) {

  let internshipIndex = 0;

  function showInternshipSlide() {

    internshipSlides.style.transform =
      `translateX(-${internshipIndex * 100}%)`;

  }

  internshipNext.addEventListener('click', () => {

    internshipIndex++;

    if (
      internshipIndex >=
      internshipSlide.length
    ) {
      internshipIndex = 0;
    }

    showInternshipSlide();

  });

  internshipPrev.addEventListener('click', () => {

    internshipIndex--;

    if (internshipIndex < 0) {

      internshipIndex =
      internshipSlide.length - 1;

    }

    showInternshipSlide();

  });

  setInterval(() => {

    internshipIndex++;

    if (
      internshipIndex >=
      internshipSlide.length
    ) {

      internshipIndex = 0;

    }

    showInternshipSlide();

  }, 4000);

}