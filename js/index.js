$(document).ready(function() {
    $("#new-quote-btn").on("click", function() {
       var quote = "";
       var author = "";
       $("#quote-text").text(quote);
       $("#quote-author").text(author);
       $("#new-tweet-btn").attr("href", "https://twitter.com/intent/tweet?text=" + "\"" + quote + "\" " + author);
    });
});
