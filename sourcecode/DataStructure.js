class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(position, element) {
        let node = new Node(element);
        if(!this.head) {
            this.head = node;
        }else {
            let index = 0;
            let current = this.head;
            let previous = null;
            while(index++ < position) {
                previous = current;
                current = current.next;
            };
            previous.next = node;
            node.next = current;
        }
    }

    append(element) {
        let node = new Node(element);
        if(!this.head) {
            this.head = node;
        } else {
            let index = 0;
            let current = this.head;
            while(++index < this.length) {
                current = current.next;
            }
            current.next = node;
        }

        this.length++;
    }
}

const test = new LinkList();

test.append(1);
test.append(2);
test.append(3);
test.append(4);

test.insert(1, 100);

console.log(JSON.stringify(test))