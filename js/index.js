function newQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
       var quote = json.quoteText;
       var author = json.quoteAuthor;
       $("#quote-text").text(quote);
       $("#quote-author").text(author);
       $("#new-tweet-btn").attr("href", "https://twitter.com/intent/tweet?text=" + "\"" + quote + "\" " + author);
    });
};

$(document).ready(function() {
    newQuote();
    $("#new-quote-btn").on("click", function() {
        console.log("Sent");
        newQuote();
    });
});

