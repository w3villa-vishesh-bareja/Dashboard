import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/form.css'

function EmployeeForm() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1); 
  const [employeesPerPage] = useState(5); 

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
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
    setFormData({ name: '', email: '' });
  };

  const handleEdit = (index) => {
    setFormData(employees[index]);
    setEditingIndex(index);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  // Simplified pagination
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-4 w-full max-w-4xl mx-auto overflow-y-auto custom-scrollbar ">
      <h1 className="text-xl font-bold mb-4">Employee Management</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        className="pl-3 pr-4 py-2 rounded-2xl bg-gray-100 focus:outline-none mb-4"
      />

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
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

      {filteredEmployees.length === 0 ? (
        <p className="text-2xl text-center mt-4">No Employees Found</p>
      ) : (
        <div className='w-full overflow-x-auto  '>
        <table className="min-w-[400px] border-collapse border w-full ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((emp, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{indexOfFirstEmployee + index + 1}</td>
                <td className="border p-2">{emp.name}</td>
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
          </tbody>
        </table>
        </div>
      )}
      <div className="mt-4 flex justify-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-gray-300 px-4 py-2 rounded disabled:bg-gray-200"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-gray-300 px-4 py-2 rounded disabled:bg-gray-200"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EmployeeForm;
