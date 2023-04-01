
    let data=[23,34,56,12,78,92]
    let button1=document.getElementById("button1");
    button1.addEventListener("click",insertElement);
    function insertElement(){
        let Value =+(document.getElementById("arrValue").value)
        let position=+(document.getElementById("position").value);
       
            for(let i=data.length-1;i>=position;i--)
            {
                data[i+1]=data[i]
            }
            data[position]=Value;
                console.log(data)
        
        
    }
    

