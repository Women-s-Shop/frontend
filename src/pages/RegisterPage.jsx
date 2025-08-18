import { useState } from "react"
import "../styles/register.css"
import axios from "axios"

const RegisterPage = ({ onNavigateHome }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  })

  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("") // алдыңғы қателерді тазалау

    try {
      // 1. Тіркеу
      await axios.post("http://localhost:8888/register", form)

      // 2. Автоматты түрде login жасап токен алу
      const res = await axios.post("http://localhost:8888/login", {
        email: form.email,
        password: form.password,
      })

      // 3. Токенді сақтау
      localStorage.setItem("token", res.data.token)

      // 4. Навигация + бет жаңарту (қаласаң)
      onNavigateHome()
      window.location.reload()
    } catch (err) {
      console.error(err)
      setError("Қате орын алды. Қайта байқап көріңіз.")
    }
  }

  return (
    <div className="auth-container">
      <h2>Тіркелу</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Аты-жөніңіз"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Құпия сөз"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Телефон"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Мекенжай"
          value={form.address}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}
        <button type="submit">Тіркелу</button>
      </form>
    </div>
  )
}

export default RegisterPage
