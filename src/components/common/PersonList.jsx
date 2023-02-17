import { DeleteOutline } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import PersonListItem from './PersonListItem'

const PersonList = () => {
    const context = useContext(AppContext)
    const { people, removePerson } = context
    const handleRemove = (p) => {
        removePerson(p)
    }
    return (
        <Box
            sx={{
                padding: '0rem 1rem 1rem 1rem',
                height: '400px',
                // width: '550px',
                overflowY: 'scroll',
                overflowX: 'hidden',
                display: 'flex', gap: 2,
                flexDirection: 'column',
                placeItems: 'flex-start',

            }}
        >
            <Box sx={{
                display: 'flex', gap: 2,
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '1rem'
            }}>
                {
                    people.map((p) => {
                        return (
                            <Box key={p}>
                                <PersonListItem person={p} />
                                <Button
                                    onClick={() => handleRemove(p)}
                                    size='small' color='error' variant='contained'
                                    sx={{
                                        width: '100%',
                                    }}>
                                    <DeleteOutline fontSize='small' />
                                </Button>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default PersonList