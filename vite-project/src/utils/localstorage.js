const Employee = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login UI",
        taskDescription: "Create responsive login page UI",
        taskDate: "2026-03-10",
        category: "design"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "1234",
    tasks: []
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "1234",
    tasks: []
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "1234",
    tasks: []
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "1234",
    tasks: []
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "1234"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(Employee));
  localStorage.setItem("Admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("Admin"));

  console.log(employees);
  console.log(adminData);
};