import React from 'react'
import {useState} from 'react'


const Folder = (props) => {
    const {name,children} = props
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return <div>
        <h3 onClick={handleClick} style={{margin: '0px'}}>{name}</h3>
        <div style={{marginLeft: '17px'}}>{isOpen? children: null}</div>
    </div>
}

export default Folder