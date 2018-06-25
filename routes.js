import hello from './hello/'
import bills from './bills/'


export default(app) => {
    app.use('/', hello)
    app.use('/bills', bills)
}