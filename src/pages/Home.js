import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
    const { data:catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });
    const {username} = useContext(AppContext);
    if (isError){
        return <h1> There is some error.... </h1>
    }
    if (isLoading){
        return <h1> Loading..... </h1>
    }
    return (
        <div>
            <h1>This is the home page and user is {username} </h1>
            <br />
            <h1> {catData?.fact} </h1>
            <button onClick={refetch}> Update Data  </button>
        </div>
    );
}