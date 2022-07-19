import Axios from "axios";
import { showMessage } from "../../utils";
import { setLoading } from "./global";

const API_HOST = {
    url: 'http://192.168.0.140:8000/api'
}

export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
  Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then(res => {
      console.log('Data Success:', res.data);
      if (photoReducer.isUpload) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);
        console.log('photoForUpload :', photoReducer);
        Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
          headers: {
            Accept: 'application/json',
            Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
            'Content-Type': `multipart/form-data`,
            // accept: 'application/json',
          },
        })
          .then(resUpload => {
            console.log('succes upload: ', resUpload);
          })
          .catch(error => {
            console.log('error upload: ', error.response);
            showMessage('Upload foto tidak berhasil');
          });
      }
      dispatch(setLoading(false));
      showMessage('Registrasi Berhasil', 'succes');
      navigation.replace('SignUpSuccess');
    })
    .catch(err => {
      console.log('Sign Up Error:', err.response);
      dispatch(setLoading(false));
      let errors = Object.values(err?.response?.data?.message);
      console.log('error :', errors);
      let textError = errors.join('\n\n');
      showMessage(textError);
      // seterrorPhone(err.response.data.message.phoneNumber[0]); /ambil setnya dari console error
    });
};
