import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Stack,
  TextField,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import { login } from "../actions/UserAction";
import { useNavigate } from "react-router-dom";
import SnackbarMessage from "../components/SnackbarMessage";
import Logo from "../assets/logo.png";
import { KeyRounded, CloseRounded } from "@mui/icons-material";
import ModalComponent from "../components/ModalComponent";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [err, setErr] = useState(null);
  const [succeed, setSucceed] = useState(null);

  const [snackbarSuccess, setSnackBarSuccess] = useState(false);
  const [snackbarError, setSnackBarError] = useState(false);

  const handleSnackbarOpenSuccess = () => {
    setSnackBarSuccess(true);
  };

  const handleSnackbarOpenError = () => {
    setSnackBarError(true);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    login(
      username,
      password,
      navigate,
      setErr,
      setSucceed,
      handleSnackbarOpenSuccess,
      handleSnackbarOpenError
    );
  };
  return (
    <Fragment>
      <SnackbarMessage
        message={err}
        open={snackbarError}
        handleClose={setSnackBarError}
        severity='error'
      />
      <SnackbarMessage
        message={succeed}
        open={snackbarSuccess}
        handleClose={setSnackBarSuccess}
        severity='success'
      />

      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 0,
          background: "transparent",
          height: "100vh",
        }}>
        <ModalComponent open={open} mdWidth={800}>
          <Stack direction='row-reverse'>
            <IconButton onClick={handleClose}>
              <CloseRounded />
            </IconButton>
          </Stack>
          <Typography
            sx={{ color: "#1565C0" }}
            textAlign='center'
            mt={2}
            mb={2}
            variant='body1'
            fontWeight={600}>
            Note:{" "}
            <span style={{ fontSize: "15px", color: "#000" }}>
              {" "}
              Copy this credential for testing purposes{" "}
            </span>
          </Typography>

          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'>
            <Box>
              <Typography
                mb={1}
                variant='body1'
                sx={{ fontWeight: 600, color: "#1565C0" }}>
                ADMIN
              </Typography>
              <Stack spacing={0.5}>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    username:
                  </Typography>
                  <Typography variant='body2'>admin</Typography>
                </Stack>

                <Stack direction='row' alignItems='center' spacing={2}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    Password:
                  </Typography>
                  <Typography variant='body2'>admin</Typography>
                </Stack>
              </Stack>

              <Typography
                mb={1}
                mt={1}
                variant='body1'
                sx={{ fontWeight: 600, color: "#1565C0" }}>
                NURSE
              </Typography>
              <Stack spacing={0.5}>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    username:
                  </Typography>
                  <Typography variant='body2'>nurse</Typography>
                </Stack>
                <Stack direction='row' alignItems='center' spacing={2}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    Password:
                  </Typography>
                  <Typography variant='body2'>nurse</Typography>
                </Stack>
              </Stack>

              <Typography
                mb={1}
                mt={1}
                variant='body1'
                sx={{ fontWeight: 600, color: "#1565C0" }}>
                LAB PERSONNEL
              </Typography>
              <Stack spacing={0.5}>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    username:
                  </Typography>
                  <Typography variant='body2'>labpersonnel</Typography>
                </Stack>

                <Stack direction='row' alignItems='center' spacing={2}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    Password:
                  </Typography>
                  <Typography variant='body2'>labpersonnel</Typography>
                </Stack>
              </Stack>
            </Box>

            <Box>
              <Typography
                mb={1}
                mt={1}
                variant='body1'
                sx={{ fontWeight: 600, color: "#1565C0" }}>
                PHARMACIST
              </Typography>
              <Stack spacing={0.5}>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    username:
                  </Typography>
                  <Typography variant='body2'>pharmacist</Typography>
                </Stack>

                <Stack direction='row' alignItems='center' spacing={2}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    Password:
                  </Typography>
                  <Typography variant='body2'>pharmacist</Typography>
                </Stack>
              </Stack>

              <Typography
                mt={1}
                mb={1}
                variant='body1'
                sx={{ fontWeight: 600, color: "#1565C0" }}>
                RADIOLOGIST
              </Typography>
              <Stack spacing={0.5}>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    username:
                  </Typography>
                  <Typography variant='body2'>radiologist</Typography>
                </Stack>

                <Stack direction='row' alignItems='center' spacing={2}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    Password:
                  </Typography>
                  <Typography variant='body2'>radiologist</Typography>
                </Stack>
              </Stack>

              <Typography
                mt={1}
                mb={1}
                variant='body1'
                sx={{ fontWeight: 600, color: "#1565C0" }}>
                BILLING
              </Typography>
              <Stack spacing={0.5}>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    username:
                  </Typography>
                  <Typography variant='body2'>accountant</Typography>
                </Stack>

                <Stack direction='row' alignItems='center' spacing={2}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: "#1565C0" }}>
                    Password:
                  </Typography>
                  <Typography variant='body2'>accountant</Typography>
                </Stack>
              </Stack>
            </Box>
            {/* LEFT SECTION
             */}
          </Stack>

          {/* <Stack spacing={1}>
            <Stack spacing={1}>
              <Typography
                variant='body1'
                sx={{ fontWeight: 600, color: "#1565C0" }}>
                ADMIN
              </Typography>
              <Stack direction='row' alignItems='center' spacing={1.5}>
                <Typography
                  variant='body2'
                  sx={{ fontWeight: 600, color: "#1565C0" }}>
                  Username:
                </Typography>
                <Typography variant='body2'>admin</Typography>
              </Stack>
              <Stack direction='row' alignItems='center' spacing={2}>
                <Typography
                  variant='body2'
                  sx={{ fontWeight: 600, color: "#1565C0" }}>
                  Password:
                </Typography>
                <Typography variant='body2'>admin</Typography>
              </Stack>
            </Stack>

            <Stack spacing={1}>
              <Typography
                variant='body1'
                sx={{ fontWeight: 600, color: "#1565C0" }}>
                NURSE
              </Typography>
              <Stack direction='row' alignItems='center' spacing={1.5}>
                <Typography
                  variant='body2'
                  sx={{ fontWeight: 600, color: "#1565C0" }}>
                  Username:
                </Typography>
                <Typography variant='body2'>nurse</Typography>
              </Stack>
              <Stack direction='row' alignItems='center' spacing={2}>
                <Typography
                  variant='body2'
                  sx={{ fontWeight: 600, color: "#1565C0" }}>
                  Password:
                </Typography>
                <Typography variant='body2'>nurse</Typography>
              </Stack>
            </Stack>
          </Stack> */}
        </ModalComponent>
        <Card
          elevation={0}
          component='form'
          onSubmit={loginSubmit}
          sx={{
            width: { xs: "100%", md: 500 },
          }}>
          <Card
            sx={{
              position: "relative",
              p: 5,
              m: 2,
            }}>
            <Box sx={{ position: "absolute", right: 2, top: 2 }}>
              <Tooltip title='Open to show a given credential'>
                <IconButton onClick={handleOpen}>
                  <KeyRounded sx={{ color: "#1565C0" }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Stack justifyContent='center' alignItems='center'>
              <img
                src={Logo}
                style={{ width: "200px", objectFit: "contain" }}
                alt='logo'
              />
            </Stack>
            <Stack spacing={2} mt={3} mb={2}>
              <TextField
                required
                label='Username'
                type='text'
                name='username'
                id='username'
                autoComplete='username'
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                required
                label='Password'
                type='password'
                name='password'
                id='password'
                autoComplete='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
            <Stack spacing={2}>
              <Button
                id='login'
                sx={{ textTransform: "capitalize", boxShadow: 0 }}
                className='btn-bg'
                fullWidth
                variant='contained'
                type='submit'>
                Login
              </Button>
            </Stack>
          </Card>
        </Card>
      </Card>
    </Fragment>
  );
};

export default Login;
