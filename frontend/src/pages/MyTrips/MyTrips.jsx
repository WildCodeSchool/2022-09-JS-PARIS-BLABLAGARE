import { useParams } from "react-router-dom";
import Background from "../../components/CardBackground/CardBackground";
import Navbar from "../../components/CardNavBar/CardNavbar";
import Result from "../../components/CardResult/CardResult";
import "./MyTrips.css";

export default function MyTrips() {
  const { id, origin, date, hour, email } = useParams();
  return (
    <>
      <Navbar />
      <Result id={id} origin={origin} day={date} hour={hour} email={email} />
      <Background />
    </>
  );
}
