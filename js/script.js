function sendContact() {
  var field1, field2, field3;
    field1 = document.getElementById("error1");
    field2 = document.getElementById("error2");
    field3 = document.getElementById("error3");
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    comment = document.getElementById("comment").value;
    control = false;
    successfully = document.getElementById("successfully");
   console.log (email, subject, comment)
   
   if (email == "" ) {
   field1.innerHTML = "Please insert your email.";
   control = true;
   }
   else if(!email.includes('@')){
   field1.innerHTML = "Please enter a valid email address"
   }
   else{ 
    field1.innerHTML = "";
   }
    if (subject == "" ) {
   field2.innerHTML = "Please insert your subject.";
   control = true;
   }
   else { 
    field2.innerHTML = "";
   }
   if (comment == "" ) {
   field3.innerHTML = "Please insert your message.";
   control = true;
   }
   else { 
    field3.innerHTML = "";
    }
    
   if (control ==  false) {
      successfully.classList.remove("invisible");  
    }
    }

   $(document).ready(function () {
     $('div.hidden').fadeIn(2000).removeClass('hidden');     
    });

    $(document).ready(function() {
    $(window).scroll( function(){
    $('.service, .cover-heading, #about-us-container, #contact-section, .animation-contact').each( function(i){
     console.log(this)
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},800); 
            }
         }); 
      }); 
    });



  $('.fade-container .project-card').each(function(i) {
    setTimeout(()=>{$(this).addClass('animated fadeInUp')}, 400 * i);
  });

  $('.form-column .form-group').each(function(i) {
    setTimeout(()=>{$(this).addClass('animated pulse')}, 450 * i);
  });

  
