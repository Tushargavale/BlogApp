

import { Client, ID, Databases, Storage, Query } from "appwrite";
import { config } from "./configuration";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(config.appwriteURL)
        .setProject(config.appwriteProjectID);
        this.databases = new Databases(this.client);
        // this.bucket = new Storage(this.client);
    }


    async createPost({title,slug,content,userID,status=true}){
        try {
            console.log(config.appwriteDatabaseID,config.appwriteCollectionID,slug)
            let doc=await this.databases.createDocument(config.appwriteDatabaseID,config.appwriteCollectionID,slug,{
                title,content,userID,status
            })

            return doc

            console.log(doc)
        } catch (error) {
            console.log('Errorr is ' , error)
        }
    }

    async getAllPost(){
        try {
          const allPost= await  this.databases.listDocuments(config.appwriteDatabaseID,config.appwriteCollectionID,[Query.equal('status',true)])
            console.log(allPost)
       
        } catch (error) {
            console.log(`Error is ${error}  ` )
        }
    }


}


const blogAPI=new Service()

export default blogAPI



