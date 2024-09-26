class Myarray{
    constructor(){
        this.length=0;
        this.data={}
    }

    push(items){
        this.data[this.length]=items
        this.length++
        return this.length
    }

    get(item){
        return this.data[item]
    }
    pop(){
        delete this.data[this.length-1]
        this.length--
        return this.length
    }
    shift(){
        let firsstItem=this.data[0];
        for(let i=0;i<this.length-1;i++){
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
        return firsstItem
    }
    deleteByIndex(index){
        let item= this.data[index]
        for(let i=index;i<this.length-1;i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return item;

    }
    reverse(){
        
    }
}
let newArray=new Myarray()
newArray.push(1)
newArray.push(2)
newArray.push(3)
newArray.push(5)
newArray.push(6)
newArray.push(7)
newArray.push(8)
console.log(newArray)
newArray.pop()
console.log(newArray)
newArray.shift()
console.log(newArray)
newArray.deleteByIndex(3)
newArray.deleteByIndex(3)
console.log(newArray)
console.log(newArray.get(1))