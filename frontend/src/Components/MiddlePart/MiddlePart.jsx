import { Avatar, Card, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImangeIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticalIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
import CreatePostModel from "../CreatePost/CreatePostModel";
import CreateStoryModel from "../CreateStory/CreateStoryModel";
//import { useDispatch, useSelector } from "react-redux";
//import { getAllPostAction } from "../../Redux/Post/post.action";
import { API_BASE_URL } from "../../Config/api";
import axios from "axios";

const story = [1, 1, 1, 1, 1];
//const posts = [1, 1, 1, 1, 1];

const MiddlePart = () => {
  //const dispatch = useDispatch();
  // const {post} = useSelector(store => store);

  // console.log("Posts: ", post);

  const [openCreatePostModel, setOpenCreatePostModel] = React.useState(false);

  const handleCloseCreatePostModel = () => setOpenCreatePostModel(false);

  const handleOpenCreatePostModel = () => {
    setOpenCreatePostModel(true);
    console.log("Open Create Post Model");
  };


  const [openCreateStoryModel, setOpenCreateStoryModel] = React.useState(false);

  const handleCloseCreateStoryModel = () => setOpenCreateStoryModel(false);

  const handleOpenCreateStoryModel = () => {
    setOpenCreateStoryModel(true);
    console.log("Open Create Story Model");
  };

  const [post, setPost] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    //  dispatch(getAllPostAction);
    //     axios.get(API_BASE_URL+ '/api/posts' )
    // .then(function (response) {
    //   // handle success
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });
    const URL = API_BASE_URL + "/api/posts";
    axios
      .get(URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((response) => {
        // If request is good...
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);
  
  const handleSelectStory = (storyId) => {
    setSelectedStory(storyId);
  };

  return (
    <div className="px-20">
      <section className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            onClick={handleOpenCreateStoryModel}
            sx={{ width: "5rem", height: "5rem" }}
            //src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
            <AddIcon onClick={handleOpenCreateStoryModel} sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p onClick={handleOpenCreateStoryModel}>New</p>
        </div>
        {story.map((item) => (
          <StoryCircle />
        ))}
   
      </section>

      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            onClick={handleOpenCreatePostModel}
            className="outline-none w-[90%] bg-slate-100 rounded-full px-5 bg-transparent border-[#3b4054] border"
            type="text"
          />
        </div>
        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ImangeIcon />
            </IconButton>

            <span>Media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <VideocamIcon />
            </IconButton>

            <span>Video</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ArticalIcon />
            </IconButton>

            <span>Write Artical</span>
          </div>
        </div>
      </Card>

      <div className="mt-5 space-y-5">
        {post && post?.map((item) => <PostCard item={item} />)}
        {/* {posts.map(() => <PostCard />)} */}
      </div>
      <div>
        <CreatePostModel
          handleClose={handleCloseCreatePostModel}
          open={openCreatePostModel}
        />
      </div>
      <div>
      <CreateStoryModel
          handleClose2={handleCloseCreateStoryModel}
          open2={openCreateStoryModel}
        />
      </div>
<div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">

        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Product
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
 
            <form class="p-4 md:p-5">
                <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Select category</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div>
                    <div class="col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                        <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                    </div>
                </div>
                <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add new product
                </button>
            </form>
        </div>
    </div>
</div> 
    </div>
  );
};

export default MiddlePart;
