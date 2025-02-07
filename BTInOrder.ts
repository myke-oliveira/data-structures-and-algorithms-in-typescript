export default function in_order_search(head: BinaryNode<number>): number[] {
    const output: number[] = []

    if (head.left) output.push(...in_order_search(head.left))
    output.push(head.value)
    if (head.right) output.push(...in_order_search(head.right))

    return output
}