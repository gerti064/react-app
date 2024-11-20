import { Link } from "react-router-dom";
import { TravelContext } from "../context/TravelContext";
import { useContext } from "react";


function TravelList(){
const {travels, setTravels} = useContext(TravelContext);

const onDelete = (destination) =>{
  const filteredValue = travels.filter(t => t.destination !==destination);
  setTravels(filteredValue);
}
  return(
    <>
    <h1>Travel List</h1>
    {
      travels?.map(t => {
        return (
          <div>
            <div>Destination: {t.destination} </div>
            <div>Date: {t.date} </div>
            <div>group: {t.group} </div>
            <button><Link to={`/editTravel/${t.destination}`}>Edit</Link></button><br/>
            <button onClick={() => onDelete(t.destination)}>Delete</button>
          </div>
        )
      })
    }
    <Link to="/addTravel">
    <button class="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
    Add Travel
      </button>
    </Link>
    </>
  )
}

export default TravelList;