// import React from "react";
// import "./Footer.css";
// import { Container, Grid, IconButton, Typography } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import EmailIcon from "@mui/icons-material/Email";

// const Footer = () => {
//   const whatsappNumber = "917249758447";
//   const whatsappMessage = encodeURIComponent(
//     "Hi Aniket, I checked your portfolio and would like to connect."
//   );

//   return (
//     <footer className="footer">
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center" justifyContent="center">
//           {/* Icons */}
//           <Grid item xs={12} md={6} className="footer-icons">
//             <IconButton
//               href="https://mail.google.com/mail/?view=cm&fs=1&to=aniketjha7249@gmail.com&su=Portfolio%20Enquiry&body=Hi%20Aniket,%0AI%20checked%20your%20portfolio%20and%20would%20like%20to%20connect."
//               target="_blank"
//               aria-label="Email Aniket"
//             >
//               <EmailIcon />
//             </IconButton>

//             <IconButton href="https://github.com/aniketjha437" target="_blank">
//               <GitHubIcon />
//             </IconButton>

//             <IconButton
//               href="https://www.linkedin.com/in/aniketjha437/"
//               target="_blank"
//             >
//               <LinkedInIcon />
//             </IconButton>

//             <IconButton href="https://x.com/aniketjha437" target="_blank">
//               <TwitterIcon />
//             </IconButton>

//             <IconButton
//               href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
//               target="_blank"
//             >
//               <WhatsAppIcon />
//             </IconButton>
//           </Grid>

//           {/* Text */}
//           <Grid item xs={12} md={6} className="footer-text">
//             <Typography variant="body2">Made with ❤️ by Aniket Jha</Typography>
//           </Grid>
//         </Grid>

//         <div className="footer-bottom">
//           © {new Date().getFullYear()} Aniket Jha. All rights reserved.
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const whatsappNumber = "917249758447";
  const whatsappMessage = encodeURIComponent(
    "Hi Aniket, I checked your portfolio and would like to connect."
  );

  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Icons */}
          <Grid size={{ xs: 12, md: 6 }} className="footer-icons">
            <IconButton
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aniketjha7249@gmail.com&su=Portfolio%20Enquiry&body=Hi%20Aniket,%0AI%20checked%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              aria-label="Email Aniket"
            >
              <EmailIcon />
            </IconButton>

            <IconButton href="https://github.com/aniketjha437" target="_blank">
              <GitHubIcon />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/aniketjha437/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton href="https://x.com/aniketjha437" target="_blank">
              <TwitterIcon />
            </IconButton>

            <IconButton
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
            >
              <WhatsAppIcon />
            </IconButton>
          </Grid>

          {/* Text */}
          <Grid size={{ xs: 12, md: 6 }} className="footer-text">
            <Typography variant="body2">Made with ❤️ by Aniket Jha</Typography>
          </Grid>
        </Grid>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Aniket Jha. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
