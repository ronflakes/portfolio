import React, { useState, useEffect } from 'react'

// Simple client-side password gate. Not secure for protecting sensitive content
// (password lives in the built JS). Useful for light gating on static sites.
export default function PasswordGate({ children }) {
  const [authorized, setAuthorized] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    try {
      const ok = sessionStorage.getItem('portfolio_auth') === 'true'
      if (ok) setAuthorized(true)
    } catch (e) {
      // ignore
    }
  }, [])

  const PASSWORD = '000' // provided by owner

  const submit = (e) => {
    e.preventDefault()
    if (value === PASSWORD) {
      try { sessionStorage.setItem('portfolio_auth', 'true') } catch (e) {}
      setAuthorized(true)
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  if (authorized) return children

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 text-white">
      <div className="w-full max-w-md mx-4 bg-white/5 p-8 rounded-md backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Enter password to proceed</h2>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="p-3 rounded bg-white/10 border border-white/20 text-white outline-none"
            placeholder="Password"
            autoFocus
          />
          <button className="px-4 py-2 bg-white text-black rounded font-semibold" type="submit">Unlock</button>
          {error && <div className="text-red-400 text-center">{error}</div>}
        </form>
        <p className="text-xs text-white/60 mt-4 text-center">If you forgot the password ask the site owner.</p>
      </div>
    </div>
  )
}
