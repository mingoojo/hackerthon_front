import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { sendRegister } from "../api/sendRegister";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
    role: "",
    authorityLevel: 0,
    height: 0,
    weight: 0,
    medicalConditions: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRegister(formData);
      console.log("User registered successfully:", response);
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
      // handle error
    }
  };

  return (
    <Container maxWidth="sm">
      <Card variant="outlined" sx={{ mt: 8, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  select
                  label="Role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Authority Level"
                  name="authorityLevel"
                  type="number"
                  value={formData.authorityLevel}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Height (cm)"
                  name="height"
                  type="number"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Weight (kg)"
                  name="weight"
                  type="number"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Medical Conditions"
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  placeholder="e.g., Diabetes, Hypertension"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Register
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
