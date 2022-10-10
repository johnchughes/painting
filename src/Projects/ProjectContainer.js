const ProjectContainer = (props) => {
    
    const projectList = props.projects.map((x, i) => {
        return (
            <div key={i}>
                <h1>{x.name}</h1>
                <h2>{x.game}</h2>
                <h3>{x.faction}</h3>
                <h3>{x.quality}</h3>
                <p>{x.description}</p>
            </div>
            )
    });

    return <div>{projectList}</div>
}

export default ProjectContainer;