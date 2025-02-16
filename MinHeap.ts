export default class MinHeap {
    public length: number;
    private values: number[]

    constructor() {
        this.values = []
        this.length = 0
    }

    insert(value: number): void {
        const index = this.length
        this.values[index] = value
        this.length++
        this.heapfyUp(index)
    }
    delete(): number {
        const output = this.values[0]
        const index = this.length - 1
        this.values[0] = this.values[index]
        this.length--
        this.heapfyDown(0)
        console.log(this.values)
        return output
    }

    debug() {
        console.log(this)
    }

    private heapfyUp(index: number): void {
        if (index === 0) {
            return
        }

        const value = this.values[index]
        const parentIndex = this.parentIndex(index)
        const parentValue = this.values[parentIndex]

        if (value >= parentValue) {
            return
        }

        this.values[parentIndex] = value
        this.values[index] = parentValue
        this.heapfyUp(parentIndex)
    }

    private heapfyDown(index: number): void {
        const value = this.values[index]
        const leftIndex = this.leftChildIndex(index)
        const rightIndex = this.rightChildIndex(index)
        const leftValue = this.values[leftIndex]
        const rightValue = this.values[rightIndex]

        if (value <= leftValue && value <= rightValue) {
            return
        }

        let minimumValue = rightValue
        let minimumIndex = rightIndex

        if (leftValue < rightValue) {
            minimumValue = leftValue
            minimumIndex = leftIndex
        }

        if (value > minimumValue) {
            this.values[minimumIndex] = value
            this.values[index] = minimumValue
            this.heapfyDown(minimumIndex)
        }
    }

    private leftChildIndex(index: number): number {
        return 2 * index + 1
    }

    private rightChildIndex(index: number): number {
        return 2 * index + 2
    }

    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2)
    }
}