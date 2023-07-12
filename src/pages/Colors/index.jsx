import { useEffect, useState } from "react"
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
                        return(<li key={color.id}>{color.name}</li>)
                    })}
                </ul>
            </div>
        </>
    )
}

export default Colors

