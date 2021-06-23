function merge(){
    value1 = document.getElementById("input1").value
    value2 = document.getElementById("input2").value
    value3 = document.getElementById("input3").value
    value4 = document.getElementById("input4").value
    add = value1 + " " + value2 + " " + value3 + " " + value4
    document.getElementById("result").innerHTML = add
}