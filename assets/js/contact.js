$(document).ready(function(){
    $(function() {
        "use strict";


        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");

        // validate contactForm form
        $('#contact-form').validate({
            rules: {
                Name: {
                    required: true,
                    minlength: 3
                },
                Trees: {
                    required: true,
                    number:true,
                    minlength: 1
                },
                Number: {
                    required: true,
                    number:true,
                    minlength: 10
                },
                Address: {
                    required: true,
                    minlength: 4
                }
            },
            messages: {
                Name: {
                    required: "Please, Enter your name",
                    minlength: "your name must consist of at least 3 characters"
                },
                Trees: {
                    required: "Please, Enter your trees",
                    minlength: "your must want 1 tree"
                },
                Number: {
                    required: "Please, Enter your number",
                    minlength: "your Number must consist of at least 10 characters"
                },
                Address: {
                    required: "Please, Enter your addres",
                    minlength: "your name must consist of at least 4 characters"
                }
            },

            submitHandler: function(form){
                $('#contact-form').submit((e)=>{
                    e.preventDefault()
                    $.ajax({
                        url:"https://script.google.com/macros/s/AKfycbx-dJhXR9TWvsAk-n5VRrZS39AEjlMlG2FG6w2xtg/exec",
                        data:$("#contact-form").serialize(),
                        method:"post",
                        success:function (response){
                            alert("Submitted successfully")
                            window.location.reload()
                            //window.location.href="https://google.com"
                        },
                        error:function (err){
                            alert("Something Error")
                
                        }
                    })
                })
            }

            
        
           
        })
    })
   
 })

 

 