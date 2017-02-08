$(function () {

    $.ajax({
        url: 'https://www.codeschool.com/users/vaultdweller.json',
        dataType: 'jsonp',
        success: function (response) {
            var response = response;
            var badges = $('#badges');
            $.each(response.courses.completed, function (index,course){
                var div = $('<div></div>').addClass('course');
                var title = $('<h3>'+ course.title+'</h3>');
                var badgeImg = course.badge;
                var img = $("<img src="+badgeImg+">");
                var done = div.append(title).append(img);
                badges.append(done);
            })

        }
    });

});
