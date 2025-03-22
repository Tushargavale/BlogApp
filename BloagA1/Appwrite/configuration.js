 console.log(import.meta.env.VITE_APP_PROJECT_ID)

export const config={
    appwriteURL:import.meta.env.VITE_APP_AUTHWRITE_URL,
    appwriteProjectID:import.meta.env.VITE_APP_PROJECT_ID,
    appwriteDatabaseID:import.meta.env.VITE_APP_DATABASE_ID,
    appwriteCollectionID:import.meta.env.VITE_APP_COLLECTION_ID,
}