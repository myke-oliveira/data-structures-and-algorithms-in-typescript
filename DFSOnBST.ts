function search(current: BinaryNode<number> | null, needle: number): boolean {
    if (!current) {
        return false
    }

    if (current.value === needle) {
        return true
    }

    if (needle < current.value) {
        return search(current.left, needle)
    }

    return search(current.right, needle)
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle)
}