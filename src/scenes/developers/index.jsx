import { useContext } from 'react';
import './developer.css';
import { Box, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordionsummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Resizable } from 'react-resizable';

const Developer = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return(
    <><Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
            color={colors.blueAccent[500]}
        >
            <Typography fontWeight="Bold"
            fontSize="xx-Large"
            >
                Team
            </Typography>
       
        </Box><Box mb="25px" paddingLeft>
                <Box display="flex" justifyContent="left" alignItems="Left">
                    <img
                        alt="profile-user"
                        width="100px"
                        height="100px"
                        src={`../../assets/ferari.jpg`}
                        style={{ cursor: "pointer", borderRadius: "50%" }} />
                </Box>
                <Typography variant="h3" color={colors.grey[100]}>
                Lead Developer
            </Typography>
                <Box textAlign="center" m="5px">
                < Accordion defaultExpanded>
                    <Accordionsummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography
                        variant="h2"
                        color={colors.blueAccent[500]}
                        fontWeight="Medium"
                        fontSize="Medium"
                        sx={{ m: "10px 0 0 0" }}
                    >

                        BRIAN NJUGUNA
                    </Typography>
                    
                    </Accordionsummary>

                    <Resizable
                        width={320}
                        height={200}
                    
                    >
                        <AccordionDetails expandIcon={<ExpandMoreIcon/>}>
                   
                        <Typography variant="h5" 
                        color={colors.greenAccent[500] }
                        textAlign="left"
                        sx={{backgroundColor:"transparent"}}
                        >
                            "As a lead developer, my role is not just to write code, but to inspire and guide my team to create elegant solutions to complex problems. I strive to empower each member to reach their full potential and foster an environment of collaboration, innovation, and continuous learning. Together, we can build software that not only meets the needs of our clients, but exceeds their expectations and makes a positive impact on the world."
                        </Typography>
                    </AccordionDetails>
                    </Resizable>
                    </Accordion>
                    
                    
                </Box>
            </Box></>
    )
        
}
export default Developer;