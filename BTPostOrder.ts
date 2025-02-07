export default function post_order_search(head: BinaryNode<number>): number[] {
    const output: number[] = []

    if (head.left) output.push(...post_order_search(head.left))
    if (head.right) output.push(...post_order_search(head.right))
    output.push(head.value)

    return output
}