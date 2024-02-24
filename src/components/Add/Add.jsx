import './Add.css'

export default function Add(props) {
    return(
        <div className='divAdd'>
            <div className='personalTitre'>
                <p className='titreInfo'>Pick add-ons</p>
                <p className='paraTitre'>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='addons'>
                <div className='addon'>
                    <div className='addonDiv1'>
                        <div>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <p className='service'>Online service</p>
                            <p className='description'>Acess to multiplayer games</p>
                        </div>
                    </div>
                    <div className='addonDiv2'>
                        <p className='priceAddon'>+$10/yr</p>
                    </div>
                </div>
                <div className='addon'></div>
                <div className='addon'></div>
            </div>
            <div className='addBtn'>
                <div className='btnBack' onClick={props.diffComponentBis}>Go Back</div>
                <div className='btnNext' onClick={props.diffComponent}>Next Step</div>
            </div>
        </div>
    )
}