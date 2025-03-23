# Matrix Inverse Calculator

## 🧑‍💻 About the Project

Welcome to the **Matrix Inverse Calculator**! This is a React-based web application that allows users to calculate the inverse of square matrices of size 2x2, 3x3, and 4x4. The application provides an intuitive and interactive interface where users can manually input matrix values, select matrix size, and instantly see the inverse result.

The app uses the powerful **mathjs** library to handle matrix calculations, ensuring accurate and efficient computations.

---

## 🚀 Features

- **Interactive Matrix Input:** Users can enter values for 2x2, 3x3, or 4x4 matrices.
- **Dynamic Matrix Size Selection:** Easily switch between different matrix sizes using a dropdown.
- **Matrix Inversion:** Calculate the inverse of a square matrix and see the result instantly.
- **Error Handling:** The app provides user-friendly error messages if the matrix cannot be inverted.

---

## 🛠️ Technologies Used

- **React.js** - JavaScript library for building user interfaces.
- **mathjs** - Powerful mathematics library for complex calculations.
- **CSS** - Used for styling and creating a responsive, user-friendly design.

---

## 🔧 Setup Instructions

To get started with this project locally, follow the steps below:

### 1. Clone the Repository

```
git clone https://github.com/yourusername/matrix-inverse-calculator.git
```

### 2. Navigate to the Project Directory
```

cd matrix-inverse-calculator
```

### 3. Install Dependencies
Make sure you have Node.js and npm installed. Then run:

```
npm install
```

### 4. Run the Application
Start the development server:

```
npm start
```


This will open the app in your default browser. The app will be live at http://localhost:3000.

## 🧑‍💻 Usage
Select Matrix Size: Choose between a 2x2, 3x3, or 4x4 matrix from the dropdown.

Enter Values: Input the values for each element in the matrix. Each element is editable via an input field.

Calculate Inverse: After entering the values, click the "Calculate Inverse" button to compute the matrix inverse.

View Result: If the inverse exists, it will be displayed below the input area in JSON format. If the matrix is not invertible, an error message will appear.
