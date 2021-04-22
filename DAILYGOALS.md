# GOALS
# 4/15/2021
    1. pass state from input form to ToDoPage component
    if successful => pass state to list item component. 
    # STATUS
    1. didn't figure out how to pass up using context API - will need to continue testing to figure it out.
    2. can confirm tasks are setting correctly on inputform component will succesful console.log()
# 4/16/2021
    1. pass form data up to the todo page component and pass down to task list --> Success!!!!!!!!!!!!!!!!!!!
    - ended up extracting state from inputform component and moving it to the ToDoPage parent and then updating state by passing down a function - took way to long to get that working.
    - turns out it wasn't storing multiple entries correctly - updateTodos function was modified to correct bug
# 4/17/2021
    1. add complete and remove functionality - not going so well.....
       1. useReducer is likey the best way to go with hooks unless we switch to redux
       2. Attempted prop drilling to lift up state from child component like we did with input form - failed
          1. rolled back changes
          2. will do more research and attempt again later
# 4/18/2021
    1. refactor code to get to MVP (minimum viable product)
       1. collapse component tree to single working component and then expand back out to components 
       2. implement useReducer to manage state this time
       3. remove use form hook library and any unused code.
# WEEK OF 4/19/2021
    1. work towards MVP(minimum viable product) - need to complete button functionality - success!!!!!
       1. complete button - either handle locally with an onClick method to toggle class or figure out how to do so through the useReducer hook
          1. completed with useReducer hook!
# reached MVP! -- 04/19/2021
# 04/21/2021
   1. created working menu component
# 4/22/2021
   1. create sign in/sign up component - either modal or page -UI completed
      1. need to implement logic - another useReducer hook in prep for linking up with backend
   2. make button size consistent on todo cards. -completed!