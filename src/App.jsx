import { useState } from 'react'
import './App.css'
import Personal from './components/Personal/Personal'

function App() {
  // const [count, setCount] = useState(0)
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  let captureNom = (event) => {
    setNom(event.target.value);
  }
  let captureEmail = (event) => {
    setEmail(event.target.value);
  }
  let capturePhone = (event) => {
    setPhone(event.target.value);
  }

  return (
    <>
      <div className='divPrincipale'>
        <div className='divStep'>
          <div className='sideBar'>
            <div className='divStepPrincipale'>
              <div className='step'>
                <div className='divStepNumber'>
                  <p className='number'>1</p>
                </div>
                <div className='paraStep'>
                  <p className='paraNumberStep'>STEP 1</p>
                  <p className='paraTextStep'>YOUR INFO</p>
                </div>
              </div>
              <div className='step'>
                <div className='divStepNumber'>
                  <p className='number'>2</p>
                </div>
                <div className='paraStep'>
                  <p className='paraNumberStep'>STEP 2</p>
                  <p className='paraTextStep'>SELECT PLAN</p>
                </div>
              </div>
              <div className='step'>
                <div className='divStepNumber'>
                  <p className='number'>3</p>
                </div>
                <div className='paraStep'>
                  <p className='paraNumberStep'>STEP 3</p>
                  <p className='paraTextStep'>ADD-ONS</p>
                </div>
              </div>
              <div className='step'>
                <div className='divStepNumber'>
                  <p className='number'>4</p>
                </div>
                <div className='paraStep'>
                  <p className='paraNumberStep'>STEP 4</p>
                  <p className='paraTextStep'>SUMMARY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='secondeDiv'>
          <Personal nom={nom} email={email} phone={phone} changeNom={captureNom} changeEmail={captureEmail} changePhone={capturePhone}/>
        </div>
      </div>
    </>
  )
}

export default App
