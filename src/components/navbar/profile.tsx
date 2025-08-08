import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import ThemeToggle from '../theme-toggle'

function Profile() {
    return (
        <Popover>
            <PopoverTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent className='flex items-center justify-between'>
                <div>
                    <h1 className='text-orange-400 dark:text-white'>Adeel Akhtar</h1>
                    <h2 className='text-orange-400 dark:text-white'>Owner</h2>
                </div>
                <Button className='text-white'>Logout</Button>
                <ThemeToggle />
            </PopoverContent>
        </Popover>
    )
}

export default Profile