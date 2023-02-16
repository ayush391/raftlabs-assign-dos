import React, { useContext, useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { AppContext } from '../../context/appContext'

const PersonSelect = ({ person, handlePerson }) => {
    const context = useContext(AppContext)
    const { people, addPerson } = context

    // const [selectedperson, setSelectedPerson] = useState('')


    const handleChange = (e) => {
        handlePerson(e.target.value)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                width: '100%'

            }}
        >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Person</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={person}
                    label="Person"
                    onChange={handleChange}
                >
                    {
                        people.map((p) => {
                            return (
                                <MenuItem key={p} value={p}>{p}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    )
}

export default PersonSelect