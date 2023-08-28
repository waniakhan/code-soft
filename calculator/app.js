function getitem(num) {
    document.getElementById('result').value += num;
}

function clearNum() {
    document.getElementById('result').value = '';
}

function removeNumb() {
    var res = document.getElementById('result').value;
    document.getElementById('result').value = (document.getElementById('result').value.slice(0,res.length-1))
}

function getResults() {
    document.getElementById('result').value = eval(  document.getElementById('result').value);
}
function getPower3() {
    var base =  document.getElementById('result').value
    var result3 = Math.pow(base ,3);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result3));
}
function getPower2() {
    var base =  document.getElementById('result').value
    var result2 = Math.pow(base ,2);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result2));
}