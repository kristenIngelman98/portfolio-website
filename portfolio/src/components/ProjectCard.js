import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProjectData } from '../components/data/ProjectData';
// import { Link } from "react-router-dom";

export default function ProjectCard() {

  const handleClick = () => {
      console.log("clicked")
  }
  return (
   <div className="card_wrapper">
    {ProjectData.map((projectDetail, index) => {
        console.log(projectDetail.id)
        return (
        <Card key={projectDetail.id} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={projectDetail.image} />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {projectDetail.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {projectDetail.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {projectDetail.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {projectDetail.description}
            </Typography>
            </CardContent>
            <CardActions>
                <a target="_blank" href="https://github.com/kristenIngelman98">
                    <Button size="medium">Project Website</Button>
                </a>
                <Button size="medium">Learn More</Button>
            </CardActions>
        </Card>  
        )
    })}
    </div>
  );
}
