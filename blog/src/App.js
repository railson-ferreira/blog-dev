import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient , InMemoryCache} from '@apollo/client';
import Posts from './Posts';
import Profile from "./Profile";
//import 'react-bootstrap';

const client = new ApolloClient({
  uri: "http://localhost:8000/?graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="p-5">
        <Profile/>
        <Posts />
      </div>
    </ApolloProvider>
  );
}

export default App;
