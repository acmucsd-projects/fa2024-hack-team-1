import IntroNavbar from '../components/Pre-register_Nav'
import Button from '@mui/material/Button'
import './About.css';

function About() {
    return(
        <div>
            <IntroNavbar />
            <div class="texts">
                <h1 class="heroText">ren·dez·view</h1>
                <ul>
                    <li>rän</li>
                    <li>-</li>
                    <li>də</li>
                    <li>-</li>
                    <li>vyo͞o</li>
                </ul>
                <h1>Travel, Meet, and Experience</h1>
                <p class="desc">Looking for travel buddies? Planning a trip? Or just wanting to meet new people? We can help! Rendezview helps you find people traveling to the same place. </p>
            </div>
            <Button variant="text" color="darkGreen">Start Here</Button>
        </div>
    );
}

export default About;