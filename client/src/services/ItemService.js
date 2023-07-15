import axios from 'axios'
import { BASE_URL } from './api'

export const getItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/items`)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

export const addItem = async (newItem) => {
  console.log('BEFORE RETURNNNNNNN')
  try {
    const authorization = localStorage.getItem('token')
    const response = await axios.post(`${BASE_URL}/items`, newItem, {
      headers: { authorization }
    })
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

export const deleteItem = async (itemId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/items/${itemId}`)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}
