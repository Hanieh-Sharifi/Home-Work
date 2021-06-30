import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FetchData from '../HOC/FetchData';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from '@material-ui/lab/Pagination';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
    display:"flex",
    justifyContent:"center"
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor:"pointer",
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    pointerEvents:"none",
  },
  cardContent: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    pointerEvents: "none",
  },
}));


function MainUsersPage({data})
{

    const [page, setPage] = useState(1); 
    const classes = useStyles();
    const history = useHistory();
    const itemsPerPage = data.length/5;
    const itemsToRender = data.slice(itemsPerPage*(page-1),itemsPerPage*page);

    function scrollToTop()
    {
      window.scrollTo
      ({
        top: 0, 
        behavior: 'smooth'
      });
    };


  return (
    <React.Fragment>
      <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {data!=="Not found" && itemsToRender.map((data) => (
              <Grid item key={data.id} xs={12} sm={6} md={4} lg={3}>
                <Card id={data.id} onClick={(e)=>history.push(`/user/${e.target.id}`)} className={classes.card}>
                  {data && <CardMedia
                    className={classes.cardMedia}
                    image={data.avatar}
                    text="Image title"
                  />}
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.words} gutterBottom variant="h6" component="h2">
                        {data.firstName+ " " + data.lastName}
                    </Typography>
                    <Typography className={classes.words} gutterBottom variant="inherit">
                        Company: {data.company}
                        <br/>
                        <br/>
                    </Typography>
                    <Typography  className={classes.words} gutterBottom variant="inherit">
                        Phone Number: {data.phone}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div className={classes.root}>
          <Pagination count={5} color="primary" onChange={(event,page) => {setPage(+page);scrollToTop()}}/>
        </div>
    </React.Fragment>
  );
}

export default FetchData(MainUsersPage,"https://60b4f1a0fe923b0017c8335b.mockapi.io/contacts");