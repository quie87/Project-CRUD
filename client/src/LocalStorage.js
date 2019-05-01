export const setState = state => {
  try {
    console.log(state)
    const localStorageState = JSON.stringify({
      user: state.user,
      projects: state.projects,
      todos: state.todos
    })
    window.localStorage.setItem('projectplanner', localStorageState)
  } catch (error) { console.log('hej' + error) }
}

export const getState = () => {
  try {
    const state = JSON.parse(window.localStorage.getItem('projectplanner'))
    if (state) {
      return state
    }
  } catch (error) { console.log('hopp' + error) }
}
