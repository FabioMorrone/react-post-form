import { useState } from 'react'



function App() {
  const [post, setPost] = useState({
    author: '',
    title: '',
    body: '',
    public: '',
  })

  return (
    <>
      <div className='container'>


        <form className='form'></form>

      </div>

    </>
  )
}

export default App
