const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/projects`;

const index = async () => {
  try {
    const response = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });

    const projectData = response.json();
    return projectData;

  } catch(err) {
      console.log(err);
  }
};

const create = async (projectFormData) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(projectFormData)
      });

      const newProjectData = await response.json();
      return newProjectData;

    } catch (err) {
        console.log(err)
    }   
};

const updateProject = async (projectFormData, projectId) => {
  try {
    const response = await fetch(`${BASE_URL}/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(projectFormData)
    });

    return response.json();

  } catch(err) {
    console.log(err);
  }
};

const deleteProject = async (projectId) => {
  try {
    const response = await fetch(BASE_URL + `/${projectId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });

    const deletedProject = await response.json();
    return deletedProject;

  } catch(err) {
    console.log(err);
  }
};


export { 
  index, 
  create,
  updateProject, 
  deleteProject,
}