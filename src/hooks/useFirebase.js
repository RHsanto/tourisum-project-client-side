import { getAuth, signInWithPopup, GoogleAuthProvider,signOut ,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializedAuth from "../components/Firebase/Firebase-init";


initializedAuth();

const useFirebase =()=>{

const auth = getAuth();
const [user,setUser]= useState({})
const [isLoading,setIsLoading] = useState(true);

const handleLogIn =()=>{
  setIsLoading(true);
  const GoogleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, GoogleProvider)
 .finally(()=>{
   setIsLoading(false)
 })
}

const logOut = ()=>{
  setIsLoading(true);
  signOut(auth)
  .then(()=>{
    setUser({})
  })
  .finally(()=>{
    setIsLoading(false)
  })
}
 
useEffect(()=>{
  const unsubscribe  =onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } 
      else{
        setUser({})
      }
      setIsLoading(false)
    });
    return unsubscribe;
  },[])

return{
  handleLogIn,
  user,
  logOut,
  isLoading
}

}


export default useFirebase;