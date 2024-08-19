import React from 'react'
import PhotoCard from './components/PhotoCard'
import useFetch from './utils/useFetch';

const App = () => {


  const [ data, loading, error ] = useFetch("https://jsonplaceholder.typicode.com/photos");

  return  (error ) ? <div className='h-screen w-screen bg-zinc-900 text-white text-xl flex items-center justify-center'>Error: {error.message} </div> : (
    <div className='w-screen '>

      <nav className='w-full py-4 text-xl text-white bg-zinc-900 text-center font-medium sticky top-0 right-0  '>Photos</nav>
      
      <section className='w-full bg-zinc-800  py-3 flex flex-wrap gap-3 justify-center '>


      {
        (!loading) ? data.map( (item) => <PhotoCard key={item.id} obj={item} /> ) : <p className='text-white h-screen flex items-center justify-center '>Loading...</p>
      }
      

      </section>
      

    </div>
  )
}

export default App