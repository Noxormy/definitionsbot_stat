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
    const now = new Date()
    const today = (new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 1000).toFixed()
    let usersData = users.filter(item => item.time > today - 5 * DAY_SECONDS)
    const countOfUserBefore = users.length - usersData.length
    usersData = usersData.reduce((array, item) => {
        if(item.time < today - 4 * DAY_SECONDS) return array.map((item, id) => id === 0 ? item + 1 : item)
        else if(item.time < today - 3 * DAY_SECONDS) return array.map((item, id) => id === 1 ? item + 1 : item)
        else if(item.time < today - 2 * DAY_SECONDS) return array.map((item, id) => id === 2 ? item + 1 : item)
        else if(item.time < today - DAY_SECONDS) return array.map((item, id) => id === 3 ? item + 1 : item)
        else return array.map((item, id) => id === 4 ? item + 1 : item)
    }, [0, 0, 0, 0, 0])
    usersData = usersData.map((item, idx, array) => {
        if(idx === 0) item += countOfUserBefore;
        else item += array[idx - 1]
        return item
    })


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
