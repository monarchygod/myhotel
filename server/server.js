require('dotenv').config();
const   Koa           =   require('koa'),
        bodyParser    =   require('koa-parser'),
        helmet        =   require('koa-helmet'),
        cors          =   require('@koa/cors'),
        Port          =   process.env.PORT || 4112,
        app           =   new Koa(),
        router        =   require('./routes');

app.use(cors());
app.use(helmet());
app.use(bodyParser({
	json: ['application/*'],
	text: ['text/*'],
	multipart: ['multipart/*'],
	urlencoded: ['application/*']
}));

app.use(router.routes())
app.listen(Port);
console.log(`Server running on ${Port}, visit http://localhost:${Port} to access the application`)