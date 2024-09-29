import Counter from './components/Counter'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoCard from './components/TodoCard'

function App() {
  return (
    <>
      <Header />
      {/* <TodoCard day="Monday" numberOfActifities={1}/>
      <TodoCard day="Tuesday" numberOfActifities={2}/>
      <TodoCard day="wednesday" numberOfActifities={3}/> */}
      <Counter />
      {/* <Footer message="Hello world"/> */}
    </>
  )
}

export default App
