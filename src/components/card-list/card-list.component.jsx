import { Component } from "react";
import "./card-list.styles.css";



const CardList=({filteredMonsters})=>{
        return(
            <div className="card-list">
                {
                    filteredMonsters.map((monster)=>{
                        return(
                            <div key={monster.id} className="card">
                                <img src={`https://robohash.org/${monster.id}set=set2&size=180x180`} alt={`monster ${monster.name}`}/>
                                <h2>{monster.name}</h2>
                                <p>{monster.email}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
}

export default CardList;