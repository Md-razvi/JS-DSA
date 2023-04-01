
    let Arr=[34,56,77,12,45,32,80];
   
    // console.log(position)
    let button=document.getElementById("Position");
    button.addEventListener("click",()=>{
        let position =+(document.getElementById("position").value);
        RemoveElement(position)
    })
    // let position=3;
    function RemoveElement(pos)
    {
        if(pos<Arr.length)
        {
            for(let i=pos;i<Arr.length;i++)
            {
                Arr[i]=Arr[i+1];
           }
        
        Arr.length=Arr.length-1;
        console.log(Arr)
        }
        else{
            alert("Enter value from 0 to "+(Arr.length-1));
        }
    }
    
    
