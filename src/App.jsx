import { useMemo, useState } from 'react'

function App() {

  const [weight, setWeight] = useState(70)
  const [height, setheight] = useState(180)

  const handleWeightChange = (e) => {
    setWeight(e.target.value)
  }

  const handleHeightChange = (e) => {
    setheight(e.target.value)
  }

  const bmiCalcOutput = useMemo(() => {
    let calc = (weight / (height) ** 2) * 10000
    calc = calc.toFixed(1) //this will put value to 1 value after decimal only and will return as a string, for number value we've to parseFloat it so that string will convert to number. 
    return parseFloat(calc)
  }, [weight, height])  //useMemo used for optmization takes 2 params 1. callbackfunction where login need to implement and 2. dependecies for which that callback function is dependent
  return (
    <>
      <div className='flex flex-col items-center mt-20'>
        <div className='flex flex-col items-center bg-white w-1/3 pb-10'>
          <h1 className='text-2xl bg-blue-900 w-full text-center p-4 font-bold'>BMI CALCULATOR</h1>

          <div className='input-section py-5 px-20 w-full'>
            <p className='slider-output'>Weight: {weight}kg (<em className='text-xs'>Range:40 - 200kg</em>)</p>
            <input type="range" step="1" min="40" max="200" className='input-slider w-full' onChange={handleWeightChange} />
            <p className='slider-output'>Height: {height}cm (<em className='text-xs'>Range:140 - 220cm</em>)</p>
            <input type="range" step="1" min="140" max="220" className='input-slider w-full' onChange={handleHeightChange} />
          </div>
          <div className="flex flex-col items-center output-section">
            <p>Your BMI is: </p>
            <p className="output text-white bg-blue-900 py-2 px-8 rounded-full mt-3">{bmiCalcOutput}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
