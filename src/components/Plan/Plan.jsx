import './Plan.css'


export default function Plan(props) {
    return(
        <div id={props.id} className={props.option === props.id ? "optionActive" : "option"}  onClick={props.changeOption}>
            <div className='divImg'>
                <img src={props.img} alt="" />
            </div>
            <div className='paraOption'>
                <p className='titreOption'>{props.nom}</p>
                <p className='prixOption'>${props.classToggle === "rondToggle" ? props.prixM : props.prixY}/{props.classToggle === "rondToggle" ? props.mois : props.year}</p>
            </div>
        </div>
    )
}