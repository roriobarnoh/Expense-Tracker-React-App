import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalendarAlt } from "react-icons/fa";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [form, setForm] = useState({ name: "", description: "", amount: "", category: "", date: "" });

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

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2" style={{ backgroundColor: "#add8e6", height: "100vh" }}>
          {/* Sidebar content */}
        </div>
        <div className="col-md-10">
          <h2 className="mb-4">Expense Tracker</h2>
          <p>
              Start taking control of your finances and life. Record, <br />
             categorize and analyze your spending
            </p>

          <div className="row">
            <div className="col-md-4">
              <AddTask form={form} handleAddExpense={handleAddExpense} handleInputChange={handleInputChange}/>
            </div>
            <div className="col-md-8">
              <Tasks filteredExpenses={filteredExpenses} setSearchTerm={setSearchTerm}/>
            </div>

          </div>
        </div>
      </div>
      </div>
  );
}
