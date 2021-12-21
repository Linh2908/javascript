let x = 0;
let arr = [];
document.querySelector('#btnAdd').onclick = function(){
   arr[x] = document.querySelector('#textValue').value;
    x++;
    document.querySelector("#textValue ").value = "";
}
document.querySelector('#btnDisplay').onclick = function(){
    let e = '<hr>';
    let arrLength = arr.length;
    console.log(arrLength);
    for(let i = 0;i<arrLength;i++){
        e += `Element ${i} = ${arr[i]} <br>`;
    }
    document.querySelector('#result').innerHTML = e;
}