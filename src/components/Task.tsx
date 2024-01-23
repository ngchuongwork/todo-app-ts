import React from 'react';
import {Status} from './Status';
import { useState, useRef, useEffect} from "react";


function Task(){
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(Status.PENDING);
    const [datetime, setDatetime] = useState();
}


