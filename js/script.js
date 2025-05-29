$('#search-button').on('click', function () {

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' :'2b6bf739',
            's': $('#search-input').val()
        },
        success: function() {
            if (XResult.Response == "True") {
            } else {
                $('movie-list').html(`
                    <div class="col">
                        <h1 class="text-center">`+ result.Error +`</h1>
                    </div>
                    `)
            }
        }
    });
});