const arrray=[6,1,3,5,2,4,8,7,9]
function bubblesort(arr){
    for(let i=arr.length-1;i>0;i--){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
    }
    return arr
}

console.log(bubblesort(arrray))