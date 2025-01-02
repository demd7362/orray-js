function counter<T extends string | number>(arr: T[]): Record<T, number> {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] ?? 0) + 1
    return acc
  }, {} as Record<T, number>)
}

function similarity<T extends string | number>(left: T[], right: T[]): number {
  if (left.length === 0 && right.length === 0) return 1
  if (left.length === 0 || right.length === 0) return 0
  let [total, counted, target] = left.length > right.length ? [left.length, counter(left), right] : [right.length, counter(right), left]
  for (let element of target) {
    if (counted[element]) {
      counted[element]--
    }
  }
  let sum = (Object.values(counted) as number[]).reduce((acc, val: number) => acc + val, 0)
  return (total - sum) / total
}

function permutation(arr: string[], length: number) {
  length = Math.min(length, arr.length)
  let result: string[] = []
  let visited = Array(arr.length).fill(false)
  let dfs = (depth: number, current: string[]) => {
    if (depth === length) {
      result.push(current.join(''))
      return
    }
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue
      visited[i] = true
      current.push(arr[i])
      dfs(depth + 1, current)
      current.pop()
      visited[i] = false
    }
  }
  dfs(0, [])
  return result
}

function combination(arr: string[], length: number) {
  length = Math.min(length, arr.length)
  let result: string[] = []
  let dfs = (index: number, current: string[]) => {
    if (current.length === length) {
      result.push(current.join(''))
      return
    }
    for (let i = index; i < arr.length; i++) {
      current.push(arr[i])
      dfs(i + 1, current)
      current.pop()
    }
  }
  dfs(0, [])
  return result
}

function groupBy <T, K extends string | number> (arr: T[], fun: (x: T) => K): Record<K, T[]>{
  return arr.reduce((acc, val) => {
    let key = fun(val)
    acc[key] = acc[key] ?? []
    acc[key].push(val)
    return acc
  }, {} as Record<K, T[]>)
}


export {
  counter,
  similarity,
  combination,
  permutation,
  groupBy
}


