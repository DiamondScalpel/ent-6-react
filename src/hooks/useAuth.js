import axios from 'axios';

const useAuth = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users';
  const postApi = async(url, data) => {
    axios.post(url, data)
        .then(res => {
            console.log(res.data);
            'token' in res.data && localStorage.setItem('token', res.data.token);
        })
        .catch(err => console.log(err));
  }
  return postApi;
}

export default useAuth;