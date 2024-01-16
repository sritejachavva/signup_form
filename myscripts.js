passwordChecker = function(){


    //Logic for function
    // While typing, constantly check whether passwords match
    // check if alert text is present... if so, do not run the while loop again
    // remove nonmatch text once passwords match

    pass1 = document.querySelector("input#password");
    pass2 = document.querySelector("input#password2");
    form_submit = document.querySelector("button#form_submit");
    let alert_present = false;
    let pass_match_text = document.createElement("p");
    pass_match_text.textContent = 'Passwords don\'t match';
    pass_match_text.style.margin='0px';
    pass_match_text.style.color = 'red';

    pass2.addEventListener('keyup',function(){    
        // pass1 = document.querySelector("input#password");
        // pass2 = document.querySelector("input#password2");

        while((pass1.value != pass2.value) & (alert_present==false)){

            (pass2.parentNode).insertBefore(pass_match_text,pass2);
            alert_present = true;
        }

        if(pass1.value == pass2.value){
            alert_present=false;
            pass_match_text.remove();
        }
        
    }
    )


}

passwordChecker();