// new
import React, {useState} from "react"
import NewsList, { allNews } from "./NewsList";


const Search_system = () => {
    const [search, setSearch] = useState("")
    const handleChange =(e) => {
        setSearch(e.target.value);
        console.log("data state", search);
    };
    const filteredSearch = allNews.filter((news) =>{
        news.title.toLowerCase().includes(search.toLocaleLowerCase());
    });
    return (
        <div>
            <div>
                <h1></h1>
                <input 
                type="text" 
                placeholder="" id="" />
            </div>
        </div>
    )

    }