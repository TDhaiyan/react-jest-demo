import create from 'zustand'

type Store = {
  count: number
  inc: () => void
}

const useStore = create<Store>((set) => ({
  count: 1,
  inc: () => set((state: { count: number }) => ({ count: state.count + 1 })),
}))

export const Counter = ()=> {
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
