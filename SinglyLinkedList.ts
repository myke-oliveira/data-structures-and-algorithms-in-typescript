type Node<T> = {
    item: T,
    next?: Node<T>,
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>


    constructor() { // OK
        this.head = undefined
        this.length = 0
    }

    prepend(item: T): void { // OK
        this.length++

        if (!this.head) {
            this.head = { item, next: undefined }
            return
        }

        const newNode = { item, next: this.head }
        this.head = newNode
    }

    insertAt(item: T, idx: number): void {
        let current = this.head
        let previus = undefined
        let i = 0

        while (i < idx && current?.next) {
            previus = current
            current = current.next
            i++
        }

        const newNode = { item, next: current }

        if (previus) {
            previus.next = newNode
        }

        this.length++
    }

    append(item: T): void { // OK
        this.length++

        if (!this.head) {
            this.head = { item, next: undefined }
            return
        }

        let tail = this.head

        while (tail?.next) {
            tail = tail.next
        }

        tail.next = { item, next: undefined }
    }

    remove(item: T): T | undefined {
        let current = this.head
        let previus = undefined

        while (current?.item !== item && current?.next) {
            previus = current
            current = current.next
        }

        const output = current?.item

        if (output !== item) {
            return undefined
        }

        if (previus) {
            previus.next = current?.next
        } else {
            this.head = current?.next
        }
        this.length--
        current = undefined

        return output
    }

    get(idx: number): T | undefined { // OK
        if (idx > this.length) {
            return undefined
        }

        let current = this.head
        let i = 0

        while (i < idx && current?.next) {
            current = current.next
            i++
        }

        return current?.item
    }

    removeAt(idx: number): T | undefined { // OK
        if (idx > this.length) {
            return undefined
        }

        this.length--

        let current = this.head
        let previus = undefined
        let i = 0

        while (i < idx && current?.next) {
            previus = current
            current = current.next
            i++
        }

        const item = current?.item

        if (previus) {
            previus.next = current?.next
            current = undefined
        }

        if (i === 0) {
            this.head = current?.next
            current = undefined
        }

        return item
    }
}