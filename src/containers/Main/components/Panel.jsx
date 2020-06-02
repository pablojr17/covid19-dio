import React, { memo } from 'react';
import RefreshIcon from '../../../assets/refresh.svg';
import { Card, Button, Typography, Select, MenuItem } from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCovidData }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  let capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1)
  const textCovid19 = `País: ${capitalizedCountry} 
      - Casos: ${cases} 
      - Recuperados: ${recovered}
      - Ultima atualização: ${updateAt}`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <Typography
          style={{
            marginLeft: '14px',
            marginRight: '14px',
            fontSize: '36px',
            fontWeight: '700'
          }}
          variant="h5"
          component="span"
          color="primary">
          COVID19
          </Typography>

        
      </CardPanelContentStyled>
      <div className="pt-2"
        style={{
          display: 'flex',
          justifyContent: "center",
          alignItems: 'center',
          alignContent: 'center'
        }}
      >
          <Select onChange={onChange} value={country}>
            {COUNTRIES.map(renderCountries)}
          </Select>
        </div>
      <div
        style={{
          display: 'flex',
          justifyContent: "space-between",
          alignItems: 'center',
          alignContent: 'center',
          margin: '20px'
        }}>

        {navigatorHasShare ? renderShareButton : renderCopyButton}
        
        <Typography
          variant="body2"
          component="span"
          color="primary">
          Atualizado: {updateAt}
        </Typography>
      </div>
    </Card>
  )

}

export default memo(Panel);