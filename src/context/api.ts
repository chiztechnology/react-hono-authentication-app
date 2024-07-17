import axios from "axios";

export const signIn_Auth = async (userData: any) => {
    //  const userData = await c.req.json<{ username: string; password: string }>();
    let response = await axios.post(`/auth/login`, userData,
        {
            headers: {
                'Content-Type': 'application/json',
                'x-tenantid': 'SchryverPruebas'
            }
        });

    return response;
}