import {Box, useTheme,Typography} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import Accordionsummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens }  from "../../theme";

const FAQ =() =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title = "FAQ" subtitle="Frequently Asked Questions Page"/>
            <Accordion defaultExpanded>
                <Accordionsummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        An important question
                    </Typography>

                </Accordionsummary>
                <AccordionDetails>
                    <Typography>
                        What is mental health?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <Accordionsummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        An important question
                    </Typography>

                </Accordionsummary>
                <AccordionDetails>
                    <Typography>
                        What is mental health?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <Accordionsummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        important question
                    </Typography>

                </Accordionsummary>
                <AccordionDetails>
                    <Typography>
                        How many people are affected by mental Health
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <Accordionsummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        Another important question
                    </Typography>

                </Accordionsummary>
                <AccordionDetails>
                    <Typography>
                        Is mental health really important?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <Accordionsummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        Random important question
                    </Typography>

                </Accordionsummary>
                <AccordionDetails>
                    <Typography>
                        Does Mental health affect everyone?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <Accordionsummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        Favourite important question
                    </Typography>

                </Accordionsummary>
                <AccordionDetails>
                    <Typography>
                        What is mental health?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );

}
export default FAQ;