import './index.sass'
import 'firebase/firestore';
import {useFirestore, useFirestoreCollectionData} from "reactfire"
import { useTranslation } from 'react-i18next'
import {USERS} from "../../helpers/collections"
import UsersCount from "../../Components/UsersCount";

function Main() {
    const { t } = useTranslation()
    const usersRef = useFirestore().collection(USERS)
    const users = useFirestoreCollectionData(usersRef)
    const countOfUsers = users.data.length
    return (
        <>
            <UsersCount count={countOfUsers}/>
        </>
    )
}

export default Main
