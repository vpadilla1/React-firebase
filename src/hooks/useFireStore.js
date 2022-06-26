import { useEffect, useState, } from "react"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { doc } from "firebase/firestore/lite";

export const useFirestore = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log("getMetas")
        getMetas()
    }, []);

    const getMetas = async () => {
        try {
            setLoading(true)
            const queryMetas = await getDocs(collection(db, "metas"));
            const dataDB = queryMetas.docs.map((doc) => doc.data())
            setData(dataDB);
        } catch (error) {
                console.log(error) 
                setError(error.message)
        } finally {
                setLoading(false)
        }
    } 
    
    return {
        data,
        error,
        loading
        }
}
