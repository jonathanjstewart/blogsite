function printError(element, msg)
{
    document.getElementById(element).innerHTML = msg;
}

function validateForm()
{
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var message = document.getElementById('message').value
    
    var hobbies = [];

    var checkboxes = document.getElementsByName("hobbies[]");
    for (var i = 0; i < checkboxes.length; i++)
    {
        if (checkboxes[i].checked) 
        {
            hobbies.push(checkboxes[i].value);
        }
    }

    var nameErr = emailErr = mobileErr = messageErr = true;

    // validate name
    if (name == "")
    {
        printError("nameErr", "Please enter your name");

    }
    else
    {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false)
        {
            printError("nameErr", "Please enter a valid name");
        }
        else
        {
            printError("nameErr", "");
            nameErr = false;
        }

    }

    // validate email
    if (email == "")
    {
        printError("emailErr", "Please enter your email address");

    }
    else
    {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false)
        {
            printError("emailErr", "Please enter a valid email address");
        }
        else
        {
            printError("emailErr", "");
            emailErr = false;
        }

    }

    // validate phone
    if (mobile == "")
    {
        printError("mobileErr", "Please enter your phone number");

    }
    else
    {
        var regex = /^[0-9][0-9 -]*$/;
        if (regex.test(mobile) === false)
        {
            printError("mobileErr", "Please enter a valid phone number");
        }
        else
        {
            printError("mobileErr", "");
            mobileErr = false;
        }

    }


    if (message == "")
    {
        printError("messageErr", "Please enter your message");

    }
    else
    {
       printError("messageErr", "");
       messageErr = false;

    }

    if (nameErr || emailErr || mobileErr || messageErr == true)
    {
        console.log(nameErr, emailErr, mobileErr, messageErr);
        return false;
    }
    else
    {
        console.log(name);
        console.log(message);
        alert('We have received your message');
    }
}