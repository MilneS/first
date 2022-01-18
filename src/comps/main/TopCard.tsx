import Grid from "@mui/material/Grid";
import img1 from "../../utils/2.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const TopCard = () => {
  return (
    <>
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid item xs={6}>
          <img src={img1} alt="" />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: "#F3E4CD",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "600", letterSpacing: "0.8px" }}
          >
            <Box padding={1}>Check out our pastries</Box>
          </Typography>
          <Typography variant="h6" component="h2">
            <Box padding={1}>Which one will you to pick?</Box>
          </Typography>
          <Box padding={2}>
            <Button
              size="large"
              variant="contained"
              disableElevation
              sx={{':hover': {
                backgroundColor: '#000',
                color: 'white',
              },
                backgroundColor: "#FFF8EF",
                color: "#000",
                borderRadius: "0px",
                textTransform: "capitalize",
                fontSize:'16px',
                fontWeight:'600', letterSpacing:"1px"
              }}
            >
              Order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default TopCard;
