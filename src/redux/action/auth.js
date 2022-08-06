import Axios from 'axios';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'http://192.168.0.140:8000/api',
};

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
      .then(res => {
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        const profile = res.data.data.user;
        console.log('Data Success:', res.data);
        //menyimpan data token
        storeData('token', {
          value: token,
        });
        if (photoReducer.isUpload) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          console.log('photoForUpload :', photoReducer);
          Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
            headers: {
              // Accept: 'application/json',
              Authorization: token,
              'Content-Type': `multipart/form-data`,
              // accept: 'application/json',
            },
          })
            .then(resUpload => {
              profile.profile_photo_url = `http://192.168.0.140:8000/storage/${resUpload.data.data[0]}`;
              //menyimpan data user
              storeData('userProfile', profile);
              navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
              console.log('succes upload: ', resUpload);
            })
            .catch(error => {
              console.log('error upload: ', error.response);
              showMessage('Upload foto tidak berhasil');
              navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
            });
        } else {
          //menyimpan data user
          storeData('userProfile', profile);
          navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
        } 
        dispatch(setLoading(false));
        showMessage('Registrasi Berhasil', 'succes');
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
export const signInAction = (form,navigation) => dispatch => {
  Axios.post(`${API_HOST.url}/login`, form)
      .then(res => {
        dispatch(setLoading(true))
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        const profile = res.data.data.user;
        dispatch(setLoading(false))
        storeData('token', {
          value: token,
        });
        storeData('userProfile', profile);
        navigation.reset({index: 0, routes:[{name : 'MainApp'}]})
        showMessage('Berhasil LogIn!', 'succes')
        console.log('success', res);
        // return navigation.navigate('Home');
      })
      .catch(err => {
        dispatch(setLoading(false))
        console.log('error:', err)
        let errors = Object.values(err?.response?.data?.message);
        let ErrorText = errors.join('\n\n')
        showMessage(ErrorText);
      });
}