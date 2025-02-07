type Node<T> = {
    item: T,
    next?: Node<T>,
    prev?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    prepend(item: T): void {
        if (!this.head) {
            this.head = this.tail = { item, next: undefined, prev: undefined }
            this.length = 1
            return
        }

        const node = { item, next: this.head, prev: undefined }

        this.head.prev = node
        this.head = node

        this.length++
    }

    insertAt(item: T, idx: number): void {
        const node = this.getNodeAt(idx)

        if (!node) {
            return
        }

        const newNode = { item, next: node, prev: node.prev }
        node.prev = newNode

        if (this.head === node) {
            this.head = newNode
        }
        this.length++
    }

    append(item: T): void {
        if (!this.tail) {
            this.head = this.tail = { item, next: undefined, prev: undefined }
            this.length = 1
            return
        }

        const node = { item, next: undefined, prev: this.tail }

        this.tail.next = node
        this.tail = node

        this.length++
    }

    remove(item: T): T | undefined {
        for (let current = this.head; current?.next; current = current.next) {
            if (current.item === item) {
                this.removeNode(current)
                return current.item
            }
        }

        return undefined
    }

    get(idx: number): T | undefined {
        return this.getNodeAt(idx)?.item
    }

    removeAt(idx: number): T | undefined {
        const node = this.getNodeAt(idx)
        const item = node?.item

        if (node) {
            this.removeNode(node);
        }

        return item
    }

    private getNodeAt(idx: number): Node<T> | undefined {
        if (idx >= this.length) {
            return undefined
        }

        let current = this.head
        for (let i = 0; i < idx; i++) {
            current = current?.next
        }

        return current
    }

    private removeNode(node: Node<T>): void {
        if (node?.prev) {
            node.prev.next = node.next
        } else {
            this.head = node.next
        }

        if (node?.next) {
            node.next.prev = node.prev
        } else {
            this.tail = node.prev
        }

        this.length--
    }

    debug(): void {
        let current = this.head
        let stout = ''
        for (let i = 0; i < this.length; i++, current = current?.next) {
            stout += `${i} => ${current?.item}, `
        }

        console.log(stout);
    }
}