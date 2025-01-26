export default function bs_list(haystack: number[], needle: number): boolean {

    let start = 0
    let end = haystack.length

    do {
        const m = Math.floor((start + end) / 2)
        const v = haystack[m]

        if (v === needle) {
            return true
        } else if (v > needle) {
            end = m
        } else {
            start = m + 1
        }
    } while (start < end)

    return false

}