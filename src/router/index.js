import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom'

const Home = lazy(_ => import("@p/home"))
const Find = lazy(_ => import("@p/find"))
const Blog = lazy(_ => import("@p/blog"))
const AboutMe = lazy(_ => import("@p/about-me"))
const BlogDetail = lazy(_ => import("@p/blog/blogdetail"))
// const SkeletonComp = lazy(_ => import("@c/skeleton"))

export const router = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/Home" />
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Find',
    component: Find
  },
  {
    path: '/Blog',
    component: Blog,
    exact: true,
  }, 
  {
    path: "/Blog/:id",
    component: BlogDetail
  },
  {
    path: '/AboutMe',
    component: AboutMe
  }
]