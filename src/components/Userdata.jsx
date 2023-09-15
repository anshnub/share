import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react'


const Btn = styled(Button)`
  margin-right: 40px;
`
const Userdata = ({users}) => {
  return (
    <>
        {
            users.map(curuser => {
                const {id,name,email,address} = curuser;

                return (

                  
                     <>

                     
                 

                   








                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{address.city  }, {address.street } ,{address.zipcode  }</td>
                        <td>
                            <Btn variant="contained" >EDIT</Btn>
                            <Btn variant="contained" >DELETE</Btn>
                        </td>
                    </tr>



                    

                    </>
                )
            })
        }
    </>
  )
}

export default Userdata