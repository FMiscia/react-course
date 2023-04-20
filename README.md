# React Course

This project is created using **[Vite](https://vitejs.dev/)** . In order to install the dependencies and run the application use the following commands:

    yarn
    yarn dev

Each macro section of the course has its own branch, and, inside the branch, every commit is the result of a specific argument

## 1. Basic Concepts [branch feat/introduction]

 - Project Bootstrap and project overview
 - What JSX is and how it is used
	 - Conditional rendering
	 - List Rendering
	 - Complex List
- Components and Props
	- Data flow
	- Props and typing
	- Some CSS
- State Variables with useState
	- useState hook
	- Render cycles
    - Immutability
	- Put everything together with a form

## 2. Intermediate Concepts [branch feat/intermediate-concepts]

- Reducer
	- useReducer hook
	- Actions and State
	- Convert an useState to an useReducer
- Context
	- Props drilling
	- Root level reducer to handle app state
	- Creation of a Provider Component
- Component Lifecycle and Hooks
	- How to handle component mount/unmount events
	- React.StrictMode caveat
	- Hooks concepts
	- Creation of useIsOnline hook
	- How to handle componentUpdate events

## 2. Final Concepts [branch feat/intermediate-concepts]

- Optimization
	- Inefficient computation
	- useMemo hook
	- memo decorator
	- useCallback
- Ref
	- useRef for variables
	- useRef for HtmlElement
	- forwardRef decorator
	- ComponentProps(With/Without)Ref<?> type