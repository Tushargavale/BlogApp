 console.log(import.meta.env.VITE_APP_PROJECT_ID)

export const config={
    appwriteURL:import.meta.env.VITE_APP_AUTHWRITE_URL,
    appwriteProjectID:import.meta.env.VITE_APP_PROJECT_ID
}