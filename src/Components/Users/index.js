import './index.sass'
import { useTranslation } from 'react-i18next'
import { Line } from 'react-chartjs-2'
import {getForDays, getForOneDay} from "../../helpers/collections";
import {color} from "chart.js/helpers";

const DAY_SECONDS = 86400
const OPTIONS = {
    responsive: true,
    scales: {
        x: {
           grid: {
               color: '#5d5d5d'
           }
        },
        y: {
            ticks: {
                // forces step size to be 50 units
                stepSize: 1
            },
            grid: {
                color: '#5d5d5d'
            }
        }
    },
    maintainAspectRatio: false
};

function Users({users}) {
    const { t } = useTranslation()

    const MAX_DAYS = 5
    let usersData = getForDays(users, MAX_DAYS)
    const countOfUserBefore = users.length - usersData.length

    const dataForDays = []
    for(let i = 0; i < MAX_DAYS; i++) {
        let item = i === 0 ? countOfUserBefore : dataForDays[i - 1]

        item += getForOneDay(usersData, MAX_DAYS - i).length
        dataForDays.push(item)
    }

    const data = {
        labels: new Array(5).fill(Date.now()).map((item, idx) => new Date(item - idx * DAY_SECONDS * 1000).getDate()).reverse(),
        datasets: [
            {
                label: t("new_users_label"),
                data: dataForDays,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }

    return (
        <div className="stat new_users">
            <h3>{t("new_users")}</h3>
            <div className="chart">
                <Line data={data} height={200} options={OPTIONS}/>
            </div>
        </div>
    )
}

export default Users
