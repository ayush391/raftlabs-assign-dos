import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import PersonListItem from './PersonListItem'

const PersonList = () => {
    const context = useContext(AppContext)
    const { people } = context
    return (
        <Box
            sx={{
                padding: '0rem 1rem 1rem 1rem',
                height: '350px',
                width: '550px',
                overflowY: 'scroll',
                overflowX: 'hidden',
                display: 'flex', gap: 2,
                flexDirection: 'column',
                placeItems: 'flex-start'

            }}
        >
            <Box sx={{
                display: 'flex', gap: 2,
                flexWrap: 'wrap',
            }}>
                {
                    people.map((p) => {
                        return (
                            <PersonListItem key={p}>
                                {p}
                            </PersonListItem>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default PersonList