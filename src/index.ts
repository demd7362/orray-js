function counter(arr: Array<any>): Record<any, number> {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] ?? 0) + 1
    return acc
  }, {})
}

export {
  counter
}
