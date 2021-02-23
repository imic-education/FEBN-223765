function add(){
    document.getElementById("cal2").style.display="block";
    var a = document.getElementById("numbera").value;
    var b = document.getElementById("numberb").value;
    var cal = parseInt(a) + parseInt(b);
    document.getElementById("cal").value=cal;
    if (a < 0 & a > 100) {
        document.getElementById("error").style.display="block"
        document.getElementById("errora").innerHTML="0 < a < 100"
    }
};

function sub(){
    document.getElementById("cal2").style.display="block";
    var a = document.getElementById("numbera").value;
    var b = document.getElementById("numberb").value;
    var cal = parseInt(a) - parseInt(b);
    document.getElementById("cal").value=cal;            
};

function mul(){
    document.getElementById("cal2").style.display="block";
    var a = document.getElementById("numbera").value;
    var b = document.getElementById("numberb").value;
    var cal = parseInt(a) * parseInt(b);
    document.getElementById("cal").value=cal;
};

function div(){
    document.getElementById("cal2").style.display='block';
    var a = document.getElementById("numbera").value;
    var b = document.getElementById("numberb").value;
    if (b == 0) {
        document.getElementById("error").style.display="block"
        document.getElementById("error").innerHTML="Khong the chia cho 0"
        document.getElementById("cal2").style.display='none';
    };
    var cal = parseInt(a) / parseInt(b);
    document.getElementById("cal").value=cal;               
};
