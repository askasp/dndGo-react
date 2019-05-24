import React from 'react';
import './App.css';
import Appbar from './AppBarDark'
import { ThemeProvider } from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles'
import NestedList from './NestedList'
import {useRoutes} from 'hookrouter';


const theme = createMuiTheme({
    palette:{
        collapsible:"#1e1e1e",
        background:"#121212",
        text:{
            primary:"rgba(255,255,255,0.87)",
            secondary:"rgba(255,255,255,0.60)",
            disabled:"rgba(255,255,255,0.38)",
            
        }
    }
}
)

const routes = {
    //'/': () => <div></div> ,
    '/character': () => <NestedList />,
    //'/products': () => <ProductOverview />,
    //'/products/:id': ({id}) => <ProductDetails id={id} />
};

//<NestedList/>

function App() {
    const routeResult = useRoutes(routes);
  return (
      <ThemeProvider theme={theme}>
    <div className="App" style={{backgroundColor:"#121212"}}>
<Appbar/>
<NestedList/>

    </div>
</ThemeProvider>
  );
}

export default App;

const MyApp = () => {
    const routeResult = useRoutes(routes);

    //return routeResult || <NotFoundPage />;
}
