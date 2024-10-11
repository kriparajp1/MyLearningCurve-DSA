class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(item) {
    let newnode = new Node(item);
    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
      this.length++;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
      this.length++;
    }
  }
  print() {
    if (this.length === 0) {
      return "nothing to show";
    } else {
      let array = [];
      let temp = this.head;
      while (temp) {
        array.push(temp.value);
        temp = temp.next;
      }
      console.log(array);
    }
  }
  prepend(elem){
    let newNode=new Node(elem)
    if(!this.head){
      this.head=newNode;
      this.tail=newNode;
    }else{
      let temp=this.head;
      this.head=newNode;
      newNode.next=temp;
      this.length++
      
    }
  }
  insert(val,index){
    if(index<0||index>this.length){
      return "invalid index"
    }else{
      let counter=0
      let temp=this.head
      while(temp){
        if(index==counter){
          temp.value=val;
          return temp;
        }
        counter++;
        temp=temp.next;
      }
    }
  }
  remove(index){
    if(index<0||index>this.length){
      return "invalid index"
    }else{
      let temp=this.head;
      let prev=this.head;
      let counter=0
      while(temp){
        if(index==counter){
          let valu=temp;
          prev.next=valu.next;
          this.length--
          return valu
        }
        prev=temp;
        temp=temp.next;
        counter++
      }
      
    }
  }
  removeValue(val){
    let temp=this.head;
    let prev=this.head;
    let counter=0;
    if(temp.value===val){
      this.head=temp.next;
      this.length--;
      return temp;
    }
    while(temp){
      if(temp.value==val){
        let removeNode=temp;
        prev.next=removeNode.next;
        this.length--;
        return removeNode;
      }
      prev=temp;
      temp=temp.next;
      counter++;
    }
  }
  reverse(){
    let temp=this.head;
    this.head=this.tail;
    this.tail=temp;
    let prev=null;
    let next=temp;
    for(let i=0;i<this.length;i++){
      next=temp.next
      temp.next=prev;
      prev=temp;
      temp=next
    }
  }
}
let list = new Linkedlist();
console.log(list);
list.append(1);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.prepend(66)
list.prepend(77)
console.log(list);
list.print();
list.insert(44,3)
list.remove(1) 
list.removeValue(77)
list.print();
list.reverse()
console.log(list);
