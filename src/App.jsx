
import Card from "./components/Card"
import './App.css'

const data = [
  {url: "https://source.unsplash.com/user/c_v_r/100x100", 
   title: "Random Card 1", 
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, blanditiis?"     
  },
  {url: "https://source.unsplash.com/user/c_v_r/100x100", 
   title: "Random Card 2", 
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, blanditiis?"     
  },
  {url: "https://source.unsplash.com/user/c_v_r/100x100", 
   title: "Random Card 3", 
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, blanditiis?"     
  }
]


function App() {


  return (
    <div className="App">
      {data.map((d, i)=> {
        return <Card url={d.url} description={d.description} title={d.title}/>
      })}
    </div>
  )
}

export default App
