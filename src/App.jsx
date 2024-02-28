import { useState, useEffect } from 'react'
import './App.css'
import plans from './assets/json/plans.json'
import addons from './assets/json/addons.json'
import thankIcon from './assets/img/icon-thank-you.svg'
import Personal from './components/Personal/Personal'
import Plan from './components/Plan/Plan'
import Add from './components/Add/Add'
import Summary from './components/Summary/Summary'
import Thank from './components/Thank/Thank'



function App() {
  // useStates pour les inputs du premier component sur les infos personnels
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  // useState pour le passage d'un component à un autre lors du click sur le bouton 
  // Next Step
  const [component, setComponent] = useState("personal")

  // useState pour le changement de la classe lors du click sur le toggle du component 
  // sur les différents tarifs, en fonction de cette classe ce sera soit le prix par
  // mois, soit le prix par année qui sera affiché
  const [classToggle, setClassToggle] = useState("rondToggle")


// useState pour le changement de classe lors du click sur la div qui contient un tarif
// si state = l'index de la div, la classe "active" est appliquée sur cette div, et non
// sur les autres
  const [state, setState] = useState(-1)

  // useState qui va etre utilisé dans une condition pour déterminer si lors du repassage
  // par le component des add-ons, le tarif précédemment séléctionné doit etre
  // soustrait ou pas 
  const [goback, setGoback] = useState(false)


  // ces useStates sont utilisés pour changer les valeurs de deux propriétées
  // en fonction de la valeur de ces propriétées, le checkmark contenu dans la div restera coché
  // si il est coché, on lui donne une classe différente
  const [addonsList, setAddonsList] = useState(addons)
  const [addonsSummary, setAddonsSummary] = useState([])

// ces useStates sont utilisés pour le calcul total
  const [optionNom, setOptionNom] = useState("")
  const [optionPrixM, setOptionPrixM] = useState(0)
  const [optionPrixY, setOptionPrixY] = useState(0)
  const [optionTotalM, setOptionTotalM] = useState(0)
  const [optionTotalY, setOptionTotalY] = useState(0)


  // lors du changement de la valeur du state donc lors du click sur une autre div des tarifs
  // la valeur du tarif sera attribué au useState correspondant
  useEffect(() => {
    if (state === 0) {
      setOptionNom(plans[0].nom)
      console.log(optionNom);
      setOptionPrixM(plans[0].prix.mois)
      setOptionPrixY(plans[0].prix.year)
      console.log(optionPrixM);
      console.log(optionPrixY);
    } else if (state === 1) {
      setOptionNom(plans[1].nom)
      console.log(optionNom);
      setOptionPrixM(plans[1].prix.mois)
      setOptionPrixY(plans[1].prix.year)
      console.log(optionPrixM);
      console.log(optionPrixY);
    } else if (state === 2) {
      setOptionNom(plans[2].nom)
      console.log(optionNom);
      setOptionPrixM(plans[2].prix.mois)
      setOptionPrixY(plans[2].prix.year)
      console.log(optionPrixM);
      console.log(optionPrixY);
    }
  }, [state])
  

  // quand on arrive au component des add-ons, donc après etre passé par le component des
  // tarifs, le useState auquel on a attribué le tarif sélectionné sera additionné à la somme totale
  useEffect(() => {
    if (component === 'summary' && goback === false) {
      setOptionTotalM(optionTotalM+optionPrixM)
      console.log(optionTotalM);
      setOptionTotalY(optionTotalY+optionPrixY)
      console.log(optionTotalY);
    } else if (component === "plan") {
      setOptionTotalM(optionTotalM-optionPrixM)
      console.log(optionTotalM);
      setOptionTotalY(optionTotalY-optionPrixY)
      console.log(optionTotalY);
    }
  }, [component, goback])


  // fonction qui va attribuer à la div clické donc celle qui contient l'index en paramètre
  // une classe active 
  let changeClassOption = (index) => {
      setState(index)
      console.log(state);
  }
  

  // fonction qui va attribué une classe à la div si le checkmark est coché
  // si le checkmark est coché, la valeur de l'add-on correspondant est additionnée au total
  // un filter sera fait sur les objets qui ont été checkés
  // c'est sur le nouveau tableau filtré que le map sera effectué, pour afficher les options dans le component du résumé 
  let changeClassOption2 = (index) => {
    let copieAddons = [...addonsList]
    if (copieAddons[index].check === "unchecked") {
      copieAddons[index].check = "checked"
      copieAddons[index].state = true
      setOptionTotalM(optionTotalM+copieAddons[index].prix.prixM)
      setOptionTotalY(optionTotalY+copieAddons[index].prix.prixY)
      console.log(optionTotalM);
      console.log(optionTotalY);
      setAddonsList(copieAddons)
      let addonsBis = [...copieAddons]
      let addFilter = addonsBis.filter((add) => add.check === "checked")
      setAddonsSummary(addFilter)
    } else if (copieAddons[index].check === "checked") {
      copieAddons[index].check = "unchecked"
      copieAddons[index].state = false
      setOptionTotalM(optionTotalM-copieAddons[index].prix.prixM)
      setOptionTotalY(optionTotalY-copieAddons[index].prix.prixY)
      setAddonsList(copieAddons)
      let addonsBis = [...copieAddons]
      let addFilter = addonsBis.filter((add) => add.check === "checked")
      setAddonsSummary(addFilter)
    }
  }

// fonction pour passer d'une classe à une autre lors du click sur le toggle
  let changeToggle = () => {
    if (classToggle === "rondToggle") {
      setClassToggle("rondToggleActive")
    } else if (classToggle === "rondToggleActive") {
      setClassToggle("rondToggle")
    }
  }

  // les fonctions utilisées pour capturer la valeur des inputs dans le 1er component
  let captureNom = (event) => {
    setNom(event.target.value);
  }
  let captureEmail = (event) => {
    setEmail(event.target.value);
  }
  let capturePhone = (event) => {
    setPhone(event.target.value);
  }

  // fonction pour passer au component suivant en cliquant sur le btn Next Step
  let changeComponent = () => {
    if (component === "personal") {
      setComponent("plan")
    } else if (component === "plan") {
      setComponent("add")
      setGoback(false)
    } else if (component === "add") {
      setComponent("summary")
    } else if (component === "summary") {
      setComponent("thank")
    }
  }

  // fonction pour passer au component précédent en cliquant sur le btn Go Back 
  let changeComponentBis = () => {
    if (component === "plan") {
      setComponent("personal")
    } else if (component === "add") {
      setComponent("plan")
    } else if (component === "summary") {
      setComponent("add")
      setGoback(true)
    }
  }

  // fonction pour revenir au component des tarifs quand on clique sur la div Change
  let changeOption = () => {
    setComponent("plan")
    setGoback(false)
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
                <div className={component === "summary" ? 'divStepNumberActive' : "divStepNumber"}>
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
        <div className='divAdd'>
          <div className='personalTitre'>
            <p className='titreInfo'>Pick add-ons</p>
            <p className='paraTitre'>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className='addons'>
          {
            addonsList.map((add, index) =>(
              <Add key={index} id={index} changeOption={changeClassOption2} check={add.check} state={add.state} time={classToggle} service={add.service} description={add.description} prixM={add.prix.prixM} prixY={add.prix.prixY} mois={add.periode[0]} year={add.periode[1]}/>
            ))
          }
          </div>
          <div className='addBtn'>
            <div className='btnBack' onClick={changeComponentBis}>Go Back</div>
            <div className='btnNext' onClick={changeComponent}>Next Step</div>
          </div>
        </div>
        }
        {component === "summary" &&
          <div className='divSummary'>
            <div className='personalTitre'>
              <p className='titreInfo'>Finishing up</p>
              <p className='paraTitre'>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='total'>
              <div className='totalDiv1'>
                <div className='totalDiv1Bis'>
                  <div className='optionSummary'>
                    <div className='optionInfo'>
                      <p className='optionNom'>{optionNom}({classToggle === "rondToggle" ? "Month" : "Year"})</p>
                      <div className='optionChange' onClick={changeOption}>
                        <p>Change</p>
                      </div>
                    </div>
                    <div className='optionPrice'>
                      <p>${classToggle === "rondToggle" ? optionPrixM : optionPrixY}/{classToggle === "rondToggle" ? "mo" : "yr"}</p>
                    </div>
                  </div>
                  <div className='addonsSummary'>
                  {
                    addonsSummary.map((addons, index) => (
                      <Summary key={index} id={index} time={classToggle} service={addons.service} prixM={addons.prix.prixM} prixY={addons.prix.prixY} mois={addons.periode[0]} year={addons.periode[1]}/>
                    ))
                  }
                  </div>
                </div>
              </div>
              <div className='totalDiv2'>
                <div className='totalDiv2Bis'>
                  <div className='perTotal'>
                    <p>Total (per {classToggle === "rondToggle" ? "month" : "year"})</p>
                  </div>
                  <div className='priceTotal'>
                    <p>${classToggle === "rondToggle" ? optionTotalM : optionTotalY}/{classToggle === "rondToggle" ? "mo" : "yr"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='summaryBtn'>
              <div className='btnBack' onClick={changeComponentBis}>Go Back</div>
              <div className='btnNext' onClick={changeComponent}>Confirm</div>
            </div>
          </div> 
        }
        {component === "thank" &&
          <Thank thankIcon={thankIcon}/>
        } 
        </div>
      </div>
    </>
  )
}

export default App
