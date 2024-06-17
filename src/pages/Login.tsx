import React from "react";
import { FormControl, Input, Button, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../LoginContext";

type formData = {
    user_name: string,
    user_email: string,
    user_phone: string,
    user_pass: string
}

export default function Login() {
    const [formState, setFormState] = useState<formData>({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_pass: ''
    });
    const [buttonState, setButtonState] = useState(false);
    const { setUser } = useUserContext();
    const navigate = useNavigate();

    const saveForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formDataEntries = Object.fromEntries(formData.entries()) as unknown as formData;
        setFormState(formDataEntries);
        setButtonState(true);
    };

    const routeUsers = () => {
        setUser(formState);
        navigate('/users');
    };

    return (
        <>
            <Box style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '50px' }}>
                <form onSubmit={saveForm} style={{ gap: '20px', width: '1200px', display: 'flex', flexDirection: 'column' }}>
                    <FormControl>
                        <Input type="text" name="user_name" placeholder="Adınız Soyadınız" />
                    </FormControl>
                    <FormControl>
                        <Input type="text" name="user_email" placeholder="E-mail Adresiniz" />
                    </FormControl>
                    <FormControl>
                        <Input type="number" name="user_phone" placeholder="Telefon Numaranız" />
                    </FormControl>
                    <FormControl>
                        <Input type="password" name="user_pass" placeholder="Şifreniz" />
                    </FormControl>
                    <Button type="submit" variant="outlined">Gönder</Button>
                </form>
            </Box>

            <Box style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '50px' }}>
                <ul style={{ gap: '20px', width: '1200px', display: 'flex', flexDirection: 'column' }}>
                    {Object.entries(formState).map(([key, value]) => (
                        <li key={key}>{key}: {value as string}</li>
                    ))}
                    <Button variant={buttonState ? "contained" : "disabled"} onClick={routeUsers}>Kaydet</Button>
                </ul>
            </Box>
        </>
    );
}