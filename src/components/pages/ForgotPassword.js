import React, { useState } from 'react'
import Navbar from '../Navbar'
import { Button, TextField, Typography } from '@mui/material';

const ForgotPassword = () => {
    const [password, setPassword] = useState("")
    const handleSubmit = () => {
    console.log("teste")
    }

    const handleChangeText = (event) => {
        setPassword(event.target.value)
    }

    console.log(password)

    return (
      <div       style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

      }}> 
        <Navbar />
        <form style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: 400,
                    minWidth: 400,
                    marginTop: "100px",
                    marginBottom: 16,
                    padding: 8,
                    /* border: "1px solid #1976d2", */
                    borderRadius: 4,
                    zIndex: 1,
            
                    background: "linear-gradient(45deg, #bdc3c7 10%, #ffff 90%)",
        }}>
            <Typography variant='h6' style={{margin: "10px"}}>Digite sua nova senha</Typography>
          <TextField
            label="Nova senha"
            name="senha"
            onChange={handleChangeText}
            fullWidth
            margin="normal"
            type='password'
          />
          <Button type="submit" variant="contained" color="primary" style={{margin: "10px"}} disabled={password.length > 0 ? false : true}>
            Salvar
          </Button>
        </form>
      </div>
    );
  };

export default ForgotPassword