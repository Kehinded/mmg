import {useState, createContext} from "react"  

const ContextControl = createContext({
    isSidebarOpen: false,
    sideBarToggleFunc: (param) => {}
})

export function ContextControlProvider (props){
    const [sidebarOpen , setSidebarOpen] = useState(false); 


    const sidebarOpenFunction  = (param) => {
    if(param === "close"){
        setSidebarOpen(false);
    } 
    if(param === "open"){
        setSidebarOpen(true);
    }
    if(param === "any"){
        setSidebarOpen(!sidebarOpen)
        // console.log("yes");
    }
    }

    const context = {
        isSidebarOpen: sidebarOpen,
        sideBarToggleFunc: sidebarOpenFunction ,
    }

    return <ContextControl.Provider value={context}>
        {props.children}
    </ContextControl.Provider>
}


export default ContextControl;