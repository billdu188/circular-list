function Node(element) {
    this.element = element;
    this.next = null;
}
function linkedList() {
    this.head = new Node('head');
    this.head.next = this.head;
    this.length = 0;
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;

}
function find(item) {
    var currNode = this.head;
    while (currNode.element != item ) {
        currNode = currNode.next;
    }
    return currNode
}
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
    this.length++;
}
function display() {
    var currNode = this.head;
    var link = [];
    while (currNode.next.element != 'head') {
        link.push(currNode.next.element)
        
        currNode = currNode.next;
    }
    //console.log(link);
    return link;
}
function findPrevious(item) {
    var currNode = this.head;
    
    while ( currNode.next.element != item) {
        currNode = currNode.next;
        
    }                                                                                                                  
    return currNode
}
function remove(item) {
    var preNode = this.findPrevious(item);
    if (preNode.next != 'head') {
        preNode.next = preNode.next.next;
    }
    this.length--;

}
function killGame(num, step) {
    var peopler = new linkedList();
    var now = 0;
    
    var currNode = peopler.head;
    var newcurrNode;
    peopler.insert(1,'head');
    for (var i=1; i<num;i++) {
        peopler.insert(i+1, i);
    }
    function whileFn() {
        if(peopler.length < step) {
            return;
        }

        now++;
        
        currNode = currNode.next;
        
        if(currNode.element === 'head') {

            currNode = currNode.next;   
            
        }

        
        if(now === step) {
            
            //newcurrNode = peopler.findPrevious(3);
            var remNode = currNode;
            currNode = peopler.findPrevious(currNode.element);
            
            peopler.remove(remNode.element);
            
            console.log(peopler.display())
            
            now = 0;
        }
        whileFn();
    }
    whileFn()

    //console.log(peopler.display())
    
    
}
killList(41,3)