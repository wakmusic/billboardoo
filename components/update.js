import React, {useEffect, useState} from "react";
import axios from "axios";

function Update(props) {
    const [data, setData] = useState();

    useEffect(() => {
        async function get() {
            const result = await axios.get(
                `/api/charts/update/${props.type}`
            );
            setData(result.data);
        }

        get().then();
    }, [props.type]);

    if (!data) return null;

    const date = new Date(data * 1000);
    return <div className="chart-update fade-in-page">최종 업데이트: {date.getFullYear()}
        년 {date.getMonth() + 1}월 {date.getDate()}일 {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:
        {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}</div>
}

export default Update;