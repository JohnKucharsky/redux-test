import { useState } from "react";
import { handleEditProject, toggleAddProject } from "../redux/modalSlice";
import { useAppDispatch } from "../redux/store";

export default function Projects() {
    const [id, setId] = useState("");
    const dispatch = useAppDispatch();
    return (
        <div>
            <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch(toggleAddProject());
                }}>
                OpenAdd
            </button>
            <button
                onClick={() => {
                    dispatch(handleEditProject(Number(id)));
                }}>
                OpenEdit
            </button>
        </div>
    );
}
