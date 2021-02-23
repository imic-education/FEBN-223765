function lena(){    
    sa = document.getElementById("a").value
    len = sa.length
    if (len >= 2) {
        document.getElementById("a").value = sa.slice(1)
    }
}
function leno(){
    o = document.getElementById("operator").value
    len = o.length
    if (len >= 1) {
        document.getElementById("operator").value = o.slice(2)
    }
}
function lenb(){
    sb = document.getElementById("b").value
    len = sb.length
    if (len >= 2) {
        document.getElementById("b").value = sb.slice(1)
    }
}
function zero(){
    o = document.getElementById("operator").value
    if (o == "") {
        lena()
        document.getElementById("a").value += 0
    }
    else {
        lenb()
        document.getElementById("b").value += 0
    }
}
function one(){
    o = document.getElementById("operator").value
    if (o == "") {
        lena()
        document.getElementById("a").value += 1
    }
    else {
        lenb()
        document.getElementById("b").value += 1
    }
}
function two(){
    o = document.getElementById("operator").value
    if (o == "") {
        lena()
        document.getElementById("a").value += 2
    }
    else {
        lenb()
        document.getElementById("b").value += 2
    }
}
function three(){
    o = document.getElementById("operator").value
    if (o == "") {
        lena()
        document.getElementById("a").value += 3
    }
    else {
        lenb()
        document.getElementById("b").value += 3
    }
}
function four(){
    o = document.getElementById("operator").value
    if (o == "") {
        lena()
        document.getElementById("a").value += 4
    }
    else {
        lenb()
        document.getElementById("b").value += 4
    }
}
function five(){
    o = document.getElementById("operator").value
    if (o == "") {
        lena()
        document.getElementById("a").value += 5
    }
    else {
        lenb()
        document.getElementById("b").value += 5
    }
}
function six(){
    o = document.getElementById("operator").value
    if (o == "") {
        lena()
        document.getElementById("a").value += 6
    }
    else {
        lenb()
        document.getElementById("b").value += 6
    }
}
function seven(){
    o = document.getElementById("operator").value
    if (o == "") {
        lena()
        document.getElementById("a").value += 7
    }
    else {
        lenb()
        document.getElementById("b").value += 7
    }
} 
function eight(){
    o = document.getElementById("operator").value
    if (o == "") {
        lena()
        document.getElementById("a").value += 8
    }
    else {
        lenb()
        document.getElementById("b").value += 8
    }
}
function nine(){
    o = document.getElementById("operator").value
    if (o == "") {
        lena()
        document.getElementById("a").value += 9
    }
    else {
        lenb()
        document.getElementById("b").value += 9
    }
}
function add(){
    leno()
    document.getElementById("operator").value += "+"
}
function sub(){
    leno()
    document.getElementById("operator").value += "-"
}
function mul(){
    leno()
    document.getElementById("operator").value += "*"
}
function div(){
    leno()
    document.getElementById("operator").value += "/"
}

function equal(){
    a = document.getElementById("a").value
    b = document.getElementById("b").value
    switch (document.getElementById("operator").value) {
        case "+":
            e = parseInt(a) + parseInt(b)
            break
        case "-":
            e = parseInt(a) - parseInt(b)
            break
        case "*":
            e = parseInt(a) * parseInt(b)
            break
        case "/":
            e = parseInt(a) / parseInt(b)
            document.getElementById("equal").style.fontSize="30px"
            break
    }
    document.getElementById("equal").value = e
    if (e<0){
        document.getElementById("equal").style.color="red"
        document.getElementById("equal").value = Math.abs(e)
    }
}