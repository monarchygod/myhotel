export const showMessage = async (req,res) => {
    res.status(200).send(`Here is the message: ${req.params.message}`)
};

export const register = async (req,res) => {
    console.log(req.body);
};