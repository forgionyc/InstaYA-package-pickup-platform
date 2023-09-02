import envios from "../model/envios.js";


export const mostrar = async(req, res)=>{
  return res.json({mesage: "muestra de datos protegidos"});
};
//metodos para el crud

//mostrar todos los envios: cada producto esta guardado en un documento
export const getAllEnvios = async (req, res) => {
  try {
    const products = await envios.find();
    res.status(200).json(products);
  } catch (err) {
    res.json({ message: err.message });
  }
};

//mostrar un solo envio
export const getEnvio = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await envios.findById({ _id: id }).then((product) => {
      res.status(200).json(product);
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

//crear un nuevo envio

export const createEnvio = async (req, res) => {
  try {
    await envios.create(req.body);
    res.status(200).json({ message: "¡Envio creado con exito!" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

//Actualizar un envio
export const updateEnvio = async (req, res) => {
  try {
    const id = req.params.id;
    /*await envios.findByIdAndUpdate({_id:id}, req.body).then(res =>{
            console.log(res);
          })*/
    const product = await envios
      .findByIdAndUpdate({ _id: id }, req.body)
      .then((product) => {
        res.status(200).json({product, "message":"¡Envio actualizado con exito!"});
        /*.then((res) => {
        console.log(res);*/
      });
  } catch {
    res.json({ message: err.message });
  }
};

//Eliminar un envio
export const deleteEnvio = async (req, res) => {
  try {
    const id = req.params.id;
    await envios.deleteOne({ _id: id }).then((res) => {
      console.log(res);
    });
    res.status(200).json({ message: "¡Envio eliminado con exito!" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
