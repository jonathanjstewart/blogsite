console.log("Script Init");

function printError(element, msg)
{
    document.getElementById(element).innerHTML = msg;
}

function addBlogPost()
{
    var title = document.getElementById('titleinput').value;
    var author = document.getElementById('authorinput').value;
    var date = document.getElementById('dateinput').value;
    var body = document.getElementById('bodyinput').value;

    var titleError = authorError = dateError = bodyError = true;

    // title validation (can be anything so long as it's not blank)
    if (title == '')
    {
        printError("titleError", "Please enter a blog title");
    }
    else
    {
        titleError = false;
    }

    // author name validation, checks if it's a regular name (i.e. "smith"). 
    // if no name is given, it defaults to "anonymous"
    if (author == '')
    {
        var author = "anonymous";
        printError("authorError", "Author Name defaulted to 'anonoymous'")
        authorError  = false;
    }
    else
    {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(author) === false)
        {
            printError("authorError", "Please enter a valid name");
        }
        else
        {
            printError("authorError", "");
            authorError = false;
        }
    }

    // date validation, just checks if they entered a date
    if (date == '')
    {
        printError("dateError", "Please select a date");
    }
    else
    {
        dateError = false;
    }

    // body validation. Checks to see if there's actually any blog content
    if (body == '')
    {
        printError("bodyError", "Please enter blog content");
    }
    else
    {
        bodyError = false;
    }
    

    if (titleError || authorError || dateError || bodyError == true)
    {
        console.log(titleError, authorError, dateError, bodyError);
        console.log("error detected");
        return false;
    }
    else
    { 
        console.log("blog went through");
        alert('Blog Submitted!');
        var html = '<li><div id = "blogcontent"><h3 id="blogtitle">' + title + '</h3><div class="blogpostsmain"><p>' + body + '</p></div><div class="blogsubmitdata"><div class="submitdate">' + date + '</div><div class="submitauthor">-' + author + '</div></div></div></li>';
        myBlog.insertAdjacentHTML('beforeend', html);
    }

}
