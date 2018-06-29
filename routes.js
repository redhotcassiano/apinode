import hello from './hello/'
import bills from './bills/'
import products from './produtcs/'


export default(app) => {
    app.use('/', hello)
    app.use('/bills', bills)
    app.use('/products', products)
}