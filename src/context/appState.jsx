import { useState } from "react"
import { AppContext } from "./appContext"


const defaultPeople = [
    "ayush",
    "arjun",
    "lavanya",
    "rajat",
    "adarsh",
]

export const AppState = ({ children }) => {

    const [people, setPeople] = useState(defaultPeople)

    const [relations, setRelations] = useState({
        "ayush": ["rajat", "arjun"],
        "arjun": ["ayush"],
        "rajat": ["ayush"],
    })

    const addPerson = (person) => {
        if (person.length <= 0 || people.includes(person)) {
            return
        }

        setPeople([...people, person])
    }

    const removePerson = (person) => {
        setPeople(people => people.filter((p) => p !== person))
    }

    const addRelation = (person1, person2) => {
        const temp = { ...relations }

        let currV = new Set(temp[person1])
        let newV = currV ? [...currV.add(person2)] : [person2]
        temp[person1] = [...newV]

        currV = new Set(temp[person2])
        newV = currV ? [...currV.add(person1)] : [person1]
        temp[person2] = [...newV]

        setRelations({ ...temp })
    }

    return (
        <AppContext.Provider value={{
            people,
            relations,
            addPerson,
            removePerson,
            addRelation
        }}>
            {children}
        </AppContext.Provider>
    )
}