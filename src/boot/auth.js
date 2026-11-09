import { useAuthStore } from "@/stores/auth-store";
export default async () =>{
    const auth = useAuthStore()
    await auth.checkAuth()
}