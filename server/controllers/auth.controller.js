
module.exports = {
    async register(ctx){
        try {
            console.log(ctx.request.body);
            ctx.type = 'json'
            ctx.status = 200
            ctx.body = {
                success: true
            }
        } catch (error) {
            ctx.type = 'json'
            ctx.status = error.response.status || 500
            ctx.body = {
                success: false,
                message: error.message
            }
        }
    } 
}