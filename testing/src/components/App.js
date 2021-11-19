import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { Route, Routes } from "react-router-dom";

export default () => {
  return (
    <div>
      <Routes>
        <Route path="/post" element={<CommentBox />}/>
        <Route path="/" element={<CommentList />}/>
      </Routes>
    </div>
  );
};
