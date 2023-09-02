import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const envioSchema = new Schema(
    {
        fecha:{type:String},
        hora:{type:String},
        estado:{type:String},
        largo:{type:Number},
        alto:{type:Number},
        ancho:{type:Number},
        peso:{type:Number},
        direccion_rec:{type:String},
        ciudad_rec:{type:String},
        nombre_des:{type:String},
        cc_nit_des:{type:Number},
        direccion_ent:{type:String},
        ciudad_ent:{type:String}
    }, {
        versionKey: false,
        timestamps: true
    });

export default mongoose.model('envios', envioSchema);