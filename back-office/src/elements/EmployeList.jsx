import React from 'react'
import styled from 'styled-components'
import Button from '../molecules/Button'
import EmployeCard from './EmployeCard'

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
        margin-bottom: 40px;
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
            <div className='employeList'>
                <EmployeCard />
            </div>
        </EmployeList>
    )
}
