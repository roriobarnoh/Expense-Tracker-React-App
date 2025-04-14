import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalendarAlt } from "react-icons/fa";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.amount) return;
    setExpenses([...expenses, { ...form, id: Date.now() }]);
    setForm({ name: "", description: "", amount: "", category: "", date: "" });
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Sidebar */}
        <div className="col-12 col-md-3 col-lg-2 px-3 py-4 bg-light min-vh-100">
          <h4 className="text-center">Menu</h4>
          {/* Sidebar content (e.g., navigation, summary, filters) */}
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 col-lg-10 p-4">
          <h2 className="mb-3">Expense Tracker</h2>
          <p className="mb-4">
            Start taking control of your finances and life. Record, <br />
            categorize and analyze your spending.
          </p>

          <div className="row">
            {/* Add Expense Form */}
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <AddTask
                form={form}
                handleAddExpense={handleAddExpense}
                handleInputChange={handleInputChange}
              />
            </div>

            {/* Expense List */}
            <div className="col-12 col-md-7 col-lg-8">
              <Tasks
                filteredExpenses={filteredExpenses}
                setSearchTerm={setSearchTerm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
