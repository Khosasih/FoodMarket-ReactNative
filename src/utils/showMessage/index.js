import { showMessage as showToast } from "react-native-flash-message";

const showMessage = (message, type) => {
    showToast({
      message,
      type: type === 'succes' ? 'succes' : 'danger',
      backgroundColor: type === 'succes' ? '#1ABC9C' : '#D9435E',
    });
  };

  export default showMessage;