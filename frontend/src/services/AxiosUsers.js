import axios from "axios";

const postProfile = async (
  data,
  setStateFirstName,
  setStatelastName,
  setStateEmail,
  setStateAlias,
  setStatePassword
) => {
  const response = await axios.post(`http://localhost:5000/users`, data);
  if (response.data) {
    setStateFirstName("");
    setStatelastName("");
    setStateEmail("");
    setStateAlias("");
    setStatePassword("");
  }
};

export default postProfile;
