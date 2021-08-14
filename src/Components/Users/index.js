import './index.sass'
import { useTranslation } from 'react-i18next'
import { Line } from 'react-chartjs-2'

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
    const now = parseInt((Date.now() / 1000).toFixed())
    let usersData = users.filter(item => item.time > now - 5 * DAY_SECONDS)
    usersData = usersData.reduce((array, item) => {
        if(item.time < now - 4 * DAY_SECONDS) return [...array.map((item, id) => id === 0 ? item + 1 : item)]
        else if(item.time < now - 3 * DAY_SECONDS) return [...array.map((item, id) => id === 1 ? item + 1 : item)]
        else if(item.time < now - 2 * DAY_SECONDS) return [...array.map((item, id) => id === 2 ? item + 1 : item)]
        else if(item.time < now - DAY_SECONDS) return [...array.map((item, id) => id === 3 ? item + 1 : item)]
        else if(item.time < now) return [...array.map((item, id) => id === 4 ? item + 1 : item)]
        else {
            console.error("wrong reduce")
            return array
        }
    }, [0, 0, 0, 0, 0])

    const data = {
        labels: new Array(5).fill(Date.now()).map((item, idx) => new Date(item - idx * DAY_SECONDS * 1000).getDate()).reverse(),
        datasets: [
            {
                label: 'count of users for last 5 days',
                data: usersData,
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
