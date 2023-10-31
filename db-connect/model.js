import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    id: {
        type: 'string',
        require: true,
    },
    itemName: {
        type: 'string',
        require: true,
    },
   
    imageUrl:{
        type:'string',
        require: true,
    },
    itemType:{
        type:"string",
        require:true,
    },
    price:{
        type:"string",
        require:true,
    }
});
 const item = mongoose.model('ItemModel ',itemSchema);



const appUserSchema = new mongoose.Schema({
    id: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true
    },
    role: {
      type: 'string', // admin, management, normal
      required: true
    },
    isVerified: {
      type: 'boolean',
      required: true
    }
  });
  
  const AppUserModel = mongoose.model('app-users', appUserSchema);

  export {
    AppUserModel,

    item 
  }