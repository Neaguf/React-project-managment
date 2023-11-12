import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject(projectData) {
    //primim un obiect din componenta newproject pentru ca am apelat acolo functia cu un parametru
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData, // copy what we got from NewProject as argument(title/descripton/duedate)
        id: projectId,
      };

      return {
        ...prevState, // copy existing state
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects} //sendint state projectsStat.project to manipulate them in ProjectsSidebar
      />
      {content}
    </main>
  );
}

export default App;
