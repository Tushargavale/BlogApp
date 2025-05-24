

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
            console.log(doc)
            return {
                status:true,
            }

          
        } catch (error) {
            console.log('Errorr is ' , error)
            return {
                status:false,
                error:error.message || 'something wend wrong'
            }
        }
    }

    async getAllPost(id){
        try {
        //   const allPost= await  this.databases.listDocuments(config.appwriteDatabaseID,config.appwriteCollectionID,[Query.equal('status',true) ])
            const allPost= await  this.databases.listDocuments(config.appwriteDatabaseID,config.appwriteCollectionID,[Query.or([
  Query.equal('status', true),
  Query.equal('userID', id)
])])
            // console.log(allPost)
            return allPost
       
        } catch (error) {
            console.log(`Error is ${error}  ` )
        }
    }

    async getBlogByID(slug){
        try {
            let Blog=await this.databases.getDocument(config.appwriteDatabaseID,config.appwriteCollectionID,slug)
            return Blog
        } catch (error) {
            console.log(error)
        }
    }


    async deleteBlog(slug){
        try {
            let resp=await this.databases.deleteDocument(config.appwriteDatabaseID,config.appwriteCollectionID,slug)
            console.log(resp)
            return true
        } catch (error) {
            console.log(error)
            return error.message || 'Something Went Wrong'
        }
    }


    async updateBlog({slug,content,title,status,userID}){
        try {
            let response=await this.databases.updateDocument(config.appwriteDatabaseID,config.appwriteCollectionID,slug,{
                content,title,userID,status
            })
            console.log(response)
            return response

        } catch (error) {
            console.log(error)
            return false
        }
    }


}


const blogAPI=new Service()

export default blogAPI



