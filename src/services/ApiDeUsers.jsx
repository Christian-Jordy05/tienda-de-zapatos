

let PostData = async (inputusers,Inputpassword, Inputgmil) => {
    try {
        const response = await fetch("http://localhost:3001/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: inputusers,
                email:  Inputgmil,
                contraseña: Inputpassword
            })
        });
  
        const data = await response.json();
        return data;
    } catch (error) {
        // console.log(error);
    }
  }

  export default PostData







   export  let  GETdata = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      return data;
    } catch (error) {
      // console.error('Error fetching the API:', error);
      return null;
    }
  }


