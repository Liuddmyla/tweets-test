import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
    return (<div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',        
      }}>
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="200"
            visible={true}            
       /> 
    </div>            
    )
}