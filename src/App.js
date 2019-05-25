import React from 'react';
import './App.css';
import Appbar from './AppBarDark'
import { ThemeProvider } from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles'
import NestedList from './NestedList'
import {useRoutes} from 'hookrouter';
import WelcomeCard from "./WelcomeCard";
import CreateCharacerForm from './CreateCharacterForm'


const theme = createMuiTheme({
    palette:{
        card:"#1e1e1e",
        background:"#121212",
        button:{
            primary:"#bb86fc",
        },
        text:{
            primary:"rgba(255,255,255,0.87)",
            secondary:"rgba(255,255,255,0.60)",
            disabled:"rgba(255,255,255,0.38)",
            
        }
    }
}
)

const routes = {
    '/': () => <WelcomeCard/>,
    '/character': () => <NestedList />,
    '/newcharacter':()=> <CreateCharacerForm/>
    //'/products': () => <ProductOverview />,
    //'/products/:id': ({id}) => <ProductDetails id={id} />
};


//<NestedList/>

function App() {
    const routeResult = useRoutes(routes);
  return (
      <ThemeProvider theme={theme}>
    <div className="App" style={{minHeight:"100vh",backgroundColor:"#121212"}}>
        <Appbar/>
        {routeResult}


    </div>
</ThemeProvider>
  );
}

export default App;

const MyApp = () => {
    const routeResult = useRoutes(routes);

    //return routeResult || <NotFoundPage />;
}
