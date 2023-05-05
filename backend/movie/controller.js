const Model=require('./model.js');

module.exports.getMovie=async(req,res)=>{
    const mov=await Model.find({})
    res.send(mov)
}
module.exports.saveMovie= async(req,res)=>{
    const {name,posterurl,description,rating}=req.body
    Model.create({name,posterurl,description,rating})
    .then((data)=>{
        console.log("addes succefully")
        console.log(data)
        res.send(data)
    })  
}
module.exports.UpdateMovie= async(req,res)=>{
    const {_id,name,posterurl,description,rating}=req.body
    const {id} = req.params

    Model.findByIdAndUpdate(id,{name,posterurl,description,rating})
    .then(()=> res.send("Updated succefully"))
    .catch((err)=>console.log(err))  
    };

  module.exports.deleteMovie =  async(req,res)=>{
    const {id}=req.params
    console.log(id)

    Model.findByIdAndDelete(id)
    .then(()=> res.send("deleted succefully"))
    .catch((err)=>console.log(err))  
    };
  
  