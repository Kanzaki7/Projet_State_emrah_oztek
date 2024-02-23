import './Personal.css';

export default function Personal(props) {
    return(
        <div className='divPersonal'>
            <div className='personalTitre'>
                <p className='titreInfo'>Personal info</p>
                <p className='paraTitre'>Please provide your name, email address, and phone number.</p>
            </div>
            <div className='personalForm'>
                <div className='divInput'>
                    <label htmlFor="">Your name is :</label>
                    <input type="text" placeholder='Name' className='inputMain'/>
                </div>
                <div className='divInput'>
                    <label htmlFor="">Your email is :</label>
                    <input type="text" placeholder='@email.com' className='inputMain'/>
                </div>
                <div className='divInput'>
                    <label htmlFor="">Your phone number is :</label>
                    <input type="text" placeholder='+32' className='inputMain'/>
                </div>
            </div>
            <div className='personalBtn'>
                <div className='btnNext'>Next Step</div>
            </div>
        </div>
    )
}