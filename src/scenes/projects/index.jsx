import{Box,Typography,useTheme} from "@mui/material";
import{DataGrid,} from "@mui/x-data-grid";
import{ tokens} from "../../theme";
import{ mockDataInvoices} from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import StatBox from "../../components/StatBox";
import Stack from "@mui/material/Stack";
import Header from "../../components/Header";

const Projects = () => {
    const theme = useTheme ();
    const colors = tokens(theme.palette.mode);
   return(
    <Box m="20px">
    <Box
    display="grid"
    gridTemplateColumns="repeat(12,1fr)"
    gridAutoRows="200px"
    gap="20px"    
    >
        {/* ROW 1*/}
        <Stack direction="column" spacing={4}>
        <Box
          gridColumn="span3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="centre"
        >
            <StatBox
             title="125"
             subtitle="Email"
             progress="0.75"
             increase="+14%"
             icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />

            
        </Box>
        <Box
          gridColumn="span3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="centre"
        >
            <StatBox
             title="125"
             subtitle="Email"
             progress="0.75"
             increase="+14%"
             icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
       </Box>
       </Stack>
    </Box>
    </Box>


   );



};
export default Projects;