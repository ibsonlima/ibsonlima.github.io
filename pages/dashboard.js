import useAuth from './../hooks/useAuth'

function dashboard(){

    const { user } = useAuth(); 
        return( <h1>dashboard: { user?.displayName }</h1>
            
                
            );
}
export default dashboard;