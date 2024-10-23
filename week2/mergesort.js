function merge(left,right){
    let temp=[]
    let i=0;
    let j=0;
    while(i<left.length&&j<right.length){
        if(left[i]<right[j]){
            temp.push(left[i])
            i++
        }else{
            temp.push(right[j])
            j++
        }
    }

    temp.push(...left.slice(i));
    temp.push(...right.slice(j));
    return temp;
}

function mergeSort(array){
    if(array.length<=1) return array
    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
} 
let array1=[1,4,3,6,45,56,33]
console.log(mergeSort(array1))