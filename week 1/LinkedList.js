// linked list

class Node{
    constructor(value){
        this.head=value;
        this.next=null;
    }
}

class Linkedlist{
    constructor(value){
        this.head=new Node(value)
        this.tail=this.head;
        this.length=1;
    }

    push(item){
        let newNode=new Node(item);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
    }
    pop(){
        if(!this.head){
            return undefined;
        }

        let temp=this.head
        let prev=this.head;
        while(temp.next){
            prev=temp;
            temp=prev.next;

        }
        this.tail=prev;
        this.tail.next=null
        this.length--
        if(this.length==0){
            this.head=null;
            this.tail=null;
        }
        return temp
    }
}

let list=new Linkedlist(1)
list.push(2)
list.push(5)
list.push(7)
list.push(8)
console.log(list)