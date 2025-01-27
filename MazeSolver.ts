const directions: Point[] = [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
]

function walk(maze: string[], wall: string, { x, y }: Point, end: Point, path: Point[], seen: Boolean[][]): Boolean {
    if (x < 0 || x >= maze[0].length || y < 0 || y >= maze.length) {
        return false
    }

    if (maze[y][x] === wall) {
        return false
    }

    if (x === end.x && y === end.y) {
        path.push({ x, y })
        return true
    }

    if (seen[y][x]) {
        return false
    }

    seen[y][x] = true
    path.push({ x, y })

    for (const { x: dx, y: dy } of directions) {
        if (walk(maze, wall, { x: x + dx, y: y + dy }, end, path, seen)) {
            return true
        }
    }

    path.pop()
    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

    const path: Point[] = []
    const seen: Boolean[][] = []

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    walk(maze, wall, start, end, path, seen)

    return path
}