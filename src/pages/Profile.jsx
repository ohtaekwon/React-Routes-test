import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfilePost from "./ProfilePost";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <div>
        <h1>This is Profile</h1>
        <ul>
          <li>
            <Link to="1">Post #1</Link>
          </li>
          <li>
            <Link to="2">Post #2</Link>
          </li>
          <li>
            <Link to="3">Post #3</Link>
          </li>
          <li>
            <Link to="4">Post #4</Link>
          </li>
        </ul>
        <Routes>
          <Route path=":id" element={<ProfilePost />} />
        </Routes>
      </div>
      <div>
        <h2>Profile 페이지 입니다.</h2>
        {id && <p>id 는 {id} 입니다.</p>}
      </div>
    </>
  );
}
