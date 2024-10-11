class Node{
    constructor(value){
        this.prev=null;
        this.value=value;
        this.next=null;
    }
}
class doubly{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    append(item){
        let newNode=new Node(item);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            this.length++
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail
            this.tail=newNode;
            this.length++
        }
        return newNode
    }
}
let link=new doubly()
link.append(88)
link.append(67)
link.append(69)
console.log(link)