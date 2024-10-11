const arrray=[6,1,3,5,2,4,8,7,9]
function selectionsort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(arr[i]!==arr[minIndex]){
            let temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp
        }
    }
    return arr
}

console.log(selectionsort(arrray))