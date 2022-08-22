import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import '../stylesheets/graph.css';
import Spinner from "../components/spinner";

function BarGraph(props) {
    const [data, setData] = useState([]);
    const [value, setValue] = useState();
    const [axis, setAxis] = useState();

    useEffect(() => {
        let title = [];
        let views = [];
        if (props.type === "total") {
            // eslint-disable-next-line array-callback-return
            data.map((d) => {
                title.push(d.title);
                views.push(d.views);
            })
        } else {
            // eslint-disable-next-line array-callback-return
            data.map((d) => {
                title.push(d.title);
                views.push(d.increase);
            })
        }

        setAxis({
            chart: {
                id: "bar",
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true,
                    type: 'x',
                    autoScaleYaxis: false
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 8,
                    columnWidth: '50%'
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: title
            },
            yaxis: {
                max: views[0],
                forceNiceScale: true,
            }
        })

        setValue([{
            name: "조회수",
            data: views
        }])
    }, [props.type, data])

    useEffect(() => {
        async function get() {
            const result = await axios.get(
                `/api/charts/${props.type}/100`
            );
            if (props.type !== "total") {
                if (props.page === 2) setData(result.data.slice(props.page * 33, 100));
                else setData(result.data.slice(props.page * 33, props.page * 33 + 34));
            } else setData(result.data.slice(props.page * 33 + 1, props.page * 33 + 34));
        }

        get().then();
    }, [props.page, props.type]);

    if (!data || !value || !axis) return <Spinner/>;
    if (value[0].data[0] === 0) {
        document.getElementsByClassName('fa-chevron-left')[0].style.display = 'none';
        document.getElementsByClassName('fa-chevron-right')[0].style.display = 'none';
        return <div className="bar-null-data fade-in-page">조회수 증가량을 비교하기에 충분한 데이터가 수집되지 않았습니다.</div>
    }
    return (
        <Chart options={axis} series={value} height="500px" type="bar"/>
    );
}

export default BarGraph;