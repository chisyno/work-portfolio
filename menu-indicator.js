const links = document.querySelectorAll('.menu li a');
    const indicator = document.querySelector('.indicator');

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const linkRect = link.getBoundingClientRect();
        const menuRect = link.closest('.menu').getBoundingClientRect();

        const centerX = linkRect.left + linkRect.width / 2;
        const offsetLeft = centerX - menuRect.left - indicator.offsetWidth / 2;

        indicator.style.left = `${offsetLeft}px`;
        indicator.style.opacity = '1';
        indicator.style.visibility = 'visible';
      });

      link.addEventListener('mouseleave', () => {
        indicator.style.opacity = '0';
        indicator.style.visibility = 'hidden';
      });
    });