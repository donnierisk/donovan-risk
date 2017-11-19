import React, {Component} from 'react'
import DevIcon from './assets/dev-icon.png'
import DesignIcon from './assets/design-icon.png'
import CorporateIcon from './assets/corporate-icon.png'

class Tree extends Component {

    componentDidMount(){
        
        let waitTime = this.props.wait;
        const timingArray = ['.trunk','.tier1','.tier2','.tier3','.skill','.skill','.skill'];
        let iconCounter = 0;

        timingArray.forEach(function(obj) {
            
            setTimeout(function() {
                if(obj === ".trunk"){
                    const trunk = document.querySelector(obj);
                    trunk.classList.add("grown");
                }
                else if(obj === ".skill"){
                    const icon = document.querySelectorAll(obj)[iconCounter];
                    icon.classList.add('loaded-skill');
                    iconCounter++;
                }
                else {
                    const branches = document.querySelectorAll(obj);
                    branches.forEach(function(el) {
                        el.classList.add("grown");
                    })                    
                }
            }, waitTime);

            if(obj === ".skill")
                waitTime += 300
            else
                waitTime += 500;

        })
    }

    render(){
        return (
        <div className='tree'>
            <div className='triangle trunk'></div>
            <div className='branch-holder' id="branch1"><div className='triangle tier2'></div></div>
            <div className='branch-holder' id="branch2"><div className='triangle tier2'></div></div>
            <div className='branch-holder' id="branch3"><div className='triangle tier1'></div></div>
                <div className='branch-holder' id="branch3-1"><div className='triangle tier3'></div></div>
            <div className='branch-holder' id="branch4"><div className='triangle tier1'></div></div>
                <div className='branch-holder' id="branch4-1"><div className='triangle tier3'></div></div>
                <div className='branch-holder' id="branch4-2"><div className='triangle tier3'></div></div>
            <div className='branch-holder' id="branch5"><div className='triangle tier3'></div></div>

            <div id='dev-skills' className='skill'><img src={DevIcon} alt='dev-icon'/>
                <div class='skill-content'>
                    <h3>Development</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3 + Bootstrap</li>
                        <li>Vanilla Javascript</li>
                        <li>JQuery</li>
                        <li>ReactJS</li>
                        <li>PHP</li>
                        <li>Wordpress</li>
                        <li>Firebase</li>
                        <li>GIT + NPM </li>
                    </ul>
                </div>
            </div>
            <div id='design-skills' className='skill'><img src={DesignIcon} alt='dev-icon'/></div>
            <div id='corporate-skills' className='skill'><img src={CorporateIcon} alt='dev-icon'/></div>
        </div>
    )
    }
}

export default Tree