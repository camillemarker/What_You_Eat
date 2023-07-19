import Client from './api'

export const AddItem = async (data) => {
  try {
    const res = await Client.post('/items/add', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllItems = async () => {
  console.log('BSTARTING GET ITEMMMMMM')
  try {
    const res = await Client.get('/items/all')
    console.log('BEFORERETURNNNNN GET ITEMMMMMMM')
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteItem = async (item_id) => {
  try {
    const res = await Client.delete(`/items/${item_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateItem = async (item_id, data) => {
  try {
    const response = await Client.put(`/items/${item_id}`, data)
    return response.data
  } catch (error) {
    throw error
  }
}
