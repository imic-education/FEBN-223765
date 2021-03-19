function dk(){
    ten = document.getElementById("name").value
    mk = document.getElementById("pass").value
    mk2 = document.getElementById("pass2").value
    email = document.getElementById("email").value
    sdt = document.getElementById("phone").value
    dc = document.getElementById("address").value
    if (ten==""){
        document.getElementById("checkname").innerHTML = "Vui lòng nhập thông tin!"
        document.getElementById("name").style.borderColor = "red"
    }
    if (mk==""){
        document.getElementById("checkpass").innerHTML = "Vui lòng nhập thông tin!"
        document.getElementById("pass").style.borderColor = "red"
    }
    if (mk2==""){
        document.getElementById("checkpass2").innerHTML = "Vui lòng nhập thông tin!"
        document.getElementById("pass2").style.borderColor = "red"
    }
    if (email==""){
        document.getElementById("checkemail").innerHTML = "Vui lòng nhập thông tin!"
        document.getElementById("email").style.borderColor = "red"
    }
    if (sdt==""){
        document.getElementById("checkphone").innerHTML = "Vui lòng nhập thông tin!"
        document.getElementById("phone").style.borderColor = "red"
    }
    if (dc==""){
        document.getElementById("checkadd").innerHTML = "Vui lòng nhập thông tin!"
        document.getElementById("address").style.borderColor = "red"
    }

    obj = { name: ten, password: mk, repassword: mk2, email: email, phone: sdt, address: dc }
    myJSON = JSON.stringify(obj)
}


