import React from "react";

function ListMap(prop){
    const listVar = prop.list.map((value) => {
        return <li key={value.toString()}>{value}</li>
    })
    return(
        listVar
    );
}

export default ListMap