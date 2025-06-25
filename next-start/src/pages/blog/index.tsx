import Link from "next/link";
import style from "../../styles/blog.module.css";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
const data = require("../../../public/data.json");

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog Post</title>
        <meta
          name="blog"
          content="Share your experience with others!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      
      <div className="fixed top-0 bottom-0 customWidth bg-black h-28">
        <h1 className="text-6xl mt-10">Blog</h1>
        <hr />
      </div>

      <div
        id={style.main}
        className="mt-28 h-[86vh] overflow-y-scroll scrollbar scrollbar-thumb-pink-500 scrollbar-track-gray-200"
      >
        {data.map((item: any) => {
          const [profile, setProfile] = useState(`/profile/${item.profileImg}`);
          const [post, setPost] = useState(`/post/${item.img}`);
          return (
            <div
              key={item.id}
              className="box-border border-1 mt-5  w-Full h-[35rem] rounded-2xl"
            >
              <div className="flex items-center gap-4 p-5">
                <Image
                  src={profile}
                  onError={() => setProfile("/profile/default-profile.png")}
                  alt={item.profileImg}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h4>{item.username}</h4>
              </div>
              <p className="ml-5 line-clamp-1 w-[90%]">{item.description}</p>
              <Link href={`/blog/${item.id}`} className="ml-5 text-gray-400">
                Read More
              </Link>
              <div className="w-[100%] h-[65%] mt-2">
                <Image
                  src={post}
                  onError={() => setPost("/post/picture.png")}
                  alt={item.img}
                  width={800}
                  height={0}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
