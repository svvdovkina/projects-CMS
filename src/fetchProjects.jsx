import {createClient} from 'contentful'
import { useEffect } from 'react';
import { useState } from 'react';

const client = createClient({
    space: 'my79qd6zylvj',
    environment: 'master', // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_API_KEY
  });

const useFetchProjects = ()=>{
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async ()=>{
        try {
            const response = await client.getEntries({content_type: 'projects'});
            const data = response.items.map(it=>{
                const title = it.fields.title;
                const url = it.fields.url;
                const image = it.fields.image.fields.file.url;
                const id = it.sys.id;
                return {id, title, url, image}
            });
            setProjects(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        getData();
        
    },[])

    return {projects, loading}
}

export default useFetchProjects