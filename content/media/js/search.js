$(document).ready(function(){
    $('#searchsubmit').live('click touchstart', function(e){
        e.preventDefault();
        $('#search-results').spin();
        $('.result').remove();
        $.getJSON('http://static-eric-search.appspot.com/?query='+$('#s').val()+'&callback=?', function(data){
            $('#search-results').spin(false);
            var info = '';
            if (data['resp'].length){
                $.each(data['resp'], function(key,val){
                    info += '<div class="result"><h5 class="post-title"><a href="' + val['link'] + '">' + val['title'] + '</a></h5>';
                    info += '<p><em>Updated: ' + val['updated'] + '</em></p>';
                    info += '<div class="result-summary" style="display:none;"><p>' + val['summary'] + '</p></div></div>'
                });
            } else {
                info += '<div class"result"><h5 class="post-title">Your search found nothing. Try again</h4></div>';
            }
            $('#search-results').append(info);
        });
    });
});
