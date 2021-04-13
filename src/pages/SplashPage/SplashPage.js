import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton.component';
import './SplashPage.styles.scss';


const SplashPage = () => {
    return (
        <div className="sp-container">
            <div className='sp-content'>
                <CustomButton text={'Get Started'} route='/todo'/>
            </div>
        </div>
    )
}

export default SplashPage;