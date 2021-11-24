export const showMessage = (req,res)=>{
    res.status(200).send(`Here is the message: ${req.params.message}`)
};