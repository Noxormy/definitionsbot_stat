import 'firebase/firestore';
import {useFirestore, useFirestoreCollectionData} from "reactfire"
import { useTranslation } from 'react-i18next'
import {USERS} from "../../helpers/collections"
import './index.sass'

function Main() {
    const { t } = useTranslation()
    const usersRef = useFirestore().collection(USERS)
    const users = useFirestoreCollectionData(usersRef)
    const countOfUsers = users.length
    console.log(users)
    return (
        <>
            <div className="count_of_users">
                <span>{t('count_of_users')}: </span>
                <span>{countOfUsers}</span>
            </div>
        </>
    )
}

export default Main
