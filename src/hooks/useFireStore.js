import { useState } from "react"
import { collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { auth, db } from "../firebase";




export const useFirestore = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState({})

   

    
    const userUID = auth.currentUser.uid;

    const getMetas = async () => {
       
        try {
            setLoading(prev => ({ ...prev, getMetas: true }))
            const dataRet = collection(db, "metas")   
            const q = query(dataRet, where("uid", "==", userUID));

            const queryMetas = await getDocs(q);
            const dataDB = queryMetas.docs.map((doc) => doc.data())
            setData(dataDB);
        } catch (error) {
                setError(error.message)
        } finally {
            setLoading(prev => ({ ...prev, getMetas: false }))
        }
    } 

    const addData = async (name, cash, dateI, dateF) => {
        
        const ID = name.replace(/ /g, "")
        try {
            setLoading(prev => ({...prev, addData:true}))
            const newData = {
                id: ID,
                name: name,
                cash: cash,
                dateI: dateI,
                dateF: dateF,
                uid: userUID,
                enabled:true
            }
            const docRef = doc(db, "metas", newData.id)
            await setDoc(docRef, newData)
            setData([...data,newData])
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(prev => ({ ...prev, addData: false }))
        }
    } 
    
    const deleData = async (id) => {
        try {
            setLoading(prev => ({ ...prev, deleDAta: true }))
            const docRef = doc(db, "metas", id)
            await deleteDoc(docRef);
            setData(data.filter((item) => item.id !== id));
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(prev => ({ ...prev, deleDAta: false }))
        }
    }


    const updateData = async (id, name, cash, dateI, dateF) => {
        try {
            setLoading(prev => ({ ...prev, updateData: true }))
            const newData = {
                name: name,
                cash: cash,
                dateI: dateI,
                dateF: dateF,
                enabled: true
            }
            const docRef = doc(db, "metas", id)
            await updateDoc(docRef, newData)
             setData(
                data.map((item) =>
                    item.id === id
                        ? {
                            ...item, name: name,
                            cash: cash,
                            dateI: dateI,
                            dateF: dateF, }
                        : item
                )
            ); 
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(prev => ({ ...prev, updateData: false }))
        }
    } 
    return {
        data,
        error,
        loading,
        getMetas,
        addData,
        deleData,
        updateData
        }
}
