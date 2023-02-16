import { BigHead } from '@bigheads/core'
import { DeleteOutline } from '@mui/icons-material'
import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'

const PersonListItem = React.memo(({ children }) => {
    return (
        <Box>

            <Paper
                elevation={2}
                sx={{
                    padding: '0.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    placeItems: 'center',
                    width: '100px',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        width: '50px'
                    }}
                >
                    <BigHead />
                </Box>
                <Typography variant='caption'>
                    {children}
                </Typography>
            </Paper>

            <Button size='small' color='error' variant='contained'
                sx={{
                    width: '100%',
                }}>
                <DeleteOutline fontSize='small' />
            </Button>

        </Box>
    )
})

export default PersonListItem