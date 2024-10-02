
import './App.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import Post from './components/Post';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();
function App() {
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>BlogPost</h1>
        <Post/>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </>
  )
}

export default App
