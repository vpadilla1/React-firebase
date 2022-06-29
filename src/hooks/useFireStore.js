import { useState, } from "react"
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import {naoid} from 'naoid'



export const useFirestore = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    
    const userUID = auth.currentUser.uid;

    const getMetas = async () => {
       
        try {
            setLoading(true)
            const dataRet = collection(db, "metas")   
            const q = query(dataRet, where("uid", "==", userUID));

            const queryMetas = await getDocs(q);
            const dataDB = queryMetas.docs.map((doc) => doc.data())
            setData(dataDB);
        } catch (error) {
                console.log(error) 
                setError(error.message)
        } finally {
                setLoading(false)
        }
    } 

    const addData = async (name,cash, date) => {
        try {
            setLoading(true)
            manoid(6)
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false)
        }
    }
    
    return {
        data,
        error,
        loading,
        getMetas,
        addData
        }
}
