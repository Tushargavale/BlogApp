import { Client ,Account ,ID } from 'appwrite';  
import { config } from './configuration';		
 
export class AuthService{
        client = new Client();
        account;
        constructor(){
            this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);   
            this.account=new Account(this.client)
        }

        async createaccount({username,email,password}){
            console.log(username,email,password)
                try {
                    const acc=await this.account.create(ID.unique(),email,password,username)
                    const resp=await this.Login({email,password})
                    console.log(resp)
                   if(resp) 
                   return resp
                   else
                   return false
                } catch (error) {
                    console.log(error)
                }
        }


        async Login({email,password}){
            try {
                const user=await this.account.createEmailPasswordSession(email,password)
                console.log(user)
                if(user)
                {
                    return user
                }
            } catch (error) {
                console.log(error)
                return false
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