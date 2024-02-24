import { useState } from 'react'
import './App.css'
import plans from './assets/json/plans.json'
import addons from './assets/json/addons.json'
import Personal from './components/Personal/Personal'
import Plan from './components/Plan/Plan'
import Add from './components/Add/Add'



function App() {
  // const [count, setCount] = useState(0)
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [component, setComponent] = useState("personal")
  const [classToggle, setClassToggle] = useState("rondToggle")

  const [state, setState] = useState(-1)

  let changeClassOption = (event) => {
    if (event.target.id === "0") {
      console.log(event.target);
      setState(0)
    } else if (event.target.id === "1") {
      console.log(event.target);
      setState(1)
    } else if (event.target.id === "2") {
      console.log(event.target);
      setState(2)
    }
  }

  let changeToggle = () => {
    if (classToggle === "rondToggle") {
      setClassToggle("rondToggleActive")
    } else if (classToggle === "rondToggleActive") {
      setClassToggle("rondToggle")
    }
  }

  let captureNom = (event) => {
    setNom(event.target.value);
  }
  let captureEmail = (event) => {
    setEmail(event.target.value);
  }
  let capturePhone = (event) => {
    setPhone(event.target.value);
  }

  let changeComponent = () => {
    if (component === "personal") {
      setComponent("plan")
    } else if (component === "plan") {
      setComponent("add")
    }
  }
  let changeComponentBis = () => {
    if (component === "plan") {
      setComponent("personal")
    } else if (component === "add") {
      setComponent("plan")
    }
  }

  return (
    <>
      <div className='divPrincipale'>
        <div className='divStep'>
          <div className='sideBar'>
            <div className='divStepPrincipale'>
              <div className='step'>
                <div className={component === "personal" ? 'divStepNumberActive' : "divStepNumber"}>
                  <p className='number'>1</p>
                </div>
                <div className='paraStep'>
                  <p className='paraNumberStep'>STEP 1</p>
                  <p className='paraTextStep'>YOUR INFO</p>
                </div>
              </div>
              <div className='step'>
                <div className={component === "plan" ? 'divStepNumberActive' : "divStepNumber"}>
                  <p className='number'>2</p>
                </div>
                <div className='paraStep'>
                  <p className='paraNumberStep'>STEP 2</p>
                  <p className='paraTextStep'>SELECT PLAN</p>
                </div>
              </div>
              <div className='step'>
                <div className={component === "add" ? 'divStepNumberActive' : "divStepNumber"}>
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
        {component === "personal" &&
        <Personal nom={nom} email={email} phone={phone} changeNom={captureNom} changeEmail={captureEmail} changePhone={capturePhone} diffComponent={changeComponent}/>}
        {component === "plan" &&
        <div className='divPlan'>
            <div className='personalTitre'>
                <p className='titreInfo'>Select your plan</p>
                <p className='paraTitre'>You have the option of monthly or yearly billing</p>
            </div>
            <div className='divOptions'>
                <div className='options'>
                    {
                        plans.map((plan, index)=> 
                        {
                            return(
                              <Plan key={index} id={index} img={plan.img} nom={plan.nom} prixM={plan.prix.mois} prixY={plan.prix.year} mois={plan.période[0]} year={plan.période[1]} classToggle={classToggle} changeClassToggle={changeToggle} changeOption={changeClassOption} option={state}/>
                            )
                        })
                    }
                </div>
                <div className='toggleOption'>
                    <div className='toggle'>
                        <div className={classToggle === "rondToggle" ? "divMonthToggleActive" : "divMonthToggle"}>Monthly</div>
                        <div className='divToggle'>
                            <div className='bgToggle' onClick={changeToggle}>
                                <div className={classToggle}></div>
                            </div>
                        </div>
                        <div className={classToggle === "rondToggle" ? "divYearToggle" : "divYearToggleActive"}>Yearly</div>
                    </div>
                </div>
            </div>
            <div className='planBtn'>
              <div className='btnBack' onClick={changeComponentBis}>Go Back</div>
              {(state >= 0 && state <= 2) && <div className='btnNext' onClick={changeComponent}>Next Step</div>}
            </div>
        </div>}
        {component === "add" &&
        <Add diffComponent={changeComponent} diffComponentBis={changeComponentBis}/>
        }  
        </div>
      </div>
    </>
  )
}

export default App
