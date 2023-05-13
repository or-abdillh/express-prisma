import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'module-alias/register'
import routes from './routes'

const app = express()
const PORT = 3000 || process.env.port

app.use( cors() )
app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )

routes(app)

const init = async () : Promise<any> => {

    try {
        app.listen(PORT, () => {
            console.log(`🚀 Server ready at port ${ PORT }`)
        })
    } catch(err: any) {
        console.error('Something error was happen !!')
        console.error(err)
        process.exit(1)
    }
}

init()