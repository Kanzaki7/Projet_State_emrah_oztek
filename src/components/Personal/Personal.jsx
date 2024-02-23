import './Personal.css';

export default function Personal(props) {
    return(
        <div className='divPersonal'>
            <p>Personal Info</p>
            <p>Please provide your name, email address, and phone number.</p>
            <div>
                <div className='divInput'>
                    <label htmlFor="">Your name is :</label>
                    <input type="text" placeholder='Name'/>
                </div>
                <div className='divInput'>
                    <label htmlFor="">Your name is :</label>
                    <input type="text" placeholder='Name'/>
                </div>
                <div className='divInput'>
                    <label htmlFor="">Your name is :</label>
                    <input type="text" placeholder='Name'/>
                </div>
            </div>
            <div>Next Step</div>
        </div>
    )
}