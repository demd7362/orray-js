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
  return (total - sum(Object.values(counted))) / total
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

function groupBy<T, K extends string | number>(arr: T[], keyFn: (x: T) => K): Record<K, T[]> {
  return arr.reduce((acc, val) => {
    let key = keyFn(val)
    acc[key] ??= []
    acc[key].push(val)
    return acc
  }, {} as Record<K, T[]>)
}

function countBy<T, K extends string | number>(arr: T[], keyFn: (x: T) => K): Record<K, number> {
  return arr.reduce((acc, val) => {
    let key = keyFn(val)
    acc[key] = (acc[key] ?? 0) + 1
    return acc
  }, {} as Record<K, number>)
}

function uniqueBy<T>(arr: T[], keyFn: (x: T) => string | number): T[] {
  const seen = new Set()
  return arr.filter((item) => {
    const key = keyFn(item)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function partition<T>(arr: T[], predicate: (x: T) => boolean): [T[], T[]] {
  return arr.reduce(
    (acc, val) => {
      if (predicate(val)) {
        acc[0].push(val)
      } else {
        acc[1].push(val)
      }
      return acc
    },
    [[], []] as [T[], T[]]
  )
}

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

function sum(arr: number[]) {
  return arr.reduce((acc, val) => acc + val, 0)
}

function avg(arr: number[]) {
  return sum(arr) / arr.length
}

function equalsIgnoreSequence<T extends string | number>(left: T[], right: T[]) {
  if (left.length !== right.length) return false
  return similarity(left, right) === 1
}

function equals<T extends string | number>(left: T[], right: T[]) {
  if (left.length !== right.length) return false
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false
    }
  }
  return true
}

function isPlainObject(arg: unknown): arg is Record<any, any> {
  return typeof arg === 'object' && arg !== null && !Array.isArray(arg)
}

function deepFind<T>(obj: Record<any, any> | any[], target: T): T | undefined {
  if (obj === target) {
    return target
  }

  if (Array.isArray(obj)) {
    for (const element of obj) {
      const result = deepFind(element, target)
      if (result !== undefined) {
        return result
      }
    }
  } else if (isPlainObject(obj)) {
    for (const value of Object.values(obj)) {
      const result = deepFind(value, target)
      if (result !== undefined) {
        return result
      }
    }
  }
}

function indexByValue<T extends string | number>(arr: T[]): Record<T, number> {
  return arr.reduce((acc, val, index) => {
    acc[val] ??= index
    return acc
  }, {} as Record<T, number>)
}

function distinct<T>(arr: T[]): T[] {
  let result: T[] = []
  let set = new Set()
  for (let element of arr) {
    if (!set.has(element)) {
      set.add(element)
      result.push(element)
    }
  }
  return result
}

function binarySearch<T>(arr: T[], target: T) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}


function flatten(arr: any[], depth: number = Infinity, objectHandler?: ([k, v]: [string | number | symbol, any]) => string): any[] {
  let result: any[] = []

  const dfs = (arg: any, currentDepth: number) => {
    if (currentDepth > depth) {
      result.push(arg)
      return
    }

    if (Array.isArray(arg)) {
      for (let element of arg) {
        dfs(element, currentDepth + 1)
      }
    } else if (typeof arg === 'object' && arg !== null) {
      for (let entry of Object.entries(arg)) {
        dfs(objectHandler?.(entry) ?? entry, currentDepth + 1)
      }
    } else {
      result.push(arg)
    }
  }

  dfs(arr, 0)
  return result
}


export {
  counter,
  similarity,
  combination,
  permutation,
  groupBy,
  countBy,
  uniqueBy,
  partition,
  chunk,
  sum,
  avg,
  equals,
  equalsIgnoreSequence,
  isPlainObject,
  deepFind,
  indexByValue,
  distinct,
  binarySearch,
  flatten
}


