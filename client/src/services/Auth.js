import Client from './aoi'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    return res.data.user
  } catch (error) {
    throw error
  }
}
