/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.getElementById('email1').addEventListener('change', function () {
    const emailInput = document.getElementById('email1');
    const errorElement = document.getElementById('error2');
    const email = emailInput.value.trim();

    if (email === '') {
        errorElement.textContent = 'Email address cannot be empty';
        emailInput.style.border = "4px solid red"; 
    } else if (!validateEmail(email)) {
        errorElement.textContent = 'Invalid email address';
        emailInput.style.border = "4px solid red"; 
    } else {
        errorElement.textContent = '';
        emailInput.style.border = "6px solid green"; 
    }
});

function validateEmail(name) {
    const emailPattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return emailPattern.test(name);
}

document.getElementById('name').addEventListener('change', function () {
    const emailInput = document.getElementById('name');
    const errorElement = document.getElementById('error1');
    const email = emailInput.value.trim();

    if (email === '') {
        errorElement.textContent = 'Name cannot be empty';
        emailInput.style.border = "4px solid red"; 
    } else if (!validateEmail(name)) {
        errorElement.textContent = 'Invalid name';
        emailInput.style.border = "4px solid red"; 
    } else {
        errorElement.textContent = '';
        emailInput.style.border = "6px solid green"; 
    }
});

function validateEmail(details) {
    const emailPattern = /^[A-Za-z]+$/;
    return emailPattern.test(details);
}

document.getElementById('details').addEventListener('change', function () {
    const emailInput = document.getElementById('details');
    const errorElement = document.getElementById('error3');
    const email = emailInput.value.trim();

    if (email === '') {
        errorElement.textContent = 'details cannot be empty';
        emailInput.style.border = "4px solid red"; 
    } else if (!validateEmail(details)) {
        errorElement.textContent = 'Invalid';
        emailInput.style.border = "4px solid red"; 
    } else {
        errorElement.textContent = '';
        emailInput.style.border = "6px solid green"; 
    }
});

var form = document.getElementById("contactForm")
  

  form.addEventListener("submit", function(event) {
    var name = document.getElementById("cname").value;
    var email = document.getElementById("cemail").value;
    var phone = document.getElementById("cphone").value;

    var nameRegex = /^[A-Za-z]+$/;
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneregex = /^\d{10}$/;
    if(!nameRegex.test(name)){
      event.preventDefault();
      alert("Name should only contain letters!!");
    }else if(!validRegex.test(email)){
      event.preventDefault();
      alert("Email not valid!!");
    }else if(!phoneregex.test(phone)){
      event.preventDefault();
      alert("Phone number should contain 10 digits");
    }else{
      alert("Message Sent!!");
    }
  });