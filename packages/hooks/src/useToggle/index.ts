import { useState } from "react"


function useToggle() {
    const [state, setState] = useState('a', 'b')
    const toggle = () => {

    }
    const setLeft = () => {
        setState('a')
    }
    const setRight = () => {
        setRight('b')
    }
    return [
        state,
        {
            toggle,
            setLeft,
            setRight
        }
    ]
}
export default useToggle