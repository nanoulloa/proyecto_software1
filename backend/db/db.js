const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://kjimenezm:5GGQSqRw5sBSya0h@cluster0.dhz40my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB_URL,{})

    .then(db => console.log("se conecto la base de datos"))
    .catch(err => console.log("error"))

//update de usuario

//  const actualizar = async(id)=>{
//     await usuarioModel.updateOne({_id:id},
//          {
//            $set:{
//             nombre: "",
//             correo:"",
//             password: "",
//             telefono: "",
//             canton: "",
//             distrito: "",
//             direccion: "",
//             rol: "",
//             }
//         }
//     );
//     }
//     actualizar("64b0f3a2c4d5e1f8b8c4d5e1").then(()=>console.log("se actualizo el usuario")).catch(err=>console.log(err))
    