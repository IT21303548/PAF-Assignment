import { Avatar } from "@mui/material";
import React from "react";
const StoryCircle = () => {

  return (
    <div>
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/meal-plan-img1_ver_1.png"
          >
          </Avatar>
          <p>Osh</p>
        </div>
    </div>
  )
}

export default StoryCircle