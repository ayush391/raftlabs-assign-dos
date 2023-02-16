import { useState } from "react"
import { AppContext } from "./appContext"


const defaultPeople = [
    "ayush",
    "deepak",
    "parth",
    "arjun",
    "lavanya",
    "rajat",
    "rakshit",
    "adarsh",
    "rytham",
    "abhishek",
]

export const AppState = ({ children }) => {

    const [people, setPeople] = useState(defaultPeople)
    const [relations, setRelations] = useState({})

    const addPerson = (person) => {
        if (person.length <= 0 || people.includes(person)) {
            return
        }

        setPeople([...people, person])
    }

    const removePerson = (person) => {
        setPeople(people => people.filter((p) => p !== person))
    }
    return (
        <AppContext.Provider value={{
            people,
            relations,
            addPerson,
            removePerson
        }}>
            {children}
        </AppContext.Provider>
    )
}