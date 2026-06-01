import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    //Get Api from backend,agr sara kam shi hota h to hme .then mil jayga
    axios.get('/api/jokes') 
    .then((response) => { //agr backend se req successfully milti h tb run .then
      setJokes(response.data);
    })
    .catch((error) => { //nhi to run .catch
      console.log(error);
    })
  });

  return (
    <>
      <h1>Frontend with FullStack</h1>
      <p>JOKES: {jokes.length}</p>

      {
        //  joke is the object
        jokes.map((joke, index) => ( // curly brases ke place pr use () then no need to return, agr {} use krte to return krna padta
          // id ke basis pr jokes seperate honge and show honge
          <div key={joke.id}> 
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }  
    </>
  )
}

export default App
