export default function pre_order_search(head: BinaryNode<number>): number[] {
    const output: number[] = []

    output.push(head.value)
    if (head.left) output.push(...pre_order_search(head.left))
    if (head.right) output.push(...pre_order_search(head.right))

    return output
}