import { useParams } from "react-router-dom";
import Background from "../../components/CardBackground/CardBackground";
import Navbar from "../../components/CardNavBar/CardNavbar";
import Result from "../../components/CardResult/CardResult";
import "./MyTrips.css";

export default function MyTrips() {
  const { origin, date, hour, id } = useParams();
  return (
    <>
      <Navbar />
      <Result day={date} origin={origin} hour={hour} id={id} />
      <Background />
    </>
  );
}
