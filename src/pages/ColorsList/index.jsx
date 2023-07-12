import { useEffect, useState } from "react"
import data from '../../assets/data.js'
import { Link } from 'react-router-dom';

function Colors() {
    const [colors, setColors] = useState([])

    useEffect(() => {
        setColors(data)
    },[])

    return(
        <>
            <div className="colors">
                <ul className="colorsList">
                    {colors.map((color) => {
                        // return(<li  key={color.id}>{color.name}</li>)
                        return(<p>
                            <Link to={`/colors/${color.name}`} key={color.id}>{color.name}</Link>
                        </p>)
                    })}
                </ul>
            </div>
        </>
    )
}

export default Colors

