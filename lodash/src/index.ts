import { map, get } from 'lodash-es'

const arr = [1, 2, 3]
const mapped = map(arr, n => n * 2)
const obj = { a: { b: 2 } }
const value = get(obj, 'a.b')

console.log(mapped, value)
