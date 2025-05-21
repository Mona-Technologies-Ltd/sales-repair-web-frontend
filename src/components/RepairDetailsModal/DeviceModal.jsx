import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Chip,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
export default function DeviceModal({ isOpen, onClose }) {
  const issues = ["Accidental Damage", "Hardware Damage"];
const [currentSlide, setCurrentSlide] = React.useState(0);
const [selectedCardIndex, setSelectedCardIndex] = React.useState(null);

const repairHistory = [
  {
    issues: ["Accidental Damage", "Hardware Damage"],
    date: "Dec 6, 2024",
  },
  {
    issues: ["Screen Crack", "Battery Issue"],
    date: "Jan 12, 2024",
  },
  {
    issues: ["Camera Fault"],
    date: "Mar 15, 2024",
  },
];


  return (
    // <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
    <Dialog
  open={isOpen}
  onClose={onClose}
  maxWidth={false} // Disable built-in maxWidth
  PaperProps={{
    sx: {
      width: "600px", // or any custom width like '50%', '40vw', etc.
      maxWidth: "90vw", // optional: responsive cap
      borderRadius: 0,
    },
  }}
>

      <DialogTitle sx={{ borderBottom: "1px solid #eee", px: 4, py: 3,borderRadius: 0 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" color="text.secondary">
              Device id: IP12567
            </Typography>
            <Typography variant="h5" fontWeight={600}>
              Iphone
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#E6F7FF",
                color: "#00B2FF",
                width: "fit-content",
                px: 1.5,
                py: 0.5,
                mt: 1,
                borderRadius: 1,
                fontSize: "14px",
              }}
            >
              Device id: IP12567
            </Typography>
          </Box>
         <div>
           <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            style={{
              width: 50,
              height: 50,
              border: "1px solid #00B2FF",
              borderRadius: "50%",
              padding: 8,
            }}
          />
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
         </div>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ px: 4, py: 2 }}>
        {/* Amount, Status, Date */}
       {/* <Grid container spacing={2} mt={2}>
  <Grid item xs={12} md={4}>
    <Box
      sx={{
        background: "#F7F9FC",
        p: 3, // increase padding slightly for a wider feel
        // borderRadius: 2,
        textAlign: "center",
        width:130
      }}
    >
      <Typography color="textSecondary">Amount</Typography>
      <Typography fontWeight="bold" color="#00B2FF">
        ₦25,000.00
      </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} md={4}>
    <Box
      sx={{
        background: "#F7F9FC",
        p: 3,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography color="textSecondary">Status</Typography>
      <Typography
        fontWeight="bold"
        sx={{ color: "#0071E3", background: "#E6F4FF", px: 1 }}
      >
        Approved
      </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} md={4}>
    <Box
      sx={{
        background: "#F7F9FC",
        p: 3,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography color="textSecondary">Date</Typography>
      <Typography fontWeight="bold" color="#00B2FF">
        Dec 6, 2024
      </Typography>
    </Box>
  </Grid>
</Grid> */}
<Box
  sx={{
    display: "flex",
    flexWrap: "wrap", // allows wrapping on smaller screens
    gap: 2,
    mt: 2,
  }}
>
  {["Amount", "Status", "Date"].map((label, idx) => (
    <Box
      key={idx}
      sx={{
        width: {
          xs: "100%",  // 100% width on mobile
          sm: "31%",   // ~1/3 width on tablets and up
        },
        background: "#F7F9FC",
        p: 2,
        // borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography color="textSecondary">{label}</Typography>
      <Typography fontWeight="bold" color="#00B2FF">
        {label === "Amount"
          ? "₦25,000.00"
          : label === "Status"
          ? "Approved"
          : "Dec 6, 2024"}
      </Typography>
    </Box>
  ))}
</Box>


        {/* Issues */}
        <Box mt={3} bgcolor="#DEE7FF59" p={2} borderRadius={2}>
          <Typography fontWeight={600} textAlign={'center'}>Issue(s)</Typography>
          <Box mt={1} display="flex" justifyContent={'center'} gap={1} flexWrap="wrap">
            {issues.map((issue) => (
              <Chip
                key={issue}
                label={issue}
                sx={{ backgroundColor: "#DEE7FF59", color: "#00B2FF", borderRadius:0 }}
              />
            ))}
          </Box>
        </Box>

        {/* Team and Customer Info */}
<Box
  mt={3}
  display="flex"
  width="100%"
  justifyContent="center"
  flexWrap="wrap"
>
  <Box
    width={{ xs: '100%', sm: '50%' }}
    display="flex"
    justifyContent="center"
    mb={2}
  >
    <Card variant="outlined" sx={{ width: '90%', p: 3 }}>
      <Typography variant="body2" color="text.secondary">
        Team member
      </Typography>
      <Typography fontWeight={600}>John Doe</Typography>
      <Typography>Mona Tech</Typography>
    </Card>
  </Box>

  <Box
    width={{ xs: '100%', sm: '50%' }}
    display="flex"
    justifyContent="center"
    mb={2}
  >
    <Card variant="outlined" sx={{ width: '90%', p: 3 }}>
      <Typography variant="body2" color="text.secondary">
        Customer Info
      </Typography>
      <Typography fontWeight={600}>John Doe</Typography>
      <Typography>08143789883</Typography>
    </Card>
  </Box>
</Box>

        {/* Dates */}
        <Box display="flex" justifyContent="space-between" mt={3}>
          <Typography fontWeight={600}>
            Onboarding date:{" "}
            <Box component="span" fontWeight={400}>
              Jan. 22TH 2024
            </Box>
          </Typography>
          <Typography fontWeight={600}>
            ExpiryDate:{" "}
            <Box component="span" fontWeight={400}>
              Dec. 22TH 2024
            </Box>
          </Typography>
        </Box>

        {/* Claims Table */}
        <Box mt={4}>
          <Typography fontWeight={600}>Claims Information</Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Screen Damage</TableCell>
                <TableCell align="right">₦50,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Battery Issue</TableCell>
                <TableCell align="right">₦60,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Total:</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>₦110,000</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>

        {/* General Description */}
        <Box mt={4}>
          <Typography fontWeight={600}>General Description</Typography>
          <Box mt={1} bgcolor="#E6F7FF" p={2} borderRadius={2}>
            <Typography fontWeight={600}>When</Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box mt={1} bgcolor="#E6F7FF" p={2} borderRadius={2}>
            <Typography fontWeight={600}>Where</Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box mt={1} bgcolor="#E6F7FF" p={2} borderRadius={2}>
            <Typography fontWeight={600}>How</Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Box>

        {/* Repair History */}
<Box mt={4}>
  <Typography variant="subtitle1" fontWeight="bold" mb={2}>
    Repair History
  </Typography>

  <Box position="relative" overflow="hidden">
    {/* Back Button for Single Card View */}
    {selectedCardIndex !== null && (
      <IconButton
        onClick={() => setSelectedCardIndex(null)}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 2,
          bgcolor: "white",
          boxShadow: 1,
        }}
      >
        <CloseIcon />
      </IconButton>
    )}

    {/* Navigation Buttons (only when not zoomed in) */}
    {selectedCardIndex === null && (
      <>
        <IconButton
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "white",
            boxShadow: 1,
          }}
          disabled={currentSlide === 0}
        >
          <ChevronLeft />
        </IconButton>

        <IconButton
          onClick={() =>
            setCurrentSlide((prev) =>
              Math.min(prev + 1, repairHistory.length - 2)
            )
          }
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "white",
            boxShadow: 1,
          }}
          disabled={currentSlide >= repairHistory.length - 2}
        >
          <ChevronRight />
        </IconButton>
      </>
    )}

    {/* Carousel Container */}
    <Box sx={{ overflow: "hidden", px: 1 }}>
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform:
            selectedCardIndex !== null
              ? `translateX(-${selectedCardIndex * 100}%)`
              : `translateX(-${currentSlide * (100 / 2 + 2)}%)`,
          width:
            selectedCardIndex !== null
              ? `${repairHistory.length * 100}%`
              : `${(repairHistory.length * 100) / 2}%`,
        }}
      >
        {repairHistory.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex:
                selectedCardIndex !== null
                  ? "0 0 100%"
                  : "0 0 48%",
              maxWidth:
                selectedCardIndex !== null
                  ? "100%"
                  : "48%",
              transition: "all 0.4s ease",
              cursor: "pointer",
            }}
            onClick={() =>
              selectedCardIndex === null
                ? setSelectedCardIndex(index)
                : null
            }
          >
            <Card variant="outlined" sx={{ minHeight: 150 }}>
              <CardContent>
                <Typography variant="body2" color="textSecondary" mb={1}>
                  <strong>Issue(s):</strong>
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  fontWeight="medium"
                  mb={2}
                >
                  {item.issues.join(", ")}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Date:</strong> {item.date}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
</Box>



        {/* <Box mt={4}>
          <Typography fontWeight={600}>Repair History</Typography>
          <Box
            mt={2}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              pb: 1,
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {repairHistory.map((item, idx) => (
              <Card
                key={idx}
                variant="outlined"
                sx={{
                  minWidth: 250,
                  flexShrink: 0,
                  border: "1px solid #B2DDFB",
                  background: "#F9FCFF",
                }}
              >
                <CardContent>
                  <Typography fontSize={14} color="text.secondary">
                    Issue(s)
                  </Typography>
                  <Typography variant="body2">
                    {item.issues.length > 0
                      ? item.issues.join(", ")
                      : "—"}
                  </Typography>
                  <Box mt={1}>
                    <Typography fontSize={14} color="text.secondary">
                      Date
                    </Typography>
                    <Typography variant="body2">
                      {item.date || "—"}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box> */}
        {/* </Box> */}
      </DialogContent>
    </Dialog>
  );
}
