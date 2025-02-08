class Queue{

    constructor( ){
        this.queue =[]
    }
    enqueue(element){
        this.queue.push(element)// push adds element to the end of an array
    }
    dequeue(){
        if(this.queue.length){
                return this.queue.shift()  // remove the first element of the array
        }   
    }        
}

class Stack{
    constructor(){
        this.stack = []
    }

    push(element){
        this.stack.unshift(element) //adds element to the begnning of the array
    }
    pop(){
      return  this.stack.shift() //removes first in the array
    }
}
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(head){
        this.head = new Node(head);
        this.head.next=null;
        this.size=1;
    }
    add(value){
        let temp = this.head;
        while(temp.next!=null){
            temp= temp.next;
        }
        temp.next = new Node (value);
        this.size++;
    }
    insertAt(element, index){
        let counter = 0;
        let temp = this.head;
        if(index==0){
            let newNode = new Node(element);
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        while(temp!=null ){
            counter++;
        if(counter==index){
            let temp2 = temp.next;
            temp.next= new Node(element);
            temp.next.next = temp2;
            return
        }
        else{
            temp=temp.next;
        }
        
        }
}

    removeFrom(index){
        if(index==0){
            this.head = this.head.next;           
    }
    else{
        let counter = 0;
        let temp = this.head;
        while(temp){

            if(counter+1 ==index){
                console.log(temp)
                let temp2 = temp.next
                temp.next = temp2.next
                return
            }
            else{
                temp=temp.next;
                counter++;
            }
        }
    }
}

}
class doubleLL{
    constructor(val){
        this.head = new Node(val)
        this.next = null;
        this.previous = null;
    }
    add(value){
        let temp = this.head;
        while(temp.next!=null){
            temp= temp.next;
        }
        temp.next = new Node (value);
        temp.next.previous = temp;
    }
    insertAt(element, index){
        let counter = 0;
        let temp = this.head;
        if(index==0){
            let newNode = new Node(element);
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        while(temp!=null ){
            counter++;
        if(counter==index){
            if(temp.next == null){
                temp.next= new Node (element);
                temp.next.prev = temp;
                return;
            }
            let temp2 = temp.next;
            temp.next= new Node(element);
            temp.next.prev = temp;
            temp2.prev = temp.next;
            temp.next.next= temp2;
            return
        }
        else{
            temp=temp.next;
        }
        
        }
}

    removeFrom(index){
        if(index==0){
            this.head = this.head.next;           
    }
    else{
        let counter = 0;
        let temp = this.head;
        while(temp){

            if(counter+1 ==index){
                console.log(temp)
                let temp2 = temp.next
                temp.next = temp2.next
                return
            }
            else{
                temp=temp.next;
                counter++;
            }
        }
    }
}
}

class leaf{
    constructor(value){
        this.value = value;
        this.left= null;
        this.right = null;
    }
}
class tree{
    constructor(root){
        this.root = root;
        this.left = null;
        this.right = null;
    }
}