import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {Button, Container, Grid2, Paper, TextField} from "@mui/material";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: ()=>void // need to fix any
    onBlur: ()=>void // need to fix any
    onEnter: (e: KeyboardEvent) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName?: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass = s.errorInput // need to fix with (?:)

    return (
        <Paper sx={{ p: 2, width: '100%' }}  id={'hw3-form'} className={s.greetingForm}>
            <Grid2  className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </Grid2>

            <Grid2 container spacing={2} className={s.inputAndButtonContainer}>
                <Grid2>
                    <Grid2>
                        <TextField
                            variant="outlined"
                            id={'hw3-input'}
                            value={name}
                            onChange={setNameCallback}
                            onKeyDown={onEnter}
                            onBlur={onBlur}
                            error={!!error}
                        />

                    </Grid2>
                </Grid2>
                <Grid2 sx={{m:'auto 0px'}}>
                    <Button
                        variant="contained"
                        id={'hw3-button'}
                        onClick={addUser}
                        className={s.button}
                        disabled={!name.trim()}
                    >
                        add
                    </Button>
                </Grid2>

            </Grid2>

            <Grid2 container>
                {!error&&lastUserName && (
                    <div className={s.greeting}>
                        Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                    </div>
                )}
                <Grid2 id={'hw3-error'} className={s.error}>
                    {error}
                </Grid2>
            </Grid2>

        </Paper>
    )
}

export default Greeting
