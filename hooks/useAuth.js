import { useContext } from "react"
import AuthContexts from "../contexts/AuthContexts"

const useAuth = () => useContext(AuthContexts)

export default useAuth;