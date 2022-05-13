import './index.css'
import {useEffect} from "react"
import React, {useState} from "react";
import axios from "axios"
import TeacherContent from './components/TeacherContent';
import {Oval} from "react-loader-spinner";
import {withRouter} from "react-router-dom";

const getTeachers = async () => {
    return await axios.get(`http://127.0.0.1:8000/api/teachers`)
}

const TeacherPage = ({history}) => {
    console.log(history.params.id)
    const [users, setUsers]: any[] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(true)


    useEffect(() => {
        setIsLoading(true)
        getTeachers().then(res => {
            const persons = res.data;
            setUsers(persons);
            setIsLoading(false)
        })
    }, [])

    const teachercontent = users.find((teacher: any) => teacher.id === history.params.id);

    if (teachercontent === undefined) {
        return (
            <div style={{
                position: "fixed",
                inset: 0,
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                background: 'white'
            }}>
                Нет такого учителя
            </div>
        )
    }

    return (
        <div className={"teacher-wrapper"}>
            <div className={"teacher-grid"}>
                {isLoading && (
                    <div style={{
                        position: "fixed",
                        inset: 0,
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                        background: 'white'
                    }}>
                        <Oval
                            ariaLabel="loading-indicator"
                            height={100}
                            width={100}
                            strokeWidth={5}
                            strokeWidthSecondary={1}
                            color="blue"
                            secondaryColor="white"
                        />
                    </div>
                )}
                {!isLoading && (
                    <TeacherContent
                        firstName={teachercontent.user.name}
                        lastName={teachercontent.user.surname}
                        secondName={teachercontent.user.patronymic}
                        img={teachercontent.avatar_path}
                        publications_count={teachercontent.publications_count}
                        projects_count={teachercontent.projects_count}
                        conferences_count={teachercontent.conferences_count}
                        diploma_projects_count={teachercontent.diploma_projects_count}
                        regalias={teachercontent.regalias}
                        education_level={teachercontent.education_level.name}
                        professional_interests={teachercontent.professional_interests}
                        dissertation_proof={teachercontent.dissertation_proof}
                    />
                )}
            </div>
        </div>
    );
};

export default withRouter(TeacherPage);;
