import './Thank.css'

export default function Thank(props) {
    return(
        <div className='divThank'>
            <div>
                <div>
                    <img src={props.thankIcon} alt="" />
                </div>
            </div>
            <div className='thankTitre'>
                <p className='thankInfo'>Thank you!</p>
                <p className='paraThank'>
                    Thanks fot confirming your subscription! We hope you have fun using
                    out platform. If you ever need support, please feel free to email us at 
                    support@loregaming.com.
                </p>
            </div>
        </div>
    )
}