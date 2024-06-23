const checkTokenExpiration = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  const { exp } = JSON.parse(atob(token.split(".")[1])); // Decode payload
  const isExpired = Date.now() >= exp * 1000; // Convert exp to milliseconds and compare

  return isExpired;
};

if (checkTokenExpiration()) {
  localStorage.removeItem("token"); // Remove expired token
  window.location.href = "/login"; // Redirect to login
}

export default checkTokenExpiration;
