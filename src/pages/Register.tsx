import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useState } from "react"

export default function Register() {
  const [serverErrors, setServerErrors] = useState({})

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      repassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone_number: Yup.string().required("Phone number is required"),
      password: Yup.string().required("Password is required"),
      repassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Re-entering password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setServerErrors({})
      try {
        await axios.post("http://localhost:8000/api/auth/register/", values)
        // redirect to login
        window.location.href = "/login"
      } catch (err) {
        if (err.response && err.response.data) {
          setServerErrors(err.response.data)
        } else {
          console.log("Something went wrong!")
        }
      } finally {
        setSubmitting(false)
      }
    },
  })

  const inputClass =
    "border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525] mt-6"

  return (
    <div className="flex flex-col justify-center items-center my-[4rem] min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-10">Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={inputClass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-500 text-sm">{formik.errors.name}</span>
          )}
          {serverErrors.name && (
            <span className="text-red-500 text-sm">{serverErrors.name[0]}</span>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={inputClass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm">{formik.errors.email}</span>
          )}
          {serverErrors.email && (
            <span className="text-red-500 text-sm">
              {serverErrors.email[0]}
            </span>
          )}

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={inputClass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="text-red-500 text-sm">
              {formik.errors.password}
            </span>
          )}
          {serverErrors.password && (
            <span className="text-red-500 text-sm">
              {serverErrors.password[0]}
            </span>
          )}

          {/* Re-Password */}
          <input
            type="password"
            name="repassword"
            placeholder="Re-enter Password"
            className={inputClass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repassword}
          />
          {formik.touched.repassword && formik.errors.repassword && (
            <span className="text-red-500 text-sm">
              {formik.errors.repassword}
            </span>
          )}
          {serverErrors.repassword && (
            <span className="text-red-500 text-sm">
              {serverErrors.repassword[0]}
            </span>
          )}

          {/* Phone Number */}
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            className={inputClass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone_number}
          />
          {formik.touched.phone_number && formik.errors.phone_number && (
            <span className="text-red-500 text-sm">
              {formik.errors.phone_number}
            </span>
          )}
          {serverErrors.phone_number && (
            <span className="text-red-500 text-sm">
              {serverErrors.phone_number[0]}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="border-2 bg-main text-white rounded-3xl px-6 py-2 text-lg capitalize mt-6 w-[450px] min-h-12 flex justify-center items-center gap-2"
        >
          {formik.isSubmitting ? (
            <>
              <span>Registering...</span>
              <div className="loading-icon">
                <i className="fa fa-spinner fa-spin"></i>
              </div>
            </>
          ) : (
            <span>Register</span>
          )}
        </button>
      </form>
    </div>
  )
}
