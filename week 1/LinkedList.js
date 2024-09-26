// linked List

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class Linkedlist{
    constructor(){
        this.head=null;
    }
}

append{
    let newNode=new Node(data);
    if(this.head==null){
        this.head=newNode;
    }else{
        let current=this.head;
        while(current.next!==null){
            current=current.next;

        }
        current.next=newNode;
    }
}