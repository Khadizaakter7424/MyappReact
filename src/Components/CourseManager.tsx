import { useEffect, useState } from "react";

export interface Course {
    id: number;
    courseName: string;
}

const COURSE_API_URL = "https://localhost:7000/api/subject"; // update port to match your backend

interface Props {
    onCoursesChanged?: (courses: Course[]) => void;
}

function CourseManager({ onCoursesChanged }: Props) {
    const [courses, setCourses] = useState<Course[]>([]);
    const [courseName, setCourseName] = useState("");
    const [editId, setEditId] = useState<number | null>(null);

    const fetchCourses = async () => {
        const res = await fetch(COURSE_API_URL);
        const data = await res.json();
        setCourses(data);
        onCoursesChanged?.(data);
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const resetForm = () => {
        setCourseName("");
        setEditId(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!courseName.trim()) return;

        if (editId === null) {
            await fetch(COURSE_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ courseName }),
            });
        } else {
            await fetch(`${COURSE_API_URL}/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: editId, courseName }),
            });
        }

        resetForm();
        fetchCourses();
    };

    const handleEdit = (c: Course) => {
        setEditId(c.id);
        setCourseName(c.courseName);
    };

    const handleDelete = async (id: number) => {
        await fetch(`${COURSE_API_URL}/${id}`, { method: "DELETE" });
        fetchCourses();
    };

    return (
        <div className="course-section">
            <h2>Courses</h2>
            <form className="student-form course-form" onSubmit={handleSubmit}>
                <label>Course Name:</label>
                <input
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="e.g. Computer Science"
                    required
                />
                <button type="submit">{editId === null ? "Add Course" : "Update Course"}</button>
                {editId !== null && (
                    <button type="button" className="cancel-btn" onClick={resetForm}>
                        Cancel
                    </button>
                )}
            </form>

            <table className="student-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Course Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.courseName}</td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEdit(c)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(c.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CourseManager;
