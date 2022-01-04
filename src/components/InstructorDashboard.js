import axios from "axios"
import { useEffect } from "react"
import { Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {setClass} from '../redux/actions/classActions'

function InstructorDashboard() {

    const classes = useSelector(state => state.allClasses)
    const dispatch = useDispatch()

    const getClasses = async function(){
        const response = await axios.get('http://127.0.0.1:8000/instructor/getClass').catch(e => {
            console.log(e)
        })
        dispatch(setClass(response.data.data))
    }
    useEffect(() => {
        getClasses()
    }, [])
    console.log(classes)
    return(
        <div>
            <Card>{classes.classes.course_name} </Card>
        </div>
    )
}

export default InstructorDashboard