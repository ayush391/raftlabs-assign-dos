import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/appContext'
import { calcDos } from '../dos/calcDOS'
import PersonSelect from './common/PersonSelect'
import RelationList from './common/RelationList'

const FindDOS = () => {
    const context = useContext(AppContext)
    const { relations } = context

    const [person1, setPerson1] = useState('')
    const [person2, setPerson2] = useState('')

    const [dosResult, setDosResult] = useState([])

    const handleSubmit = () => {
        const result = calcDos(relations, person1, person2)
        console.log(result)
        setDosResult(result)
        // addPerson(person)
        // setPerson('')
    }

    const handlePerson1 = (val) => {
        setPerson1(val)
    }
    const handlePerson2 = (val) => {
        setPerson2(val)
    }

    return (
        <section >
            <Box
                height='100%'
                sx={{
                    display: 'flex',
                    placeItems: 'center'
                }}
            >
                {/* <Typography variant='h3' textAlign='center' gutterBottom>Degrees Of Seperation</Typography> */}

                <Container
                    maxWidth='md'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', gap: 2,
                        marginTop: '1rem',
                        marginBottom: '1rem',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center', gap: 2,
                            width: '100%'

                        }}
                    >
                        <PersonSelect person={person1} handlePerson={handlePerson1} />
                        <PersonSelect person={person2} handlePerson={handlePerson2} />
                    </Box>
                    <Button color='warning' onClick={handleSubmit} variant='contained'>Degrees of Seperation</Button>

                </Container>
                {
                    dosResult.map((relation, idx) => {

                        return relation && relation.length > 1 ?
                            <Box
                                key={idx}
                                sx={{
                                    display: 'flex',
                                    placeItems: 'center',
                                    marginTop: '1rem',
                                    marginBottom: '1rem',
                                }}
                            >
                                <Typography fontWeight='bold' marginRight={2}>{idx + 1}.</Typography>
                                <RelationList
                                    relations={relation}
                                />
                            </Box>
                            :
                            <Typography key={1} variant='h5'>No valid relation detected</Typography>
                    })
                }
            </Box>

        </section>
    )
}

export default FindDOS