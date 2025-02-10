import React, { useRef, useState } from 'react';
import axios from 'axios';
function EmployeeForm() {
  const [employees, setEmployees] = useState([
  ]);
  
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async() =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedEmployees = [...employees];
      updatedEmployees[editingIndex] = { ...formData, id: employees[editingIndex].id };
      setEmployees(updatedEmployees);
      setEditingIndex(null);
    } else {
      const newEmployee = { ...formData, id: Date.now().toString() };
      setEmployees([...employees, newEmployee]);
    }
    setFormData({ firstName: '', lastName: '', email: '' });
  };

  const handleEdit = (index) => {
    setFormData(employees[index]);
    setEditingIndex(index);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const filteredEmployees = employees.filter((emp) => 
    emp.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Employee Management</h1>
      
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={handleSearch}
        className="pl-3 pr-4 py-2 rounded-2xl bg-gray-100 focus:outline-none mb-4"
      />
      
      {/* Form for adding/editing employee */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingIndex !== null ? 'Update Employee' : 'Add Employee'}
        </button>
      </form>

      {/* Render employees table */}
      {filteredEmployees.length === 0 ? (
        <p className="text-2xl text-center mt-4">No Employees Found</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp, index) => (
              <tr key={emp.id} className="text-center">
                <td className="border p-2">{emp.id}</td>
                <td className="border p-2">{emp.firstName}</td>
                <td className="border p-2">{emp.lastName}</td>
                <td className="border p-2">{emp.email}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-gray-500 text-center">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeForm;
