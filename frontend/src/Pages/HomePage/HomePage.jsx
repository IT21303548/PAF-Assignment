import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../../components/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import MiddlePart from "../../components/MiddlePart/MiddlePart";
import Reels from "../../components/Reels/Reels";
import CreateReelForm from "../../components/Reels/CreateReelForm";
import Profile from "../Profile/Profile";
import HomeRight from "../../components/HomeRight/HomeRight";
import { useSelector } from "react-redux";
import MealPlan from "../../components/MealPlan/MealPlan";
import CreateMealPlan from "../../components/MealPlan/CreateMealPlan";
import WorkoutPlan from "../../components/WorkoutPlan/WorkoutPlan";
import CreateWorkoutPlan from "../../components/WorkoutPlan/CreateWorkoutPlan";

const HomePage = () => {
  const location = useLocation();
  const {auth} = useSelector(store => store);

  console.log("Auth: ", auth);

  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>

        <Grid
          lg={location.pathname === "/" ? 6 : 9}
          item
          className="px-5 flex justify-center"
          xs={12}
        >
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/createreels" element={<CreateReelForm />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/mealplan" element={<MealPlan />} />
            <Route path="/createmealplan" element={<CreateMealPlan />} />
            <Route path="/workoutplan" element={<WorkoutPlan />} />
            <Route path="/createworkoutplan" element={<CreateWorkoutPlan />} />
          </Routes>
        </Grid>

        {/* {Location.pathname === "/" && ( */}
          <Grid item lg={3} className="relative">
            <div className="sticky top-0 w-full">
              <HomeRight />
            </div>
          </Grid>
        {/* )} */}
      </Grid>
    </div>
  );
};

export default HomePage;
