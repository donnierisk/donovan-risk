import React from 'react'
import Tree from './Tree'

const Skillset = (props) => {

    let pageColor = props.pageColor;
    return (
        <div class={pageColor}>
            <p>Donovan Risk</p>
            <div id="tree-container">
                <Tree wait={1000}/>
            </div>
        </div>
    )
}

export default Skillset