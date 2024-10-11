class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class Linkedlist{
    constructor(){
        this.root=null;
    }

    insert(elem){
        let newnode=new Node(elem)
        if(this.root===null){
            this.root=newnode
            return this;

        }else{
            let temp=this.root
            while(true){
                if(newnode.value===temp.value){
                    return undefined;
                }
                if(newnode.value>temp.value){
                    if(!temp.left){
                        
                    }
                }
            }
        }
    }
}