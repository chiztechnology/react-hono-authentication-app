import axios from "axios";

export const signIn_Auth = async (userData: any) => {
    let response = await axios.post(`https://7qk9m2xvu2.us-west-2.awsapprunner.com/v1/auth/login`, userData,
        {
            headers: {
                'Content-Type': 'application/json',
                'x-tenantid': 'SchryverPruebas'
            }
        });

    return response;
}