import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { useNavigate} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import "./styles.css"



const Dashboard = ({selected,setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const navigateToprojects =() =>{
    navigate('/projects')
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to My Portfolio" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Resume
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
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
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Career Path"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Projects"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            selected={selected}
            setSelected={setSelected}
          >
            <Box
             gridColumn="span 5"
             backgroundColor={colors.primary[600]}
             display="flex"
             alignItems="center"
             justifyContent="center"
            
            >
             <Box display="flex" justifyContent="center" alignItems="center" backgroundColor="#030b1c" boxShadow="inset 5px 5px 10px #000000, 
  inset -5px -5px 10px blue"padding="50px 0px"><Typography>Sample Projects</Typography></Box> 
              <Stack direction="column" spacing={2}>
              <Box display="flex" justifyContent="center" alignItems="center" backgroundColor="#030b1c" boxShadow=" inset 5px 5px 10px #000000, 
  inset -5px -5px 10px blue;">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/youtube.png`}
                  style={{ cursor: "pointer", borderRadius: "20%" }}
                />
                <Box>
                <button 
              backgroundColor="colors.bl"
              style={{cursor:"pointer",backgroundColor:" #525a69, #525a69",color:"#e2726"}}
                 >Youtube Clone
                </button>
                </Box>
              </Box>
              
              
              <Box display="flex" justifyContent="center" alignItems="center" backgroundColor="#030b1c" boxShadow=" 120px 80px 40px 20px #0ff,inset -5px -5px 10px blue ">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/twitter.jpg`}
                  style={{ cursor: "pointer", borderRadius: "20%" }}
                />
                <Box>
                <button variant="outlined"fontSize="14px" fontWeight="bold" padding="10px 20px"
                >Tweepy Bot
                </button>
                </Box>
              </Box>
             
              
              </Stack>
              <Stack  direction="column" spacing={2} color={colors.blueAccent[700]}>
              <Box display="flex" justifyContent="center" alignItems="center" backgroundColor="#030b1c" boxShadow=" inset 5px 5px 10px #000000, 
  inset -5px -5px 10px blue;">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/gym.jpg`}
                  style={{ cursor: "pointer", borderRadius: "20%" }}
                />
                <Box>
                <button variant="outlined"
                fontSize="14px" fontWeight="bold" padding="10px 20px"
                  >Quest GYM
                </button>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center" backgroundColor="#030b1c" boxShadow="inset 5px 5px 10px #000000, 
  inset -5px -5px 10px blue;">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/netflix.png`}
                  style={{ cursor: "pointer", borderRadius: "20%" }}
                />
                <Box color={colors.grey[500]}>
                <button
                variant="outlined"fontSize="14px" fontWeight="bold" padding="10px 20px"boxShadow="inset 5px 5px 10px #000000, 
  inset -5px -5px 10px blue;"
                  >Netflix Clone
                </button>
                </Box>
              </Box>
              </Stack>
           
            </Box>
          </Box>
          
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Projects
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box>

        
          <IconButton
            sx={{
              backgroundColor: colors.grey[900],
              color:colors.greenAccent[500],
              padding: "10px 20px",
            }}
            onClick={navigateToprojects}
          >
            <VisibilityRoundedIcon />
          </IconButton>
        </Box>
            </Box>
          ))}
        </Box>

       
      </Box>
    </Box>
  );
};
export default Dashboard;