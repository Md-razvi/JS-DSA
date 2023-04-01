let Arr=[30,10,50,40,34,22,20];
let Once=true;
let div=document.querySelector("#box>p");
let button =document.getElementById("butt");
let Answer=document.querySelector("#Ans>p");
for(let l=0;l<Arr.length;l++)
{
    // console.log("ok")
    div.textContent=div.textContent+Arr[l]+" ";
}
button.addEventListener("click",function (){
    for(let i=0;i<Arr.length-1;i++)
{
    let swap=false;
    for(let j=0;j<(Arr.length-1)-i;j++)
    {
        if(Arr[j+1]<Arr[j])
        {
            // console.log("ok")
            swap=true;
            Swap(Arr,j,j+1);
        }
    }
    if(swap===false)
    {
        break;
    }

}
if(Once){
Once=false;
for(let l=0;l<Arr.length;l++)
{
    // console.log("ok")
    Answer.textContent=Answer.textContent+Arr[l]+" ";
}
}
console.log(Arr);

})


function Swap(arr,a,b)
{
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}