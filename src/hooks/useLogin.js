import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '~/store/auth'

export const useLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = useCallback(
    async ({ email, password }) => {
      try {
        await dispatch(
          login({
            email,
            password,
          }),
        ).unwrap()
        navigate('/')
      } catch (err) {
        console.error('Login failed:', err)
      }
    },
    [dispatch, navigate], 
  )

  return {
    login: handleLogin,
  }
}
