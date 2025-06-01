import {useState,useEffect} from 'react'
import './App.css'
import {Tiktak} from "../wailsjs/go/main/App"

const App = () =>  {

    const [tik, setTik] = useState("00:00:00")
	let intervalId

	useEffect(() => {
		intervalId = setInterval(() => {
            Tiktak().then(data => setTik(data))
		}, 100)
    	return () => {
	    	clearInterval(intervalId)
	    }
    }, [])

    return (
        <div id="App">
		    <h2>{tik}</h2>
        </div>
    )
}

export default App
