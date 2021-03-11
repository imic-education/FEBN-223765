function zero(){
    document.getElementById("operator").value += 0
}
function one(){
    document.getElementById("operator").value += 1
}
function two(){
    document.getElementById("operator").value += 2
}
function three(){
    document.getElementById("operator").value += 3
}
function four(){
    document.getElementById("operator").value += 4
}
function five(){
    document.getElementById("operator").value += 5
}
function six(){
    document.getElementById("operator").value += 6
}
function seven(){
    document.getElementById("operator").value += 7
} 
function eight(){
    document.getElementById("operator").value += 8
}
function nine(){
    document.getElementById("operator").value += 9
}

function add(){
    document.getElementById("operator").value += "+"
}
function sub(){
    document.getElementById("operator").value += "-"
}
function mul(){
    document.getElementById("operator").value += "*"
}
function div(){
    document.getElementById("operator").value += "/"
}

function equal(){
    s = document.getElementById("operator").value
    n = s.split("")
    for (i = 0; i < (n.length); i++){
        switch (n[i]) {
        case "+":
            o = n.indexOf("+")
            a = s.slice(0,o)
            b = s.slice(o+1, n.length)
            e = parseInt(a) + parseInt(b)
            break
        case "-":
            o = n.indexOf("-")
            a = s.slice(0,o)
            b = s.slice(o+1, n.length)
            e = parseInt(a) - parseInt(b)
            break
        case "*":
            o = n.indexOf("*")
            a = s.slice(0,o)
            b = s.slice(o+1, n.length)
            e = parseInt(a) * parseInt(b)
            break
        case "/":
            o = n.indexOf("/")
            a = s.slice(0,o)
            b = s.slice(o+1, n.length)
            e = parseInt(a) / parseInt(b)
            break
        }
    }
    
    document.getElementById("equal").value = s
    document.getElementById("operator").value = e
    if (e < 0){
        document.getElementById("operator").style.color= "red"
        document.getElementById("operator").value = Math.abs(e)
    }
}