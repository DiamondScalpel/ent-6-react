

const getToken = () => {
  return {
    Headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  }
}

export default getToken;