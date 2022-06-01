
function Defender(){
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'Center',
          //alignItems: 'Right',
          height: '100vh'
        }}
      >
        <div>
        <iframe title="Defender Table" src="http://127.0.0.1:5000/" width={"1300"} height={"100%"} overflow={"hidden"} frameBorder={0}></iframe>
        </div>
      </div>
      
    );
  };
    
  export default Defender;