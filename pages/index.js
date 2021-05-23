import useAuth from '../hooks/useAuth';

export default function Home() {

const { user, signin } = useAuth();
console.log(user)
  return (
    <div >
     <h2> Home -- app > dashboard </h2>      
    
    <button onClick={() => signin()}>Entrar com Github</button>
    
    </div>
  )
}
