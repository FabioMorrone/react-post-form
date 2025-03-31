import { useState } from 'react'

const api_endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

function App() {
  const [post, setPost] = useState({
    author: '',
    title: '',
    body: '',
    public: true,
  })

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ?
        e.target.checked : e.target.value;
    setPost((post) => ({
      ...post,
      [e.target.name]: value,

    }));
    console.log(post);
  }


  return (
    <>
      <div className='container p-5'>

        <form className="form-label mb-3">
          <input
            type="text"
            name="author"
            className="form-control mb-2"
            placeholder="author"
            value={post.author}
            onChange={handleChange}

          />
          <input
            type="text"
            name="title"
            className="form-control mb-2"
            placeholder="title"
            value={post.title}
            onChange={handleChange}

          />
          <input
            type="text"
            name="body"
            className="form-control mb-2"
            placeholder="body"
            value={post.body}
            onChange={handleChange}

          />

          <input
            type="checkbox"
            className="form-check-input"
            id="public"
            name="public"
            value={post.public}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="public">Public</label>
          <button
            type="submit"
            className="btn btn-secondary mt-5 onClick">Submit


          </button>
        </form>

      </div>

    </>
  )
}

export default App
