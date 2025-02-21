const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/projects`;

const index = async () => {
    try {
        const response = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        const projectData = response.json()
        return projectData
    } catch (err) {
        console.log(err)
    }
}

export { index }