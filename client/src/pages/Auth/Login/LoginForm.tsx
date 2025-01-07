function LoginForm({ onLoginSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const login = async (event) => {
      event.preventDefault();
      try {
        const req = await axios.post("http://localhost:3001/login", {
          email,
          password,
        });
        console.log(req.data);
  
        const { isLoginSuccessful, message } = req.data;
  
        if (isLoginSuccessful) {
          onLoginSuccess(); // Update authentication state
          navigate("/"); // Navigate to the home page
        } else {
          alert(message);
        }
      } catch (error) {
        console.error("Error logging in:", error);
        alert("An error occurred while logging in. Please try again.");
      }
    };
  
    return (
      <form onSubmit={login}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
  
  export default LoginForm;  