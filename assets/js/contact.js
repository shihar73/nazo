$(document).ready(function(){
    $(function() {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                subject: {
                    required: true,
                    number:true,
                    minlength: 1
                },
                number: {
                    required: true,
                    number:true,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 4
                }
            },
            messages: {
                name: {
                    required: "Please, Enter your name",
                    minlength: "your name must consist of at least 3 characters"
                },
                subject: {
                    required: "Please, Enter your trees",
                    minlength: "your must want 1 tree"
                },
                number: {
                    required: "Please, Enter your number",
                    minlength: "your Number must consist of at least 10 characters"
                },
                message: {
                    required: "Please, Enter your addres",
                    minlength: "your name must consist of at least 4 characters"
                }
            },
            // submitHandler: function(form) {
            //     $(form).ajaxSubmit({
            //         type:"POST",
            //         data: $(form).serialize(),
            //         url:"contact_process.php",
            //         success: function() {
            //             $('#contactForm :input').attr('disabled', 'disabled');
            //             $('#contactForm').fadeTo( "slow", 1, function() {
            //                 $(this).find(':input').attr('disabled', 'disabled');
            //                 $(this).find('label').css('cursor','default');
            //                 $('#success').fadeIn()
            //                 $('.modal').modal('hide');
		    //             	$('#success').modal('show');
            //             })
            //         },
            //         error: function() {
            //             $('#contactForm').fadeTo( "slow", 1, function() {
            //                 $('#error').fadeIn()
            //                 $('.modal').modal('hide');
		    //             	$('#error').modal('show');
            //             })
            //         }
            //     })
            // }
        })
    })
        
 })
