import React from "react";

const Tasks = ({filteredExpenses,setSearchTerm, handleDeleteExpense}) => {
  return (
    <div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search expenses..."
            value={setSearchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>${expense.amount}</td>
                <td>{expense.date}</td>
                <td>
                  <button
                    className="btn btn-dark w-100"
                    onClick={() => handleDeleteExpense(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredExpenses.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No matching expenses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      
    </div>
  );
};

export default Tasks;
