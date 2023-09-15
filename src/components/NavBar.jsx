import React, { useState } from 'react'
import {AppBar, Toolbar,styled,Button, Dialog, DialogTitle, DialogContent,DialogActions, Stack, TextField} from '@mui/material';


const Header = styled(AppBar)`
  background: pink;
`
const Btn = styled(Button)`
 margin-left:220px;
`



const NavBar = () => {

    const [open,setOpen] = useState(false);

    const Opnbtn = () =>{
        
        setOpen(true);
    }

    const Closebtn = () =>{
        alert("USER ADDED SUCCESSFULLY")
        setOpen(false);
    }

    const Closebtns = () =>{
        setOpen(false);
    }
      

  return (
   

    
    <Header position='static' >
    
        <Toolbar>
        <Btn onClick={Opnbtn} variant='contained'  >ADD USER</Btn>
        
        <Dialog open={open} onClose={Closebtn} fullWidth maxWidth="md" >
            <DialogTitle variant='contained'>Add User Screen</DialogTitle>
            <Stack spacing={2} margin={2} >
              <TextField variant="outlined" label="Id">Id</TextField>
              <TextField variant="outlined" label="Name">Name</TextField>
              <TextField variant="outlined" label="E-mail">E-mail</TextField>
              <TextField variant="outlined" label="Address">Address</TextField>

            </Stack>
            <DialogActions>
                <Btn onClick={Closebtn} color="success" variant='contained'> Submit </Btn>
                <Btn onClick={Closebtns} color="error" variant='contained' >Close</Btn>
            </DialogActions>
        </Dialog>

        </Toolbar>
    </Header>
    
  )
}

export default NavBar