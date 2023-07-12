import { useEffect, useState, Link } from "react"
import data from '../../assets/data.js'

function Colors() {
    const [colors, setColors] = useState([])

    useEffect(() => {
        setColors(data)
        console.log(data)
        console.log(colors)
    },[])

    return(
        <>
            <div className="colors">
                <ul className="colorsList">
                    {colors.map((color) => {
                        return(<li  key={color.id}>{color.name}</li>)
                        // return(<Link to={`/colors/:color`} key={color.id}>{color.name}</Link>)
                    })}
                </ul>
            </div>
        </>
    )
}

export default Colors

