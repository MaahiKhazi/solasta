import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactComponent from '../reactComponents/ReactComponents';
import Loading from "../reactComponents/Loading";

const genAI = new GoogleGenerativeAI("AIzaSyDuNTuGXba6sBd5VjXxOG3ldEHrbDRf_L0");

const AiServices = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  const { languages, frameworks } = location.state || {};

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      let prompt = `Give me the JSON for an array object called "paths" containing 10 learning paths that suggest user for learning new skills which are related to what he knows. Paths should be in the form of objects which have title, description and skills (new or old), array of three or more links to learn those skills as keys. The user knows ${languages}`;

      if (frameworks) {
        prompt += ` The user knows ${frameworks} frameworks.`;
      }
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const data = JSON.stringify(response);
      const jsonData = JSON.parse(data);
      if (jsonData && jsonData.candidates && jsonData.candidates.length > 0) {
        const paths = jsonData.candidates[0].content.parts[0].text;
        if (paths[4] === "J" || paths[4] === "j"){
        const modpaths = paths.slice(8, -3)
        const finaldata = JSON.parse(modpaths)
        setPosts(finaldata);
        }
        else if(paths[4] === "S" || paths[4] === "s"){
        const modpaths = paths.slice(7, -3)
        const finaldata = JSON.parse(modpaths)
        setPosts(finaldata);              
        }
        else if(paths[4] === "O" || paths[4] === "o"){
        const modpaths = paths.slice(6, -3)
        const finaldata = JSON.parse(modpaths)
        setPosts(finaldata);
        }
        else if(paths[4] === "N" || paths[4] === "n"){
        const modpaths = paths.slice(5, -3)
        const finaldata = JSON.parse(modpaths)
        setPosts(finaldata);
        }
        else{
        const mpaths = paths.slice(3, -3)
        const finaldata = JSON.parse(mpaths)
        setPosts(finaldata);
        }
      } else {
          console.error("Invalid JSON structure in the response");
      }
      setLoading(false);
    };

    loadPosts();
  }, []);
  console.log(posts)
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <ReactComponent data={posts} />
    </div>
  );
};

export default AiServices;
