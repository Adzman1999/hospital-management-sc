import { Button, Card, Fade, Modal } from "@mui/material";
import React, { useState } from "react";

const PatientMedicalPdfView = ({ att }) => {
  const [open, setOpen] = useState(false);
  const handleOpenPdf = () => {
    setOpen(true);
  };
  const handleClosePdf = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={handleOpenPdf}
        variant='outlined'
        size='small'
        sx={{ textTransform: "capitalize" }}>
        View
      </Button>

      <Modal
        onClose={handleClosePdf}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(13px)",
        }}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Card
            elevation={3}
            sx={{
              width: { xs: "100%", md: "650px" },
              boxShadow: 0,
              background: "transparent",
              zIndex: 2000,
            }}>
            <object
              data={att.file}
              style={{
                width: "650px",
                height: "650px",
              }}
            />
          </Card>
        </Fade>
      </Modal>
    </>
  );
};

export default PatientMedicalPdfView;
