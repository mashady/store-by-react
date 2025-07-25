import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const validate = () => {
    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = ["Email is required"]
    } else if (email.length < 5) {
      newErrors.email = ["Minimum length is 5 characters"]
    } else if (email.length > 50) {
      newErrors.email = ["Maximum length is 50 characters"]
    }

    if (!password.trim()) {
      newErrors.password = ["Password is required"]
    } else if (password.length < 5) {
      newErrors.password = ["Minimum length is 5 characters"]
    } else if (password.length > 50) {
      newErrors.password = ["Maximum length is 50 characters"]
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setServerError("")
    if (!validate()) return

    setLoading(true)

    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setServerError(
          data.detail || "Login failed. Please check your credentials.",
        )
        return
      }

      localStorage.setItem("access", data.access)
      localStorage.setItem("refresh", data.refresh)
      window.location.href = "/"
    } catch (err) {
      setServerError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center my-[4rem] min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-10">Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          {/* Server error */}
          {serverError && (
            <div className="bg-[#f8d7da] border text-lg border-[#f5c6cb] text-[#721c24] w-full rounded-3xl px-4 py-2 mb-4">
              <p>{serverError}</p>
            </div>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525] mt-2"
          />
          {errors.email && (
            <div className="bg-[#f8d7da] border text-lg border-[#f5c6cb] text-[#721c24] w-full rounded-3xl px-4 py-2 mt-2">
              {errors.email.map((err, index) => (
                <p key={index}>{err}</p>
              ))}
            </div>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525] mt-6"
          />
          {errors.password && (
            <div className="bg-[#f8d7da] border text-lg border-[#f5c6cb] text-[#721c24] w-full rounded-3xl px-4 py-2 mt-2">
              {errors.password.map((err, index) => (
                <p key={index}>{err}</p>
              ))}
            </div>
          )}
        </div>

        <div className="w-[450px] mt-2">
          <span className="underline cursor-pointer ml-2">
            forget your password
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="border-2 bg-main text-white rounded-3xl px-6 py-2 text-lg capitalize mt-6 w-[450px] min-h-12"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <span className="underline cursor-pointer mt-4">
        <Link to="/register">create an account</Link>
      </span>
    </div>
  )
}
