import { useEffect, useState } from "react";
// @ts-expect-error The stylesheet is resolved by the bundler at runtime.
import "./StudentInformation.css";
import CourseManager, { type Course } from "./CourseManager";

interface Student {
    id: number;
    name: string;
    age: number;
    phone: string;
    email: string;
    address: string;
    birthOfDate: string;
    bloodGroup: string;
    courseFees: number;
    hobbies: string;
    active: boolean;
    subjectId: number;
    subject?: Course | null;
}

const API_URL = "https://localhost:7000/api/student"; // update port to match your backend

const emptyForm = {
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    birthOfDate: "",
    bloodGroup: "",
    subjectId: "",
    courseFees: "",
    hobbies: "",
    active: true,
};

function StudentInformation() {
    const [students, setStudents] = useState<Student[]>([]);
    const [form, setForm] = useState(emptyForm);
    const [editId, setEditId] = useState<number | null>(null);
    const [courses, setCourses] = useState<Course[]>([]);

    const fetchStudents = async () => {
        const res = await fetch(API_URL);
        const data = await res.json();
        setStudents(data);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const resetForm = () => {
        setForm(emptyForm);
        setEditId(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            name: form.name,
            age: Number(form.age),
            phone: form.phone,
            email: form.email,
            address: form.address,
            birthOfDate: form.birthOfDate,
            bloodGroup: form.bloodGroup,
            subjectId: Number(form.subjectId),
            courseFees: Number(form.courseFees),
            hobbies: form.hobbies,
            active: form.active,
        };

        if (editId === null) {
            await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
        } else {
            await fetch(`${API_URL}/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: editId, ...payload }),
            });
        }

        resetForm();
        fetchStudents();
    };

    const handleEdit = (s: Student) => {
        setEditId(s.id);
        setForm({
            name: s.name,
            age: String(s.age),
            phone: s.phone,
            email: s.email,
            address: s.address,
            birthOfDate: s.birthOfDate?.split("T")[0] ?? "",
            bloodGroup: s.bloodGroup,
            subjectId: String(s.subjectId),
            courseFees: String(s.courseFees),
            hobbies: s.hobbies,
            active: s.active,
        });
    };

    const handleDelete = async (id: number) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        fetchStudents();
    };

    return (
        <div className="student-page">
            <h1>Student Information</h1>

            <CourseManager onCoursesChanged={setCourses} />

            <h2>{editId === null ? "Add Student" : "Edit Student"}</h2>
            <form className="student-form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input name="name" value={form.name} onChange={handleChange} required />

                <label>Age:</label>
                <input name="age" type="number" value={form.age} onChange={handleChange} required />

                <label>Phone:</label>
                <input name="phone" value={form.phone} onChange={handleChange} required />

                <label>Email:</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required />

                <label>Address:</label>
                <input name="address" value={form.address} onChange={handleChange} required />

                <label>Birth of Date:</label>
                <input name="birthOfDate" type="date" value={form.birthOfDate} onChange={handleChange} required />

                <label>Blood Group:</label>
                <input name="bloodGroup" value={form.bloodGroup} onChange={handleChange} required />

                <label>Subject:</label>
                <select name="subjectId" value={form.subjectId} onChange={handleChange} required>
                    <option value="" disabled>Select a course</option>
                    {courses.map((c) => (
                        <option key={c.id} value={c.id}>{c.courseName}</option>
                    ))}
                </select>

                <label>Course Fees:</label>
                <input name="courseFees" type="number" value={form.courseFees} onChange={handleChange} required />

                <label>Hobbies:</label>
                <input name="hobbies" value={form.hobbies} onChange={handleChange} required />

                <label className="checkbox-label">
                    <input name="active" type="checkbox" checked={form.active} onChange={handleChange} />
                    Active
                </label>

                <button type="submit">{editId === null ? "Add" : "Update"}</button>
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
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Birth of Date</th>
                        <th>Blood Group</th>
                        <th>Subject</th>
                        <th>Course Fees</th>
                        <th>Hobbies</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.phone}</td>
                            <td>{s.email}</td>
                            <td>{s.address}</td>
                            <td>{s.birthOfDate?.split("T")[0]}</td>
                            <td>{s.bloodGroup}</td>
                            <td>{s.subject?.courseName ?? ""}</td>
                            <td>{s.courseFees}</td>
                            <td>{s.hobbies}</td>
                            <td>{s.active ? "true" : "false"}</td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEdit(s)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(s.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentInformation;
