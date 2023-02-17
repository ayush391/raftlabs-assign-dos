import { BigHead } from '@bigheads/core'
import { Box, Paper, Typography } from '@mui/material'
import React, { useCallback, useMemo, useRef } from 'react'

const PersonListItem = ({ person }) => {

    const avatarRef = useRef(<BigHead />)
    return (
        <Paper
            elevation={2}
            sx={{
                padding: '0.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                placeItems: 'center',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    minWidth: '100px',
                    width: '10vw'
                }}
            >
                {
                    person ?
                        // <BigHead />
                        avatarRef.current
                        :
                        <Typography variant='caption'>Select a person</Typography>
                }
            </Box>
            <Typography variant='caption'>
                {person}
            </Typography>
        </Paper >
    )
}

export default PersonListItem