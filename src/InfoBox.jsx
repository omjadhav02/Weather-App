import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import "./InfoBox.css"

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Image, Style } from '@mui/icons-material';
import styled from '@emotion/styled';

export default function InfoBox({info}){
    const INIT_URL = "https://unsplash.com/photos/trees-and-green-grass-covered-mountain-phyKBS5Z94M"
    
    const HOT_URL = <i class="fa-regular fa-sun" ><h4>Sunny</h4></i>;
    const COLD_URL = <i class="fa-solid fa-cloud-rain"><h4>COOL</h4></i>;
    const RAIN_URL = <i class="fa-solid fa-snowflake"><h4>RAINY</h4></i>;
    
    
    return(
        <div className="InfoBox">
            
          <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
            sx={{ height: 14}}
            
            />{info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <div>
            <p>Temperature - {info.temp}&deg;C</p>
            <p>Humidity - {info.humidity}</p>
            <p>Min Temp - {info.tempMin}&deg;C</p>
            <p>Max Temp - {info.tempMax}&deg;C</p>
            <p>The weather feels like {info.feelslike}&deg;C</p>
            </div>
            </Typography>
            </CardContent>
      
            </Card>
          </div>
            
        </div>
    )
}