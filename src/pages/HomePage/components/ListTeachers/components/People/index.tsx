import { withRouter } from 'react-router-dom'
import './index.css'
import BurgerSVGsm from "../../../../../components/gloabal/UI/SVGComponents/BurgerSVGsm";
import BorderSVGsm from "../../../../../components/gloabal/UI/SVGComponents/BorderSVGsm";


interface TeacherProps {
    id: string,
    firstName: string,
    lastName?: string,
    secondName?: string,
    img?: string,
    status?: string,
}


const Teacher = (props: TeacherProps) => {

    const {
        id = '123',
        firstName,
        lastName,
        secondName,
        img,
        history
    } = props

    return (
        <div className="department-history-wrapper-people" onClick={() => history.push('/teacher',{id: id})}>
            <div className="department-history-wrapper-image-people">
                <BurgerSVGsm className={'burger-back'} />
                <BorderSVGsm className={'border-back'} />
                <div className={'department-history-image-people'}>
                    <img src={img} />
                </div>
            </div>
            <div className="department-history-wrapper-info-people">
                <div className={'info-people-lastName'}>{lastName}</div>
                <div className={'name-container'}>
                    <div className={'info-people-name-firstName'}>{firstName}</div>
                    <div className={'info-people-name-secondName'}>{secondName}</div>
                </div>
                {/* <div className={'info-people-status'}>{status}</div> */}
            </div>
        </div>
    )
}

export default withRouter(Teacher);
