import { Container } from '@mui/material'
import React, { useContext, useState } from 'react'
import PersonSelect from './common/PersonSelect'
import { Box, Button, Typography } from '@mui/material'
import PersonListItem from './common/PersonListItem'
import { HandshakeRounded } from '@mui/icons-material'
import { AppContext } from '../context/appContext'

const AddRelation = () => {
    const context = useContext(AppContext)
    const { relations, addRelation } = context
    const [person1, setPerson1] = useState('')
    const [person2, setPerson2] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addRelation(person1, person2)
        console.log(relations)
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
        <section
            style={{
                backgroundColor: '#85c5e520'
            }}
        >
            <Box
                height='100%'
                sx={{
                    display: 'flex',
                    placeItems: 'center'
                }}
            >

                {/* <Typography variant='h3' textAlign='center' gutterBottom>Add Relation</Typography> */}
                <Container component='form'
                    maxWidth='md'
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        placeItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            placeItems: 'center',
                            // width: '100%',
                            // marginRight: 'auto',
                            flex: 1
                        }}
                    >
                        <PersonListItem person={person1} />
                        <Typography variant='h2'>🫱🫲</Typography>
                        <PersonListItem person={person2} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            width: '100%',
                            placeItems: 'center'
                        }}
                    >
                        <PersonSelect person={person1} handlePerson={handlePerson1} />
                        <PersonSelect person={person2} handlePerson={handlePerson2} />
                    </Box>



                    <Button color='primary' type='submit' size='large' variant='contained'>Set Relation</Button>
                </Container>
            </Box>

        </section>
    )
}

export default AddRelation