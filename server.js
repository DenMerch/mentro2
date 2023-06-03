const app = require('./app')
const mongoConnect = require("./db/conection")
const { PORT } = process.env;

const startServer = async () => {
  try {
    await mongoConnect()
    app.listen(PORT, (error) => {
      if (error) {
        console.log('Server connection error');
      }
      console.log(`Server startde on port ${PORT}`);
    })
  } catch (error) {
    console.log(error);

  }
}
startServer()