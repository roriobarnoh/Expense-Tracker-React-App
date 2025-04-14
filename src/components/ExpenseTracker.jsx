import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalendarAlt } from "react-icons/fa";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

export default function ExpenseTracker() {
  const initialExpenses = [
    {
      id: 1,
      name: "Groceries",
      description: "Weekly supermarket shopping",
      amount: 75.50,
      category: "Food",
      date: "2025-04-10"
    },
    {
      id: 2,
      name: "Electric Bill",
      description: "Monthly electricity payment",
      amount: 120.00,
      category: "Utilities",
      date: "2025-04-05"
    },
    {
      id: 3,
      name: "Netflix Subscription",
      description: "Monthly streaming service",
      amount: 15.99,
      category: "Entertainment",
      date: "2025-04-01"
    },
    {
      id: 4,
      name: "Gas",
      description: "Fuel for car",
      amount: 40.00,
      category: "Transport",
      date: "2025-04-11"
    },
    {
      id: 5,
      name: "Dinner Out",
      description: "Restaurant with friends",
      amount: 60.00,
      category: "Food",
      date: "2025-04-08"
    }
  ];
  const [expenses, setExpenses] = useState(initialExpenses);
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
  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">

        {/* Main Content */}
        <div className="col-12 col-md-9 col-lg-10 p-4">
          <h2 className="mb-3">Expense Tracker</h2>
          <p className="mb-4">
            Start taking control of your finances and life. Record, <br />
            categorize and analyze your spending.
          </p>

          <div className="row">
            {/* Add Expense Form */}
            <div className="col-12 col-md-4 col-lg-4 mb-4">
              <AddTask
                form={form}
                handleAddExpense={handleAddExpense}
                handleInputChange={handleInputChange}
              />
            </div>

            {/* Expense List */}
            <div className="col-12 col-md-8 col-lg-8">
              <Tasks
                filteredExpenses={filteredExpenses}
                setSearchTerm={setSearchTerm}
                handleDeleteExpense = {handleDeleteExpense}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
