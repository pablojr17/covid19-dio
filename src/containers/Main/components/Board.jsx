import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton} from '../../../components';
import Card from './Card';
import {BoardStyled } from './style';

function Board({data}) {
  const { cases, todayDeaths, recovered, deaths, todayCases} = data
  const getValue = (value) => value ? value : 
    <Skeleton variant="text" 
              width={182}
              height={60} />

  return (
    <BoardStyled>
      <Grid style={{
        display: 'flex', 
        justifyContent: 'space-evenly',
        alignItens: 'center',
        alignContent: 'center'}} container spacing={2}> 
      
      <Grid item xs={10} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff"/>
      </Grid>

      <Grid item xs={10} md={3}>
        <Card value={getValue(todayDeaths)} label="Obítos hoje" color="#F7cc29"/>
      </Grid>

      <Grid item xs={10} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#000"/>
      </Grid>

      <Grid item xs={10} md={3}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#c52020"/>
      </Grid>

      <Grid item xs={10} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#00cc29"/>
      </Grid>

      </Grid> 
    </BoardStyled>
  )
}

export default memo(Board);