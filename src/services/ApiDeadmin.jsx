export  let  GETAdmin = async () => {
    try {
      const response = await fetch("http://localhost:3001/admin");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching the API:', error);
      return null;
    }
  }
