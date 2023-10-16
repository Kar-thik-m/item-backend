import express  from "express";
import  {item} from "../db-connect/model.js";
import { v4 } from "uuid";
const itemRouter=express.Router();




itemRouter.post("/create",async(req,res)=>{
   
    try{
     
     const items=new item({...req.body,id:v4});
     await items.save();
         res.send({msg:' created '});
     }catch(err){
         console.log(err);
         res.status(500).send({msg:'Error in creating'})
     }
     });


     itemRouter.get('/electronic', async (req, res) => {
        try {
          
          const products = await itemmodel.find({ itemType: 'Electronic' });
          res.json(products);
        } catch (err) {
          console.error(err);
          res.status(500).send({ msg: 'Error' });
        }
      });



      
  itemRouter.get('/fashion', async (req, res) => {
    try {
      
      const products = await itemmodel.find({ itemType: 'fashion' });
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: 'Error' });
    }
  });


  itemRouter.get('/furnitures', async (req, res) => {
    try {
      
      const products = await itemmodel.find({ itemType: 'furnitures' });
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: 'Error' });
    }
  });

     export default itemRouter;