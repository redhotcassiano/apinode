const Agenda = require('agenda')

const agenda = new Agenda({db:{address: 'localhost:27017/loja_api', collection: 'jobs'}})


export default () => {

    agenda.define('test', (job, done) => {
        console.log('Hello')        
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