import emails from './../emails/'

const Agenda = require('agenda')


const agenda = new Agenda({db:{address: 'localhost:27017/loja_api', collection: 'jobs'}})


export default () => {

    agenda.define('test', (job, done) => {
        console.log('Hello')
        emails('test@email.com', 'test@email.com', 'Testando 2...', 'Teste 123')        
        done()
    });

    (async function() { // IIFE to give access to async/await
        agenda.on("ready", function () {
            agenda.start();
            console.log("Starting agenda scheduler...")
            agenda.every('30 seconds', 'test')
        })
    
    
    
    })()

}