const express=require('express');
const { AddadClients, FindAlladClients, FindSingleadClient, UpdateadClients, DeleteadClients } = require('../shcemas/try.schema');
const router=express.Router()

/*add clients*/
router.post('/',AddadClients)
/*find all clients*/
router.get('/',FindAlladClients)
/*find single clients*/
router.get('/:id',FindSingleadClient)
/*modify clients*/
router.put('/:id',UpdateadClients)
/*delete clients*/
router.delete('/:id',DeleteadClients)


module.exports=router