import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import Header from './Components/Header';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <Header></Header>
      <div className='m-20'>

        <div className='text-center my-20'>
          <h className='text-5xl text-purple-600'>Hot Cold Coffee: {coffees.length}</h>
        </div>

        <div className='grid md:grid-cols-2 gap-4'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            > </CoffeeCard>)
          }
        </div>

      </div>
    </div>
  )
}

export default App
