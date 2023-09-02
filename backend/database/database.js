import mongoose from "mongoose"

const conn = async () => {
    try{
        await mongoose.connect(process.env.DB_URI)
            .then(db=> console.log("¡La conexion con mongo fue exitosa!"))
    }catch(error){
        console.log("La conexion falló =>" +  error.message);
    }
};

export default conn;