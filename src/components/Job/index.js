import { useParams } from "react-router-dom";
import JobItem from "../JobItem";
import Header from "../header";

export default function Job () {
    let id = useParams();
    return (<>
    <Header />
    <JobItem id={id}/>
    </>
    );
}