import './index.sass'
import { useTranslation } from 'react-i18next'

function UsersCount({count}) {
    const {t} = useTranslation()
    return (
        <div className="stat count_of_users">
            <h3>{t('count_of_users')}</h3>
            <div className="content">
                <span>{count}</span>
            </div>
        </div>
    )
}

export default UsersCount
