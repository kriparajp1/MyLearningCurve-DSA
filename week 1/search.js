const allMembers=["kriparaj","sujith","akshay","pios","sherinas"]
 
let member=(allmembers,member)=>{
    for(let i=0;i<=allmembers.length-1;i++){
        if(allmembers[i]===member){
            return true;
        }
    }
    return false;
}
console.log(member(allMembers,"pios"))