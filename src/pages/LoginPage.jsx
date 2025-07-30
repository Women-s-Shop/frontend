import { useState } from "react"
import "../styles/login.css"
import axios from "axios"

const LoginPage = ({ onNavigateHome }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8888/api/login", { email, password })
      localStorage.setItem("token", res.data.token)
      onNavigateHome()
      window.location.reload()
    } catch (err) {
      setError("Қате email немесе құпия сөз")
    }
  }

  return (
    <div className="auth-container">
      <h2>Кіру</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Құпия сөз" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="error">{error}</p>}
        <button type="submit">Кіру</button>
      </form>
    </div>
  )
}

export default LoginPage
