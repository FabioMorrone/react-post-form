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
      <div className='container p-5'>

        <form className="form-label mb-3">
          <input
            type="text"
            name="author"
            class="form-control mb-2"
            placeholder="author"

          />
          <input
            type="text"
            name="title"
            class="form-control mb-2"
            placeholder="title"

          />
          <input
            type="text"
            name="body"
            class="form-control mb-2"
            placeholder="body"

          />
          <input
            type="text"
            name="public"
            class="form-control mb-2"
            placeholder="public"

          />
          <button type="submit" className="btn btn-secondary mt-5">Submit</button>
        </form>

      </div>

    </>
  )
}

export default App
