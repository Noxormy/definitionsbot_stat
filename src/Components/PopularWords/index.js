import './index.sass'
import { useTranslation } from 'react-i18next'

const MAX_TOP_COUNT = 10

function PopularWords({words}) {
    const { t } = useTranslation()
    const popularity = {}
    words = words.map(item => item.toLowerCase())
    words.forEach(item => popularity[item] = popularity[item] ? popularity[item] + 1 : 1)
    const mostPopular = Object.keys(popularity).sort((first, second) => popularity[first] - popularity[second])
    const top = mostPopular.reverse().slice(0, MAX_TOP_COUNT)

    return (
        <div className="stat popular_words">
            <h3>{t("popular_words")}</h3>
            <div className="content">
                {top.map((item, idx) => <span key={idx}>{item}</span>)}
            </div>
        </div>
    )
}

export default PopularWords
