     
    let Arr1=[3,7,12,34,56,90];
    let Arr2=[4,9,25,45];
    document.querySelector("body").innerHTML=`
    [${Arr1}]
    [${Arr2}].</br>
    <button>Click</button></br>
    Click to Merge an array`;
    document.querySelector("button").addEventListener("click",MergeFunction)
    function MergeFunction(){
        let i=0,j=0,k=0;
       let Arr3=new Array(Arr1.length+Arr2.length);
       while(i<Arr1.length && j<Arr2.length)
       {
         if(Arr1[i]<=Arr2[j] && i<Arr1.length && j<Arr2.length) 
         {
             Arr3[k]=Arr1[i]
             i++;
         }else{
            Arr3[k]=Arr2[j];
            j++;
         }
         k++;
       }
       while(i<Arr1.length){
             Arr3[k]=Arr1[i]
             i++;
             k++;
             console.log("ok")
       }
       while(j<Arr2.length){
         
             Arr3[k]=Arr2[j]
             j++;
             k++;
       }
       document.querySelector("body").innerHTML=`
       The Merged Array is<br> 
       [${Arr3}]`;
       
    }
    
    
    
