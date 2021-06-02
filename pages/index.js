import { Box, Heading } from '@chakra-ui/layout';
import useAuth from '../hooks/useAuth';
import Layout from 'src/components/Layout'


export default function Home() {

//const { user, signin } = useAuth();  <button onClick={() => signin()}>Entrar com Github</button>

  return (
    <Layout>
        <Heading as="h2" size="3xl" isTruncated>
        {/* <h2> Home -- app  dashboard </h2>       */}
        </Heading>
    </Layout>
  )
}


