// Mobile Navigation Toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Change icon based on menu state
            if (navMenu.classList.contains('active')) {
                navToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                
                // Update active link
                navLinks.forEach(item => item.classList.remove('active'));
                link.classList.add('active');
            });
        });
        
        // Header scroll effect
        const header = document.getElementById('header');
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                backToTop.classList.add('active');
            } else {
                header.classList.remove('scrolled');
                backToTop.classList.remove('active');
            }
            
            // Update active navigation link based on scroll position
            let current = '';
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe all elements with fade-in class
        document.querySelectorAll('.fade-in').forEach((el) => {
            observer.observe(el);
        });
        
        // Initialize with some elements already visible
        window.addEventListener('DOMContentLoaded', () => {
            const heroElements = document.querySelectorAll('.hero .fade-in');
            heroElements.forEach(el => {
                el.classList.add('fade-in');
            });
        });