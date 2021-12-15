require('dotenv').config();
const   Koa           =   require('koa'),
        bodyParser    =   require('koa-parser'),
        helmet        =   require('koa-helmet'),
        cors          =   require('cors'),
        Port          =   process.env.PORT || 8000,
        app           =   new Koa()
        router        =   require('./routes'),


app.use(cors());
app.use(helmet());
app.use(bodyParser({
	json: ['application/*'],
	text: ['text/*'],
	multipart: ['multipart/*'],
	urlencoded: ['application/*']
}));

//app.use(router.routes())
app.use(async ctx => {
    ctx.body = 'Hello World';
});
app.listen(Port);
console.log(`Server running on ${Port}, visit http://localhost:${Port} to access the application`)