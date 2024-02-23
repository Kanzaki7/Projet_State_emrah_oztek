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
                    <label htmlFor="">Your name is : {props.nom}</label>
                    <input type="text" placeholder='Name' className='inputMain' onChange={props.changeNom} value={props.nom}/>
                </div>
                <div className='divInput'>
                    <label htmlFor="">Your email is : {props.email}</label>
                    <input type="email" placeholder='@email.com' className='inputMain' onChange={props.changeEmail} value={props.email}/>
                </div>
                <div className='divInput'>
                    <label htmlFor="">Your phone number is : {props.phone}</label>
                    <input type="text" placeholder='+32' className='inputMain' onChange={props.changePhone} value={props.phone}/>
                </div>
            </div>
            <div className='personalBtn'>
                <div className='btnNext'>Next Step</div>
            </div>
        </div>
    )
}