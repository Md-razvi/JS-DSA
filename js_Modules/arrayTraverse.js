let arr=[23,34,33,12,45,6,7,36,76,45];
let btn=document.getElementById("Btn");
btn.addEventListener("click",GetArrayData)
function GetArrayData(){
    let Arrinput=+(document.getElementById("arrayId").value);
    if(Arrinput>arr.length-1||Arrinput<0)
    {
        alert("Enter the number betweeb 0 to "+(arr.length-1))
    }else {
        alert(arr[Arrinput])
    }
    
}
