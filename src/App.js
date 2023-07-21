import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Routes,Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar"; 
import Dashboard from "./scenes/dashboard";
import Resume from "./scenes/resume";
import Projects from "./scenes/projects";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Reference from "./scenes/reference";
function App() {
  const [theme,colorMode] = useMode();
  return (
    <ColorModeContext.Provider value= {colorMode}>
     <ThemeProvider theme= {theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar/>
        <main className = "content">
          <Topbar />
          <Routes>
            <Route path="/" element ={<Dashboard/>}/>
            {<Route path="/resume" element ={<Resume/>}/>}
            {<Route path="/contacts" element ={<Contacts/>}/>}
            {<Route path="/projects" element ={<Projects/>}/>}
            {<Route path="/form" element ={<Form/>}/>}
            {<Route path="/reference" element ={<Reference/>}/>}
            {<Route path="/pie" element ={<Pie/>}/>}
            {<Route path="/faq" element ={<FAQ/>}/>}
           </Routes>
        </main>
      </div>
     </ThemeProvider>
  </ColorModeContext.Provider>
    
      
  
  );
}


export default App;
