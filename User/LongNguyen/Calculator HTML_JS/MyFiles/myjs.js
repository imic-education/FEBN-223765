//Check numberIndex
var bool_number = 1;

function btn_func_click(func) {
    document.getElementById('func').innerHTML = func;
}

function btn_num_click(number) {
    var valueA = parseInt(document.getElementById('tmpA').value);
    var valueB = parseInt(document.getElementById('tmpB').value);
    if (bool_number) {
        if (valueA * 10 + number <= 99) {
            document.getElementById('tmpA').value = valueA * 10 + number;
        }
        if (valueA >= 10) {
            document.getElementById('tmpA').value = (valueA * 10 + number) % 100;
        }
    } else {
        if (valueB * 10 + number <= 99) {
            document.getElementById('tmpB').value = valueB * 10 + number;
        }
        if (valueB >= 10) {
            document.getElementById('tmpB').value = (valueB * 10 + number) % 100;
        }
    }
}

function update_num_text() {
    document.getElementById('st_value').innerHTML = document.getElementById('tmpA').value;
    document.getElementById('func_value').innerHTML = document.getElementById('func').innerHTML;
    document.getElementById('nd_value').innerHTML = document.getElementById('tmpB').value;
}

function clear_btn_click() {
    bool_number = 1;
    document.getElementById('tmpA').value = 0;
    document.getElementById('func').innerHTML = "?";
    document.getElementById('tmpB').value = 0;
    document.getElementById('st_value').innerHTML = "00 ";
    document.getElementById('func_value').innerHTML = " ?";
    document.getElementById('nd_value').innerHTML = "00";
    document.getElementById('result_text').innerHTML = "RESULT TEXT";
}

function calc_btn_click() {
    var valueA = parseInt(document.getElementById('tmpA').value);
    var valueB = parseInt(document.getElementById('tmpB').value);
    var result = 0;
    switch (document.getElementById('func').innerHTML) {
        case "+": {
            result = valueA + valueB;
            document.getElementById('result_text').innerHTML = result;
            break;
        }
        case "-": {
            result = valueA - valueB;
            document.getElementById('result_text').innerHTML = result;
            break;
        }
        case "x": {
            result = valueA * valueB;
            document.getElementById('result_text').innerHTML = result;
            break;
        }
        case "/": {
            result = valueA / valueB;
            document.getElementById('result_text').innerHTML = result;
            break;
        }
    }
}

function nav_num(choice) {
    switch (choice) {
        case 1: {
            if (bool_number)
                bool_number = 0;
            bool_number = 1;
            break;
        }
        case 0: {
            if (!bool_number)
                bool_number = 1;
            bool_number = 0;
            break;
        }
    }
}

function num_Index() {
    var show = document.getElementById('nav_num_text');
    switch (bool_number) {
        case 1: {
            show.value = document.getElementById('st_value').innerHTML;
            break;
        }
        case 0: {
            show.value = document.getElementById('nd_value').innerHTML;
            break;
        }
    }
}