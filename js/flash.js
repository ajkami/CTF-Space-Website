function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

let replace = document.querySelector(".name").innerHTML;

function changeText(){
	document.querySelector(".name").innerHTML = hex2a('75637365637b57455f4152455f5354494c4c5f484552457d');
    document.querySelector(".name").style.fontSize = "50px";
}
changeText();

function changeBack(){
	document.querySelector(".name").innerHTML = replace;
}
setTimeout(changeBack,2);
