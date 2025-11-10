import server from './app'
import './databaseMongo'

server.listen(3000, () => {
  console.log('Server started on port ' + 3000);
});