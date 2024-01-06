import mongoose from 'mongoose';
import validator from 'validator';


const User1 = mongoose.model ('User1',{

    name :{
       type: String,
       required: true,
       trim: true
    },
    email:{
       type: String,
       trim: true,
       lowercase:true,
       required: true,
       validate(value){
           if (!validator.isEmail(value)){
               throw new Error ('Email is invalid')
           }
       }
    },
    password:{
       type: String,
       required: true,
       minLength: 8,
       trim :true,
       validate(value){
   if (value.toLowerCase().includes('password')){
       throw new Error('password cannot contain "password')
   }
       }
   
    },
    age:{
      type: Number,
      default:0,
      validate(value){
   if(value<0){
       throw new Error ('Age must be  apositive number')
   }
      }
    }
   })
   
//    const me = new User1({
//        name: '      Eman',
//        email: 'TTemail@gmail.com',
//        password: '    3288888883ed  '
//    })
//    me.save().then(()=>{
//    console.log(me)
//    }).catch((error)=>{
//        console.log('Error', error)
//    })
   
   
   // const data = mongoose.model('data',{
   
   //     description:{
   //         type: String
   //         },
       
   //     completed:{
   //        type: Boolean
   //     }
   
   // })
   
   // const you = new data({
   //     description: 'hes okay i guess',
   //     completed: false    
   // })
   
   // you.save().then(()=>
   // {
   //     console.log(you)
   // }).catch((error)=>{
   //     console.log('Error', error)
   // })

   export default User1;
