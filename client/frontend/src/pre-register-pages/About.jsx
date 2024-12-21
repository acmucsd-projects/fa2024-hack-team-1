import Nav from '../components/Pre-register_Nav'
import PillButton from '../components/PillButton'; 
import './About.css';

function About() {  
    return(
        <div>
            <Nav/>
            <div className='container'>
                <div className="side1">
                    <h1 className="heroText gradients">ren·dez·view</h1>
                    <ul>
                        <li id='blwRen'>rän</li>
                        <li id='blw-1'>-</li>
                        <li id='blwDez'>də</li>
                        <li id='blw-2'>-</li>
                        <li id='blwView'>vyoo</li>
                    </ul>
                    <h1 className='gradients'>Travel, Meet, and Experience</h1>                        
                    <p className="desc">Looking for travel buddies? Planning a trip? Or just wanting to meet new people? We can help! Rendezview helps you find people traveling to the same place. </p>
                    <PillButton/>
                </div>
                <div className="side2">
                    <img id="cover" src="/public/ErrorPic.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;