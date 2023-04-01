// console.log("ok");
function factorial(item)
{        
    if(item===0|| item==1)
    {
        return 1;
    }
    return item*factorial(item-1); 

}
data=5;
console.log(factorial(data));
