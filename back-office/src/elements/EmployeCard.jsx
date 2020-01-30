import React from 'react'
import styled from 'styled-components'
import SecondaryText from '../atoms/SecondaryText'
import Icon from '../atoms/Icon'

const EmployeCard = styled.div`
   padding: 22px 24px;
   background-color: white;
   border-radius: 8px;
   display: flex;
   .cardInfo {
        flex: 1;
   }
   .cardName {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 8px;
   }
`

export default () => {
    return (
        <>
            <EmployeCard>
                <div className='cardInfo'>
                    <div className='cardName'>Dianne Alexander</div>
                    <SecondaryText black='black' text='Secteur du 92 / 78' />
                </div>
                <div className=''>
                    <Icon size='24' type='caltimes' />
                    <Icon size='24' iconColor='#D80000' type='trash' />
                </div>
            </EmployeCard>
            <EmployeCard>
                <div className='cardInfo'>
                    <div className='cardName'>Dianne Alexander</div>
                    <SecondaryText black='black' text='Secteur du 92 / 78' />
                </div>
                <div className=''>
                    <Icon size='24' type='caltimes' />
                    <Icon size='24' iconColor='#D80000' type='trash' />
                </div>
            </EmployeCard>
            <EmployeCard>
                <div className='cardInfo'>
                    <div className='cardName'>Dianne Alexander</div>
                    <SecondaryText black='black' text='Secteur du 92 / 78' />
                </div>
                <div className=''>
                    <Icon size='24' type='caltimes' />
                    <Icon size='24' iconColor='#D80000' type='trash' />
                </div>
            </EmployeCard>
            <EmployeCard>
                <div className='cardInfo'>
                    <div className='cardName'>Dianne Alexander</div>
                    <SecondaryText black='black' text='Secteur du 92 / 78' />
                </div>
                <div className=''>
                    <Icon size='24' type='caltimes' />
                    <Icon size='24' iconColor='#D80000' type='trash' />
                </div>
            </EmployeCard>
            <EmployeCard>
                <div className='cardInfo'>
                    <div className='cardName'>Dianne Alexander</div>
                    <SecondaryText black='black' text='Secteur du 92 / 78' />
                </div>
                <div className=''>
                    <Icon size='24' type='caltimes' />
                    <Icon size='24' iconColor='#D80000' type='trash' />
                </div>
            </EmployeCard>
        </>
    )
}