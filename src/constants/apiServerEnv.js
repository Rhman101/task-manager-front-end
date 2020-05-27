const apiServerEnv = () => {
    console.log(process.env)
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3002';
    } else if (process.env.NODE_ENV === 'production') {
        return 'https://rhuysen-task-manager-api.herokuapp.com'
    }
}

export default apiServerEnv;