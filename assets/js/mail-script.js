$("#contact-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"",
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