import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ControlePointIcon from '@mui/icons-material/ControlPoint';
import NotificationIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
//import ListAltIcon from '@mui/icons-material/ListAlt';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import GroupIcon from '@mui/icons-material/Group';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const navigationMenu = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/"
    },
    {
        title:"Meal Plan",
        //icon:<ExploreIcon/>,
        icon:<RestaurantIcon/>,
        path:"/mealplan"
    },
    {
        title:"Create Meal Plan",
        //icon:<ControlePointIcon/>,
        icon:<RestaurantMenuIcon/>,
        path:"createmealplan"
    },
    {
        title:"Workout Plan",
        icon:<FitnessCenterIcon/>,
        path:"/workoutplan"
    },
    {
        title:"Create Workout Plan",
        icon:<NoteAddIcon/>,
        path:"/createworkoutplan"
    },
    {
        title:"Notifications",
        icon:<NotificationIcon/>,
        path:"/"
    },
    {
        title:"Message",
        icon:<MessageIcon/>,
        path:"/message"
    },
    // {
    //     title:"List",
    //     icon:<ListAltIcon/>,
    //     path:"/"
    // },
    {
        title:"Community",
        icon:<GroupIcon/>,
        path:"/"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        path:"/profile"
    },
]