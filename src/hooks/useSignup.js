import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '~/store/auth'

export const useSignup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = useCallback(
    async ({ email, password, name }) => {
      try {
        await dispatch(
          signup({
            email,
            password,
            name,
          }),
        ).unwrap()
        navigate('/')
      } catch (err) {
        console.error('Signup failed:', err)
      }
    },
    [dispatch, navigate], 
  )

  return {
    signup: handleSignup,
  }
}
