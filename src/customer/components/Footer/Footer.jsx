import { Button, Grid, Typography } from "@mui/material";
function Footer() {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Careers
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Contact
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Marketing
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Analitics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              API Status
            </Button>
          </div>
          
        </Grid>
        <Grid item xs={12} sm={6} md={3}
            >
                <Typography className='pb-5'  variant='h6'>Legal</Typography>
                <div>
                <Button className='pb-5'  variant='h6'>Claims</Button>
                </div>
                <div>
                <Button className='pb-5'  variant='h6'>Privacy</Button>
                </div>
                <div>
                <Button className='pb-5'  variant='h6'>Terms</Button>
                </div>
        </Grid>
        <Grid className="pt-20"  item xs={12}>
            <Typography variant='body2'>© 2024 Company. All rights reserved</Typography>
            <Typography variant='body2'>Made with ❤️ in Perú</Typography>
            <Typography variant='body2'>Privacy Policy</Typography>
            <Typography variant='body2'>Terms of Service</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
