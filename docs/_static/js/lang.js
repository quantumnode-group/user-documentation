(document).ready(function() {
    /* Select current Language */
    $('#langselect').val(DOCUMENTATION_OPTIONS['LANGUAGE']);
});

$(function() {
    $("#langselect").on('change', function() {
        var pageURL = $(locaton).attr("href");
        pageURL = $(location).replace("https://docs.qnodecoin.org/" + DOCUMENTATION_OPTIONS['LANGUAGE'], " ");
        window.location.href = "https://docs.qnodecoin.org/" + $('#langselect').val() + pageURL;
    })
});