
    document.addEventListener('DOMContentLoaded', function () {
      const navbar = document.getElementById('navbar');
      const hamburger = document.getElementById('hamburgerBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      const closeBtn = document.getElementById('closeBtn');
      
      // Handle navbar scroll effect
      function handleScroll() {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
      
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      
      // Mobile menu toggle functionality
      hamburger.addEventListener('click', function () {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
      
      closeBtn.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
      
      // Close mobile menu when clicking on links
      const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', function () {
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    });
  