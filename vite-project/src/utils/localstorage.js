localStorage.clear()

const Employee = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "1234",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
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
    firstName: "Rahul",
    email: "employee2@example.com",
    password: "1234",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Fix responsive navbar issue",
        taskDate: "2026-03-11",
        category: "development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Build admin dashboard layout",
        taskDate: "2026-03-12",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Install Tailwind",
        taskDescription: "Setup Tailwind CSS in project",
        taskDate: "2026-03-09",
        category: "setup"
      }
    ]
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "1234",
    taskNumbers: {
      active: 0,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Signup Page",
        taskDescription: "Build signup form UI",
        taskDate: "2026-03-13",
        category: "design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Form Validation",
        taskDescription: "Add validation to login form",
        taskDate: "2026-03-14",
        category: "development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project",
        taskDescription: "Initialize React project",
        taskDate: "2026-03-08",
        category: "setup"
      }
    ]
  },

  {
    id: 4,
    firstName: "Vikram",
    email: "employee4@example.com",
    password: "1234",
    taskNumbers: {
      active: 2,
      newTask: 0,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Improve UI Colors",
        taskDescription: "Update dashboard theme colors",
        taskDate: "2026-03-12",
        category: "design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Animations",
        taskDescription: "Add UI animations using CSS",
        taskDate: "2026-03-13",
        category: "frontend"
      }
    ]
  },

  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "1234",
    taskNumbers: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0
    },
    tasks: []
  }
]

const admin = [
  {
    id: 101,
    firstName: "Arjun",
    email: "admin@example.com",
    password: "1234"
  }
]

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(Employee))
  localStorage.setItem("Admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const adminData = JSON.parse(localStorage.getItem("Admin"))
  return { employees, adminData }
}