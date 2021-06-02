
import { Box } from '@chakra-ui/layout';
import Topbar from '../components/Topbar';

function Layout( {children} ){
    const BgColor = '#000';
    return(
      
    <Box bg="BgColor" minH='100vh'>
            <Topbar />            
            Padrão:  {children}
    </Box>
    )
}

export default Layout;