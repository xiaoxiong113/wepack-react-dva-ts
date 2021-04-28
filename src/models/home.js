const home = {
  namespace: 'home',
  state: {
    count: 1
  },
  reducers: {
    saveData(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {

  }
}

export default home