import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import data from '../../assets/data'

function PickColor() {
    const [colorSelected,setColorSelected] = useState({})
    const { color } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const foundColor = data.find((item) => item.name==color)
        foundColor ? setColorSelected(foundColor) : setColorSelected(null)
    },[])

    if(colorSelected){
        return (
            <>
            <p>{colorSelected.name}</p>
            </>
        )
    } else {
        return(
            <h1>Color Not Found</h1>
        )
    }
}

export default PickColor
