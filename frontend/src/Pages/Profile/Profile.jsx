import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
import UserReelCard from "../../components/Reels/UserReelCard";
import { useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";

const tabs = [
  {value:"post", name:"Post"},
  {value:"reels", name:"Reels"},
  {value:"saved", name:"Saved"},
  {value:"repost", name:"Repost"},
];

const posts = [1,1,1,1];

const reels = [1,1,1,1];

const savePost = [1,1,1,1];

const Profile = () => {

  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState('post');
  const {auth} = useSelector(store => store);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg"
          />

          {true ? (
            <Button sx={{ borderRadius: "20px" }} variant="outlined" onClick={handleOpenProfileModal}>
              Edit Profile
            </Button>
          ) : (
            <Button variant="outlined">Follow</Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">{
              auth.user?.firstName + " " + auth.user?.lastName}</h1>
            <p>@{auth.user?.firstName.toLowerCase() + auth.user?.lastName.toLowerCase()}</p>
          </div>

          <div className="flex gap-5 items-center py-3">
            <span>41 post</span>
            <span>35 followers</span>
            <span>5 followings</span>
          </div>

          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              ipsa quibusdam placeat soluta perspiciatis exercitationem maxime
              tempore ea quidem, quaerat ut quod. Hic asperiores aperiam totam
              quod fugiat. Ullam, fugiat.
            </p>
          </div>
        </div>

        <section>
          <Box sx={{ width: "100%", borderBottom:1, borderColor:"divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item)=>(
                <Tab value={item.value} label={item.name} />
              )) }
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "post"? (
            <div className="space-y-5 w-[70%] my-10">

              {posts.map((item)=> (
                <div className="border border-slate-100 rounded-md">
                  <PostCard/>
                </div>
              ))}
            </div>
           ):value==="reels"?<div className="flex justify-center flex-wrap gap-2 my-10">
            {reels.map((item)=> (
              <UserReelCard/>
            ))}
           </div>: value === "saved" ? (
              <div className="space-y-5 w-[70%] my-10">
                {savePost.map((item) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : (
            <div>
              Repost
            </div>
            )}
          </div>
        </section>
      </div>

      <section>
        <ProfileModal open={open} handleClose={handleClose}/>
      </section>
    </Card>
  );
};

export default Profile;
