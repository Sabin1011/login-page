$(document).ready(function(){
    $("#sign-in").validate({
        rules:{
            usernme:{
                required:true,
            },
            psswrd:{
                required:true,
                minlength:8
            },

            
        }
    
    })
})