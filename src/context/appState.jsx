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
    const [relations, setRelations] = useState(new Map([
        ["ayush", [["rajat"], ["arjun"]]],
    ]))

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
        const temp = new Map(relations)

        let currV = temp.get(person1)
        let newV = currV ? [...new Set([...currV, person2])] : [person2]
        temp.set(person1, newV)

        currV = temp.get(person2)
        newV = currV ? [...new Set([...currV, person1])] : [person1]
        temp.set(person2, newV)

        setRelations(new Map(temp))
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