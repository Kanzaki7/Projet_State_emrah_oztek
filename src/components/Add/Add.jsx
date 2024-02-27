import './Add.css'

export default function Add(props) {
    return(
        <div className={props.check} >
            <div className='addonDiv1'>
                <div>
                    <input type="checkbox" className='ui-checkbox' name="" onClick={() => props.changeOption(props.id)} defaultChecked={props.state} />
                </div>
                <div>
                    <p className='service'>{props.service}</p>
                    <p className='description'>{props.description}</p>
                </div>
            </div>
            <div className='addonDiv2'>
                <p className='priceAddon'>+${props.time === "rondToggle" ? props.prixM : props.prixY}/{props.time === "rondToggle" ? props.mois : props.year}</p>
            </div>
        </div>
    )
}