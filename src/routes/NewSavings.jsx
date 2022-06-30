import Sidebar from './../components/Sidebar';
import { useEffect, useState } from 'react';
import { useFirestore } from './../hooks/useFireStore';
import { async } from '@firebase/util';




function NewSavings() {
    const { data, error, loading, getMetas, addData, updateData, deleData } = useFirestore();
    const [name, setName] = useState('')
    const [cash, setCash] = useState('')
    const [dateI, setDateI] = useState('')
    const [dateF, setDateF] = useState('')
    const [Nid, setNid] = useState()


    useEffect(() => {
        console.log("getMetas")
        getMetas()
    }, []);

    if (loading.getMetas) return <p className='m-auto text-6xl'>loading data.....</p>
    if (error) return <p>{error}</p>;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })
    const handleSubmit = async e => {
        e.preventDefault()        

        await addData(name, cash, dateI, dateF)
        setName('')
        setCash('')
        setDateI('')
        setDateF('')
            
    }

    const handleDelete = async (id) => {
        await deleData(id)
    }

    const handleEdite = (item) => {
        
        setName(item.name)
        setCash(item.cash)
        setDateI(item.dateI)
        setDateF(item.dateF)

        setNid(item.id)
    }

    const handleUpdate = async e => {
        e.preventDefault()
            await updateData(Nid, name, cash, dateI, dateF)
            setNid('')
            setName('')
            setCash('')
            setDateI('')
            setDateF('')
        
        
    }



    return (
        <>
            <Sidebar />
            <div className='w-full'>
                <div className="  mt-9 p-10">

                    <form onSubmit={Nid ? handleUpdate : handleSubmit}>

                        <div className="overflow-x-auto shadow-xl sm:rounded-lg p-10 m-auto w-96 grid gap-6 mb-6 md:grid-cols-2 bg-white">
                            <div>
                                <label  className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Saving name </label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Savings name" value={name}
                                    onChange={e => setName(e.target.value)} required />
                            </div>
                            <div>
                                <label  className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cash</label>
                                <input type="number" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="10,000,000" value={cash}
                                    onChange={e => setCash(e.target.value)} required />
                            </div>
                            <div>
                                <label  className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Start date</label>
                                <input type="date" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={dateI}
                                    onChange={e => setDateI(e.target.value)}
                                    required />
                            </div>
                            <div>
                                <label  className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Final date</label>
                                <input type="date" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={dateF}
                                    onChange={e => setDateF(e.target.value)} required />
                            </div>
                            {
                                Nid ?(
                                    <button type="submit" className="w-full col-span-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update</button>

                                    
                                    ):(
                        
                                        <button type="submit" className="w-full col-span-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg  px-5 py-2.5 text-center">Save</button>
                                    )

                            }
                        </div>


                    </form>
                </div>


                <div className="w-3/5 m-auto">

                    <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Cash
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Start date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Final date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    data.map(item => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={item.id}>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {item.name}
                                            </th>


                                            <td className="px-6 py-4">
                                                {formatter.format(item.cash)}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.dateI}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.dateF}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex space-x-4">

                                                <button type="submit"
                                                    onClick={() => handleDelete(item.id)} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>

                                                </button>

                                                <button type="button"  onClick={() => handleEdite(item)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewSavings