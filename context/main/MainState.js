import MainContext from "./MainContext";

const MainState = ({ children }) => {
  const initialState = {
    number: 1,
  };

  return (
    <MainContext.Provider
      value={{
        number: initialState.number,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export default MainState;
