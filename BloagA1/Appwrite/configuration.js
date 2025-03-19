 console.log(import.meta.env.VITE_APP_PROJECT_ID)

export const config={
    appwriteURL:import.meta.VITE_APP_PROJECT_ID,
    appwriteProjectID:import.meta.VITE_APP_PROJECT_ID
}