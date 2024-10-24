import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/blogs/blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
       <Blogs></Blogs>
       <Bookmarks></Bookmarks>
       </div>
    </>
  )
}

export default App
