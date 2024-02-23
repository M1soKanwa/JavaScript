function greeting(user) {
    return `Hello ${'name' in user ? user.name : 'Anonym'}`;
}

const user = {
    name: 'Tommy',
    email: 'chokopai29023@gmail.com'
}