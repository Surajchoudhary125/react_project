import  { createContext } from 'react';
import runChat from '../config/gemini';
import React, { useState } from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext(); 

const ContextProvider = (props) => {


    const[input , setInput] = useState("");
    const[recentPrompts, setRecentPrompts] = useState("");
    const[prevPrompts, setPrevPrompts] = useState([]);
    const[showResults, setShowResults] = useState(false);
    const[loading, setLoading] = useState(false);
    const[resultData, setResultData] = useState([]);
    


    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true);
        setShowResults(true);
        await runChat(input);
        const response = await runChat(input);
        setResultData(response);
        setLoading(false);
        setInput("");
    }
    // Call onSent only once on mount to avoid infinite re-renders
    React.useEffect(() => {
        onSent("what is react js?");
    }, []);
    const contextValue = {
            prevPrompts, 
            setPrevPrompts,
            onSent,
            setRecentPrompts,
            recentPrompts,
            showResults,
            loading,
            resultData,
            input,
            setInput,
        }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;