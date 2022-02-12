import React from "react";
import "./index.css";
import Teacher from "./components/People";
import images from "../../../../assets/image";

let teachers = [
    {
        lastName: "Тягульская",
        firstName: "Людмила",
        secondName: "Анатольевна",
        status: "Заведующий кафедрой, кандидат экономических наук, доцент",
        img: images.tyagulska,
    }, {
        lastName: "Козак",
        firstName: "Людмила",
        secondName: "Ярославовна",
        status: "Доцент, кандидат технических наук",
        img: images.kozak,
    }, {
        lastName: "Балан",
        firstName: "Лилия",
        secondName: "Александровна",
        status: "Доцент, кандидат педагогических наук",
        img: images.balan,
    }, {
        lastName: "Глазов",
        firstName: "Анатолий",
        secondName: "Борисович",
        status: "Доцент ",
        img: images.glazov,
    },
    {
        lastName: "Борсуковский",
        firstName: "Сергей",
        secondName: "Иванович",
        status: "Старший преподаватель",
        img: images.borsukovskiy,
    }, {
        lastName: "Ляху",
        firstName: "Александр",
        secondName: "Анатольевич",
        status: "Старший преподаватель",
        img: images.none,
    }, {
        lastName: "Сташкова",
        firstName: "Ольга",
        secondName: "Витальевна",
        status: "Старший преподаватель",
        img: images.stashkova,
    }, {
        lastName: "Шестопал",
        firstName: "Оксана",
        secondName: "Викторовна",
        status: "Старший преподаватель",
        img: images.shestopal,
    },{
        lastName: "Гарбузняк",
        firstName: "Елена",
        secondName: "Сергеевна",
        status: "Старший преподаватель",
        img: images.garbuznyak,
    },{
        lastName: "Кардаш",
        firstName: "Людмила",
        secondName: "Федоровна",
        status: "Преподаватель, ведущий специалист",
        img: images.kardash,
    },{
        lastName: "Нагаевский",
        firstName: "Октавиан",
        secondName: "Михайлович",
        status: "Преподаватель",
        img: images.nagaevskii,
    },{
        lastName: "Нагаевская",
        firstName: "Наталья",
        secondName: "Владимировна",
        status: "Преподаватель",
        img: images.nagaevskaya,
    },{
        lastName: "Борсуковский",
        firstName: "Сергей",
        secondName: "Васильевич",
        status: "Преподаватель",
        img: images.none,
    },{
        lastName: "Луценко",
        firstName: "Игорь",
        secondName: "Владимирович",
        status: "Инженер-программист",
        img: images.lucenko,
    },{
        lastName: "Станьковская",
        firstName: "Алёна",
        secondName: "Александровна",
        status: "Старший лаборант",
        img: images.stanikovskia,
    },{
        lastName: "Пешкин",
        firstName: "Дана",
        secondName: "Ильинична",
        status: "Преподаватель",
        img: images.none,
    },
];

const ListTeachers = () => {
    return (
        <div className={"list-teachers"}>
            <div className={"list-teachers-title"}>
                Список преподавателей
            </div>
            <div className={"list-teachers-grid"}>
                {teachers.map((teacher, index) => (
                    <Teacher
                        key={`${index}-${teacher.lastName}`}
                        item={teacher}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListTeachers;
