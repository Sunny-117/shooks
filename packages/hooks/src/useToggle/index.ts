import { useState } from "react"


function useToggle() {
    const [state, setState] = useState(defaultValue);
    return [state, actions];
}
export default useToggle