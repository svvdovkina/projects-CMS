import useFetchProjects from './fetchProjects';
//import { useEffect } from 'react';


const Projects = ()=>{

    const {projects, loading} = useFetchProjects();
    
    if (loading) {
        return <section className='projects'>
                <h2>Loading...</h2>
            </section>
    }

    return <section className='projects'>
        {projects.map(pr=>{
            return <div key={pr.id} className="singleProject">
                <a href={pr.url} target="_blank" rel="noreferrer">
                    <img className='project-img' src={pr.image} alt={pr.title} />
                </a>
                <h4>{pr.title}</h4>
            </div>
        })}
    </section>
}

export default Projects