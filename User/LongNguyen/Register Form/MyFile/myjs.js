var pwd_visible = [false, false];

function show_hide_pwd(i, e) {
    var pwd_box = document.getElementById('password');
    var cfrim_pwd_box = document.getElementById('confirm-password');
    var fa_eye = document.getElementsByClassName('eye_symbol')[i + 1];
    var fa_eye_slash = document.getElementsByClassName('eye_symbol')[i + 2];
    if (!e) {
        if (pwd_visible[e] == false) { //If password is not visible
            pwd_visible[e] = true;
            pwd_box.type = 'text';
            fa_eye.style.display = 'none';
            fa_eye_slash.style.display = 'block';
        } else {
            pwd_visible[e] = false;
            pwd_box.type = 'password';
            fa_eye.style.display = 'block';
            fa_eye_slash.style.display = 'none';
        }
    } else {
        if (pwd_visible[e] == false) { //If password is not visible
            pwd_visible[e] = true;
            cfrim_pwd_box.type = 'text';
            fa_eye.style.display = 'none';
            fa_eye_slash.style.display = 'block';
        } else {
            pwd_visible[e] = false;
            cfrim_pwd_box.type = 'password';
            fa_eye.style.display = 'block';
            fa_eye_slash.style.display = 'none';
        }
    }
}