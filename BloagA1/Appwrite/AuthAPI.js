import { Client ,Account ,ID } from 'appwrite';  
import { config } from './configuration';		
//  console.log(config)
export class AuthService{
        client = new Client();
        account;
        constructor(){
            this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);   
            this.account=new Account(this.client)
        }

        async createaccount({ username, email, password, dateOfBirth }) {
        console.log(username, email, password, dateOfBirth);

                 try {
        const acc = await this.account.create(ID.unique(), email, password, username);
        if (!acc) throw new Error("Account creation failed");

        const resp = await this.Login({ email, password });

        if (!resp) throw new Error("Login failed after account creation");

        return resp; 
        } catch (error) {
        console.error("Error in createaccount:", error);
        throw error; // Throw error instead of returning it
    }
}


        async Login({ email, password }) {
        try {
        const user = await this.account.createEmailPasswordSession(email, password);

        if (!user) {
            throw new Error("Login failed: No user data returned.");
        }

        console.log("User logged in successfully:", user);
        return user;
        } catch (error) {
        console.error("Error during login:", error);

        // Return a structured error message
        throw new Error(error.response?.data?.message || error.message || "Login failed");
    }
}


        async Logout(){
            try {
            
                const resp=await this.account.deleteSessions()
                console.log(`Delete Response  `, resp)
                return true
                 } catch (error) {
                   console.log(error)
            }
        }


        async getCurrentUser(){
            try {
                
                const user=await this.account.get()
                return user 
            } catch (error) {
                console.log(error) 
                return false
            }
        }


        
        async alldelete(){
          let deletedSessions= await this.account.deleteSessions()
          console.log(deletedSessions)
        }
        
    }

    const authservice=new AuthService()

    export default authservice