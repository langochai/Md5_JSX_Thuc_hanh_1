import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

const root = ReactDOM.createRoot(document.getElementById('root'))
const name = "segs lord"
root.render(
    React.createElement("h1",{style:{textAlign:"center"}},name)
)
