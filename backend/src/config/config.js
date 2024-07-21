const configEnviroments = () => {
    return {
        database: 'database',
        username: 'username',
        password: 'password',
        host: 'localhost',
        dialect: 'sqlite',
        storage: ':memory:'
    }
}

export default configEnviroments