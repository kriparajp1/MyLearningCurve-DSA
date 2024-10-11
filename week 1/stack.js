class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class stack{
    constructor(){
        this.first=null;
        this.length=0;

    }

    push(elem){
        let newnode=new Node(elem);
        if(!this.first){
            this.first=newnode;
            this.length++
        }else{
            newnode.next=this.first;
            this.first=newnode;
            this.length++
        }
        return newnode
    }
    pop(){
        if(this.length===0){
            return undefined;

        }
        let temp=this.first;
        this.first=this.first.next;
        temp=null
        this.length--  
    }
}

let stacks=new stack()
stacks.push(4)
stacks.push(5)
stacks.push(6)
stacks.push(7)
stacks.push(8)
console.log(stacks)
stacks.pop()
console.log(stacks)