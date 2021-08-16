import './index.sass'
import { useTranslation } from 'react-i18next'

function Using({count}) {
    const {t} = useTranslation()
    return (
        <div className="stat using">
            <h3>{t('using')}</h3>
            <div className="content">
                <span>{count}</span>
            </div>
        </div>
    )
}

export default Using
