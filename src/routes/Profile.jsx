import { useEffect } from 'react';
import { useFirestore } from '../hooks/useFireStore';
import Sidebar from '../components/Sidebar';

const Profile = () => {
    const { data, error, loading, getMetas } = useFirestore();

    useEffect(() => {
        console.log("getMetas")
        getMetas()
    }, []);

    if (loading) return <p className='m-auto text-6xl'>loading data.....</p>
    if (error) return <p>{error}</p>; 


    return (
        <>
            <Sidebar />
            <div className="  ml-6 mt-9  text-2xl">
                <h1 className="title text-4xl">Perfil</h1>
              
                {
                    
                    data.map(item => (
                        <div className="p-7 border ra w-full bg-white"  key={item.name}>
                            <p className="text-3xl title">{item.name}</p>
                            <p>{item.cash}</p>
                            <p>{item.date}</p>
                        </div>
                    ))
                }
            </div>
        
        </>
    );
};

export default Profile;