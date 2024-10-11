function bct(array,target){
    let start=0;
    let end=array.length;
    let middle=Math.floor((start+end)/2);
    if(target>middle){
        for(let i=middle;i<array.length;i++){
           if(target===array[i]){
            return i

           }

        }
    }else{
        for(let i=0;i<=middle;i++){
            if(target===array[i]){
                return i
               }
        } 
    }
    
}

const sorted_list = [1, 3, 4, 5, 6, 9, 11, 15, 18, 21, 25] 
const target_element = 15
console.log(bct(sorted_list,target_element))