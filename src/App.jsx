import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import DisplayCounter from './components/DisplayCounter'
import Card from './components/Card'
import Controls from './components/Controls'

function App() {

  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Card>
          <Header />
          <div className="col-lg-6 mx-auto">
            <DisplayCounter />
            <Controls />
          </div>
        </Card>
      </center>
    </>
  )
}

export default App
