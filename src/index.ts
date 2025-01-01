function counter<T extends string | number>(arr: Array<T>): Record<T, number> {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] ?? 0) + 1
    return acc
  }, {} as Record<T, number>)
}

function similarity<T extends string | number>(left: Array<T>, right: Array<T>): number {
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

console.log(similarity("ccccc".split(''), 'ccccdd'.split('')))


