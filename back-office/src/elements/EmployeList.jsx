import React from 'react'
import styled from 'styled-components'
import Button from '../molecules/Button'
import EmployeCard from './EmployeCard'
import Input from '../atoms/Input'

const EmployeList = styled.section`
    padding: 72px 120px;
    width: 100%;
    .title {
        font-size: 32px;
        color: #000000;
    }
    .employeHeader {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    .employeList {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 25px;
    }
`
export default () => {
    return (
        <EmployeList>
            <div className='employeHeader'>
                <div className='title'>
                    Liste des employés
                </div>
                <Button textColor='white' fontWeight='500' text='Ajouter un employé' />
            </div>
            {/* <Input searchIcon={true} placeholder='Rechercher nom / prénom...' type='text' /> */}
            <div className='employeList'>
                <EmployeCard />
            </div>
        </EmployeList>
    )
}
