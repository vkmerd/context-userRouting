import React from "react";
import { useUserContext } from "../LoginContext";
import {Card, CardContent, Typography} from '@mui/material';


export default function Users(){
    const { user } = useUserContext();

    if (!user) {
        return <div>No user data available</div>;
    }

    return (
       <>
         <Card sx={{ maxWidth: 345, margin: 'auto', mt: 5, boxShadow: 3 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Adı Soyadı: {user.user_name}
                </Typography>
                <Typography variant="h6" color="primary">
                    E-mail Adresi: {user.user_email}
                </Typography>
                <Typography variant="h6" color="primary">
                    Telefon Numarası: {user.user_phone}
                </Typography>
            </CardContent>
        </Card>
      </>
    );
}
