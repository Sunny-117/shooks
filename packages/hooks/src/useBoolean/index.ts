import { useState } from "react"


function useBoolean() {
    const [state, setState] = useState(false)
    const toggle = () => {
        setState(!state)
    }
    const setFalse = () => {
        setState(false)
    }
    const setTrue = () => {
        setState(true)
    }
    return [
        state,
        {
            toggle,
            setFalse,
            setTrue
        }
    ]
}
export default useBoolean