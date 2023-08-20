const mongoose = require('mongoose');

mongoose.connect('mongodb://raslen:raslen@mongo:27017', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log(`we re connected! on mongodb://raslen:raslen@mongo:27017` )
});

