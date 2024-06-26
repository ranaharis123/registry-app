import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


function Registry(){
    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if (error === false)
        {
        const tempData = [...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
        }
    }
    const removeItem = (index) =>{

        let newData = [...registryData]
        newData.splice(index,1)
        setRegistryData(newData)
    }

    const editItem = (index) =>{

        let newdata = [...registryData]
        newdata[index] = textInput
        setRegistryData(newdata)

    }
    useEffect(()=>{
        if (textInput.length > 10) setError(true)
        else setError(false)

    }, [textInput])

    console.log(registryData)
    // Comment added to view the updated code in Github
    // Comment added to view the updated code in Github
    // Comment added to view the updated code in Github
    // Comment added to view the updated code in Github
    // Comment added to view the updated code in Github

    return(
        <div>
            <form onSubmit={addItem}>
            <h1>Registry</h1>
            <Link to="/">Click Here to go to home</Link>
            
                <label>

                    text input:
                    <input type = "text" value = {textInput} onChange={(e)=> setTextInput(e.target.value)}></input>

                </label>
                <input type="submit" value = "submit"></input>
            </form>
            {error ? <span style={{color:"red"}}> Error Occured </span> : null}
            {
                registryData.map((item, index)=>{
                    return (

                        <li key={index} id={index} > {item}  <button id={index} onClick={() => removeItem(index)}>Remove</button> <button onClick={()=> editItem(index)}>Update</button></li>
                    )
                })
            }
           

        </div>
    )
}

export default Registry;