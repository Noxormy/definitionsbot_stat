import './index.sass'
import { useTranslation } from 'react-i18next'
import { Line } from 'react-chartjs-2'
import {getForDays} from "../../helpers/collections";

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

    const MAX_DAYS = 4
    let usersData = getForDays(users, MAX_DAYS)
    const countOfUserBefore = users.length - usersData.length
    console.log(usersData.map(item => item.time))

    const dataForDays = new Array(MAX_DAYS + 1).fill(0).map((item, idx, array) => {
        if(idx === 0) item += countOfUserBefore
        else item += array[idx - 1]

        item += getForDays(usersData, MAX_DAYS - idx, idx).length
        return item
    })

    const data = {
        labels: new Array(5).fill(Date.now()).map((item, idx) => new Date(item - idx * DAY_SECONDS * 1000).getDate()).reverse(),
        datasets: [
            {
                label: t("new_users_label"),
                data: dataForDays.reverse(),
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
