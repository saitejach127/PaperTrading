import React,{useEffect, useState} from 'react'
import { getCookie, sendGet } from './utils'

export default function Companies() {

    const [query, setQuery] = useState("");
    const [recomds, setRecomds] = useState([]);

    const getCompanies = async () => {
        var data = await sendGet(`search?q=${query}`);
        setRecomds(data.data);
    }

    useEffect(() => {
        if(!getCookie("jwttoken")){
            window.location.href="/register";
        }
    }, [])

    return (
        <div>
            <center>
                <h1>Get all Companies</h1>
                <input type="text" value={query} onChange={(e) => {setQuery(e.target.value);}} onKeyPress={getCompanies} />
                {recomds && recomds.map((recm, id) => {
                    return (
                        <div key={id}>
                            <p>{recm}</p>
                        </div>
                    )
                })}
            </center>
        </div>
    )
}
