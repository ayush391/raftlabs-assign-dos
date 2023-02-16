import { Box, Button, Container, Input, Paper, TextField, Typography } from '@mui/material'
import React, { useCallback, useContext, useState } from 'react'
import { AppContext } from '../context/appContext'
import PersonInput from './common/PersonInput'
import PersonList from './common/PersonList'
import PersonListItem from './common/PersonListItem'

const AddPerson = () => {

    return (
        <>
            <Typography variant='h3' textAlign='center' gutterBottom>Add People</Typography>
            <Container
                maxWidth='md'
                sx={{
                    marginTop: '2rem',
                    marginBottom: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    justifyContent: 'start',
                    alignItems: 'center'

                }}
            >
                <PersonList />
                <PersonInput />
            </Container >
        </>
    )
}

export default AddPerson