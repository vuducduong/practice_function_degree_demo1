function getDegree(fDegree) {
    return (fDegree - 32) / 1.8;
}

function convert(){
    let the_degree = document.getElementById("num").value;
    let result = getDegree(the_degree);
    document.getElementById("result").innerHTML = "Celcius: " + result;
}


