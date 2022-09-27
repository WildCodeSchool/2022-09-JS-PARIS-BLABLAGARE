import axios from "axios";

const postTrips = async (
  data,
  setStateSearch,
  setStateOrigin,
  setStateDest1,
  setStateDest2,
  setStateDest3,
  setStateDate,
  setStateHour,
  setStateComments,
  setStateUsersId
) => {
  const token = sessionStorage.getItem("token");
  const response = await axios.post(`http://localhost:5000/trips`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.data) {
    setStateSearch();
    setStateOrigin();
    setStateDest1();
    setStateDest2();
    setStateDest3();
    setStateDate();
    setStateHour();
    setStateComments();
    setStateUsersId();
  }
};

export default postTrips;
