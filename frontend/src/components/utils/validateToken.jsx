async function validateToken(token) {
    try {
      const response = await axios.post('/api/v1/validateToken', { token });
      // Assuming the server returns a status code of 200 for a valid token
      if (response.status === 200) {
        console.log("Token is valid");
        return true;
      } else {
        console.log("Token is invalid");
        return false;
      }
    } catch (error) {
      console.error("Error validating token:", error);
      return false;
    }
  }

  export default validateToken;
  