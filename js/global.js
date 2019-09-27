
function getprofile() {
    $.getJSON('https://randomuser.me/api/', function (data) {
        let theImg = "<div class='imgWrap'><img src='" + data.results[0].picture.large  + "' /></div>";
        let theName = '<button class="active" type="button" id="dataRefreshButton" onclick="getSrc(this);" onmouseenter="getSrc(this);" data-source="<small>My Name is</small><p>'+data.results[0].name.first+' '+data.results[0].name.last+'</p>"><i class="fas fa-user"></i></button>';
        let theEmail = '<button type="button" onmouseenter="getSrc(this);" data-source="<small>My Email is</small>'+data.results[0].email+'"><i class="fas fa-envelope"></i></button>';
        let preDob = new Date(data.results[0].dob.date);
        let fmtDob = new Date(preDob).toDateString("yyyy-MM-dd");
        let theDob = '<button type="button" onmouseenter="getSrc(this);" data-source="<small>My Birthday is</small>' + fmtDob  +'"><i class="fas fa-gift"></i></button>';
        let theLocation = '<button type="button" onmouseenter="getSrc(this);" data-source="<small>I live in</small><p>'+data.results[0].location.postcode+' - '+data.results[0].location.street+'</p>"><i class="fas fa-map-marked-alt"></i></button>';
        let theCall = '<button type="button" onmouseenter="getSrc(this);" data-source="<small>Call me on</small>'+data.results[0].cell+'"><i class="fas fa-mobile"></i></button>';
        let thePassword = '<button type="button" onmouseenter="getSrc(this);" data-source="<small>My Password is</small>'+data.results[0].login.password+'"><i class="fas fa-unlock-alt"></i></button>';
        $(theImg).appendTo('#image');
        $(theName).appendTo('#name');
        $(theEmail).appendTo('#mail');
        $(theDob).appendTo('#gift');
        $(theLocation).appendTo('#map');
        $(theCall).appendTo('#call');
        $(thePassword).appendTo('#password');
        document.getElementById("dataRefreshButton").click();
    });
}
getprofile();
function getSrc(button) {
    $('button').hover(
        function(){
            $('button').removeClass('active');
            $(this).addClass('active')
        }
    );
    let str = button.dataset.source;
    $('#load_single').html('');
    $('#load_single').html(str);
}
