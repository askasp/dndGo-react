import React from 'react';
import './App.css';
import Appbar from './AppBarDark'
import { ThemeProvider } from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles'
import NestedList from './NestedList'
import {useRoutes} from 'hookrouter';
import WelcomeCard from "./WelcomeCard";
import CreateCharacerForm from './CreateCharacterForm'
import myData from './5e-SRD-Classes'
import {useState} from 'react';

const theme = createMuiTheme({

    errorColor:"#cf6679",
    palette:{
        card:"#1e1e1e",
        focus:"#2d2d2d",
        background:"#121212",
        button:{
            primary:"#bb86fc",
            secondary:"#03DAC5",
        },
        text:{
            primary:"rgba(255,255,255,0.87)",
            secondary:"rgba(255,255,255,0.60)",
            disabled:"rgba(255,255,255,0.38)",
            
        }
    }
}
)


//<NestedList/>

function is_server() {
    return ! (typeof window != 'undefined' && window.document);
}
function App() {
    const bla = [{
        race:"hei",
        jada:"jad",
    }]
    const blas = [{
        race:"hei2",
        jada:"jad",
    }]
    const [name, setName] = useLocalStorage('names', []);
    const routes = {
        '/': () => <WelcomeCard/>,
        '/character': () => <NestedList />,
        '/newcharacter':()=> <CreateCharacerForm characters={name} setCharacters={setName}/>
        //'/products': () => <ProductOverview />,
        //'/products/:id': ({id}) => <ProductDetails id={id} />
    };
    const routeResult = useRoutes(routes);

   // const [characters,setCharacters] = useLocalStorage("characters",[])
    //setCharacters(bla);
    const TestComp = (props) => {
        console.log(props)
        return <div> hei</div>
    }

    return (
      <div>
          <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
          />
      <ThemeProvider theme={theme}>
    <div className="App" style={{minHeight:"100vh",backgroundColor:"#121212"}}>
        <Appbar/>
        {routeResult}
       <TestComp jada={name}/>

    </div>
</ThemeProvider>
      </div>
  );
}

export default App;

export function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue];
}
