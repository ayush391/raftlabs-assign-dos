import React, { useContext, useState } from 'react'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { AppContext } from '../../context/appContext'

const PersonSelect = () => {
    const context = useContext(AppContext)
    const { people, addPerson } = context

    const [person, setPerson] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addPerson(person)
        setPerson('')
    }
    const handleChange = (e) => {
        setPerson(e.target.value)
    }

    return (
        <Box component='form'
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                placeItems: 'center',
                flex: 1
            }}
        >
            <TextField
                variant='outlined'
                label='Add Person'
                value={person}
                onChange={handleChange}
            />
            <Button type='submit' size='large' variant='contained'>Add</Button>
        </Box>
    )
}

export default PersonSelect