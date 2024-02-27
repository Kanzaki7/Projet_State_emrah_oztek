import './Summary.css'

export default function Summary(props) {
    return(
        <div className='addonsSummaryBis'>
            <div className='addonNom'>
                <p>{props.service}</p>
            </div>
            <div className='addonPrice'>
                <p>+${props.time === 'rondToggle' ? props.prixM : props.prixY}/{props.time === 'rondToggle' ? props.mois : props.year}</p>
            </div>
        </div>
    )
}