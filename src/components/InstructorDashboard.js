import { useEffect } from "react"
import { Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {setClass} from '../redux/actions/classActions'

function InstructorDashboard() {

    const classes = useSelector(state => state.allClasses)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch({type:'GET_CLASS_REQUEST'})
    }, [])


    console.log(classes)
    return(
        <div>
            <Card>{classes.classes.course_name} </Card>
        </div>
    )
}

export default InstructorDashboard