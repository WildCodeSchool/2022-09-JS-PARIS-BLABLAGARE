import axios from "axios";

const postProfile = async (
  data,
  setState1,
  setState2,
  setState3,
  setState4,
  setState5
) => {
  const response = await axios.post(`http://localhost:5000/users`, data);
  if (response.data) setState1("");
  setState2("");
  setState3("");
  setState4("");
  setState5("");
};

export default postProfile;
