import { BigHead } from '@bigheads/core'
import { DeleteOutline } from '@mui/icons-material'
import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/appContext'

const PersonListItem = React.memo(({ person }) => {

    return (
        <Paper
            elevation={2}
            sx={{
                padding: '0.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                placeItems: 'center',
                // width: '100px',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    minWidth: '100px',
                    width: '5em'
                }}
            >
                <BigHead />
            </Box>
            <Typography variant='caption'>
                {person}
            </Typography>
        </Paper>
    )
})

export default PersonListItem