import React from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import './SplashPage.styles.scss';


const SplashPage = () => {
    return (
        <div className="sp-container">
            <div className='sp-content'>
                <Link to='./todo'>
                    <CustomButton text={'Get Started'} route='/todo'/>
                </Link>
            </div>
        </div>
    )
}

export default SplashPage;