const headerWrappers = document.querySelectorAll('.header-wrapper');

headerWrappers.forEach(headerWrapper => {
  headerWrapper.addEventListener('click', () => {
    const currentlyActiveAccordion = document.querySelector('.header-wrapper.active');
    if (currentlyActiveAccordion && currentlyActiveAccordion !== headerWrapper) {
      currentlyActiveAccordion.classList.toggle('active');
      currentlyActiveAccordion.nextElementSibling.style.maxHeight = '0';
    }

    headerWrapper.classList.toggle('active');

    const accordionContent = headerWrapper.nextElementSibling;
    if (headerWrapper.classList.contains('active')) {
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
    }else {
      accordionContent.style.maxHeight = '0';
    }
  })
})