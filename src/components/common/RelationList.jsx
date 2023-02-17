import { Box, Typography } from '@mui/material'
import React from 'react'
import PersonListItem from './PersonListItem'

const RelationList = ({ relations }) => {
    return (
        <Box
            sx={{
                display: 'flex', gap: 2,
            }}
        >
            {
                relations.map((person, idx) => {
                    return (
                        <Box
                            key={person}
                            sx={{
                                display: 'flex', gap: 2, placeItems: 'center'
                            }}
                        >
                            <PersonListItem person={person}></PersonListItem>
                            {idx + 1 >= relations.length ? null : <Typography variant='h2'>👉</Typography>}
                        </Box>
                    )
                })
            }
        </Box >
    )
}

export default RelationList