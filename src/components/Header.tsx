import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { handleEditProject, toggleAddProject } from "../redux/modalSlice";
import { useAppDispatch, useTypedSelector } from "../redux/store";
import AddProject from "./AddProject";
import EditProject from "./EditProject";

export default function Header() {
    const { edit, isOpenAdd } = useTypedSelector((s) => s.modal);
    const dispatch = useAppDispatch();
    return (
        <div>
            <nav>
                <Link to="/users">Users</Link>
                <Link to="/projects">Projects</Link>
            </nav>
            <Drawer
                open={isOpenAdd}
                onClose={() => dispatch(toggleAddProject())}>
                <AddProject />
            </Drawer>
            <Drawer
                open={edit.isOpen}
                onClose={() => dispatch(handleEditProject(null))}>
                <EditProject id={edit.id} />
            </Drawer>
        </div>
    );
}
